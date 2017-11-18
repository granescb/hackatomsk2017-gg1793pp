import { AuthApi } from './Auth';

class Api {
  constructor(baseUrl = '') {
    this.auth = new AuthApi(baseUrl);
  }

}

export default Api;

