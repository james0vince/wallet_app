import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  getters,
  mutations,
  actions
});

export default store;
