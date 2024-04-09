import axios from axios;

export const eventsActions = {
  async fetchEvents({ commit }) {
    const events = await this.$axios.$get('events');
    commit('SET_EVENTS', events);
    return events;
  },


  // updateUserData({
  //   rootGetters,
  //   commit,
  // } = {}, user) {
  //   if (rootGetters['auth/isAuthenticatedAsLearner']) {
  //     commit('UPDATE_LEARNER_DATA', user);
  //   } else {
  //     commit('UPDATE_INSTRUCTOR_DATA', user);
  //   }
  //   return user;
  // },
};

export default eventsActions;