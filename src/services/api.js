import axios from 'axios';

class Api {
  constructor() {
    this.initialize();
  }

  async initialize() {
    this.httpClient = axios.create({ baseURL: 'http://soupconsalon.club/' });
  }

  async getEvents() { 
    return this.httpClient.get('api/events');
  }

  // async postWeVideoUserAttribute({ key, value }) {
  //   return this.httpClient.post(
  //     `${WEVIDEO_API_ENDPOINTS.addUserProperty}?key=${encodeURIComponent(key)}&value=${encodeURIComponent(value)}`,
  //   );
  // }

  // async sendSurveyToEnjoyHQ(data) {
  //   return this.httpClient.post(WEVIDEO_API_ENDPOINTS.sendSurveyToEnjoyHQ, data);
  // }
}

const api = new Api();
export default api;
