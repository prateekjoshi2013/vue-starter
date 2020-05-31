import axios from 'axios';

export default {
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
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot));
    },
  },

};
