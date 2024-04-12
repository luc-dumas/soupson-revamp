import { defineStore } from 'pinia';
import api from '../../services/api';

export const useEventsStore = defineStore('events', {
  state: () => ({
    events: [],
  }),
  actions: {
    async fetchEvents( ) {
      console.log('is this hit?')
      const events = await api.getEvents();
      this.events = events;
    },
  },
})