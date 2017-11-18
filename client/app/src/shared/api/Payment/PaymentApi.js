import BaseApi from '../BaseApi';
import { bind } from 'decko';

class PaymentApi extends BaseApi {
  baseUrl = '';
  converter = null;

  constructor(baseUrl = '') {
    super(baseUrl);
    this.baseUrl = `${baseUrl}/api/user`;
  }

  @bind
  initCandyWrapper(methodID, amount) {
    return this.sendQuery(
      this.queryTypes.POST,
      `${this.baseUrl}/patment/init-candy-wrapper`,
      {
        methodID : methodID,
        amount : amount,
      },
    );
  }

  initCandyWrapper(methodID, amount) {
    return this.sendQuery(
      this.queryTypes.POST,
      `${this.baseUrl}/patment/init-candy-wrapper`,
      {
        methodID : methodID,
        amount : amount,
      },
    );
  }
}

export default PaymentApi;
