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
  addUserName() {
    return this.sendQuery(
      this.queryTypes.GET,
      `${this.baseUrl}/rooms/user/add`,
    );
  }

}

export default RouletteApi;
