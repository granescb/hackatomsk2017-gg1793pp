import BaseApi from '../BaseApi';
import { bind } from 'decko';

class RouletteApi extends BaseApi {
  baseUrl = '';
  converter = null;

  constructor(baseUrl = '') {
    super(baseUrl);
    this.baseUrl = `${baseUrl}/api`;
  }

  @bind
  addUserRoom() {
    return this.sendQuery(
      this.queryTypes.GET,
      `${this.baseUrl}/rooms/user/add`,
    );
  }

  @bind
  pullingStatusRoom() {
    return this.sendQuery(
      this.queryTypes.GET,
      `${this.baseUrl}/rooms/mylist`,
    );
  }

}

export default RouletteApi;
