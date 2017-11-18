import BaseApi from '../BaseApi';
import { bind } from 'decko';

class PaymentApi extends BaseApi {
  baseUrl = '';
  converter = null;

  constructor(baseUrl = '') {
    super(baseUrl);
    this.baseUrl = `${baseUrl}/api/payment`;
  }

  @bind
  initCandyWrapper(methodID, amount) {
    return this.sendQuery(
      this.queryTypes.POST,
      `${this.baseUrl}/init-candy-wrapper`,
      {
        methodID : methodID,
        amount : amount,
      },
    );
  }

  @bind
  initBitapsPayment(methodID, amount) {
    return this.sendQuery(
      this.queryTypes.POST,
      `${this.baseUrl}/init-bitaps-payment`,
      {
        methodID : methodID,
        amount : amount,
      },
    );
  }
}

export default PaymentApi;
