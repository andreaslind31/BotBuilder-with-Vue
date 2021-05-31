import axios from 'axios';

export default {
  namespaced: true,
  state: {
    foo: 'robots-foo',
    cart: [],
    parts: null,
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
    getParts({ commit }) {
    // this will be using the proxy in vue.config.js
    // and then commit the parts data to the store through the updateParts mutation
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('api/cart', cart).then(() => commit('addRobotToCart', robot));
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((robotHead) => robotHead.head.onSale);
      //   (robotTorso) => robotTorso.torso.onSale, (robotArm) => robotArm.arm.onSale
      // Vill lägga till fler filter men får det inte att funka?
    },
    foo(state) {
      return `robots-getter/${state.foo}`;
    },
  },
};
