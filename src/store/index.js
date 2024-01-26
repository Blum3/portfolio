import { createStore } from 'vuex';

export default createStore({
  state: {
    chevrons: {
        
      leftCurrent: "/images/chevron-gauche-classic.png",
      rightCurrent: "/images/chevron-droite-classic.png",
    },
  },
  mutations: {
    updateChevrons(state, style) {
        // Update leftCurrent and rightCurrent based on the provided style
        state.chevrons.leftCurrent = `/images/chevron-gauche-${style}.png`;
        state.chevrons.rightCurrent = `/images/chevron-droite-${style}.png`;
    },
  },
  getters: {
    // Getter to get chevrons
    getChevrons(state) {
      return state.chevrons;
    },
  },
});