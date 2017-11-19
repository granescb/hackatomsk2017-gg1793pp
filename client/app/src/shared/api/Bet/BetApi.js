import BaseApi from '../BaseApi';
import { bind } from 'decko';

class BetApi extends BaseApi {
  baseUrl = '';
  converter = null;

  constructor(baseUrl = '') {
    super(baseUrl);
    this.baseUrl = `${baseUrl}/api`;
  }

  @bind
  makeBet(amount) {
    return this.sendQuery(
      this.queryTypes.POST,
      `${this.baseUrl}/rooms/place`,
      {
        amount,
      },
    );
  }
}

export default BetApi;
