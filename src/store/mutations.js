export default {
  authUser (state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
    state.user = userData.user;
  },
  storeUser (state, user) {
    state.user = user;
  },
  clearAuthData (state, user) {
    state.idToken = null;
    state.userId = null;
    state.user = null;
  }
};
