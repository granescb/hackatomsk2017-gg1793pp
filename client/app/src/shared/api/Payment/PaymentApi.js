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
      `${this.baseUrl}/topup/fantic`,
      {
        amount,
      },
    );
  }

  @bind
  initBitapsPayment(methodID, amount) {
    return this.sendQuery(
      this.queryTypes.POST,
      `${this.baseUrl}/init-bitaps-payment`,
      {
        methodID,
        amount,
      },
    );
  }
}

export default PaymentApi;
