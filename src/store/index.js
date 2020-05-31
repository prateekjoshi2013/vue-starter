import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    parts: null,
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    //    {state,getters,commit,dispatch} = context;
    getParts({ commit }) {
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error);
    },
  },

});
