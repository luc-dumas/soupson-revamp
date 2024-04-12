import api from '../../services/api';
import axios from axios;

const actions = {
  async fetchEvents( context ) {
    const events = await api.getEvents();
    context.commit('SET_EVENTS', events);
    return events;
  },
};

// export const eventsActions = {
//   async fetchEvents({ commit }) {
//     const events = await this.api.getEvents();
//     commit('SET_EVENTS', events);
//     return events;
//   },


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
// };

export default actions;