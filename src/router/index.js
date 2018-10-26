import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Dashboard from '../components/Pages/Dashboard';

import store from '../store';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter (to, from, next) {
      console.log('store.getters.user', store.getters.user);
      if (store.state.userId) {
        next();
      } else {
        next('/login');
      }
    }
  }
];

const router = new Router({
  routes,
  mode: 'history'
});

export default router;
