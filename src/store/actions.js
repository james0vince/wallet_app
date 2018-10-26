import axios from 'axios';
import router from '../router';

export default {
  setLogoutTimer ({commit, dispatch}, experationTimer) {
    setTimeout(() => {
      dispatch('logout');
    }, experationTimer * 1000);
  },
  signup (context, payload) {
    axios.post('/user/signup', {
      email: payload.email,
      password: payload.password,
      first_name: 'test',
      last_name: 'new'
    })
    .then(res => {
      context.dispatch('login', payload);
    })
    .catch(error => console.log(error));
  },
  login ({commit, dispatch}, payload) {
    axios.post('/user/login', {
      email: payload.email,
      password: payload.password
    })
    .then(res => {
      console.log(res);
      commit('authUser', {
        token: res.data.token,
        userId: res.data.userId
      });
      const now = new Date();
      const experationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);
      localStorage.setItem('experationDate', experationDate);
      dispatch('setLogoutTimer', res.data.expiresIn);

      router.push('/dashboard');
    })
    .catch(error => console.log(error));
  },
  tryAutoLogin ({commit}) {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    const experationDate = localStorage.getItem('experationDate');
    const now = new Date();

    if (now >= experationDate) {
      return;
    }

    const userId = localStorage.getItem('userId');

    commit('authUser', {token, userId});
  },
  logout ({commit}) {
    commit('clearAuthData');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('experationDate');
    router.replace('/login');
  }
};
