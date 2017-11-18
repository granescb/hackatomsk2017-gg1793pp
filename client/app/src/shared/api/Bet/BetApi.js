import BaseApi from '../BaseApi';
import { bind } from 'decko';

class BetApi extends BaseApi {
  baseUrl = '';
  converter = null;

  constructor(baseUrl = '') {
    super(baseUrl);
    this.baseUrl = `${baseUrl}`;
  }

  @bind
  makeBet(amount) {
    return this.sendQuery(
      this.queryTypes.POST,
      `${this.baseUrl}/topup/room`,
      {
        amount,
      },
    );
  }
}

export default BetApi;
