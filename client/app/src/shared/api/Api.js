import { AuthApi } from './Auth';
import { PaymentApi } from './Payment'

class Api {
  constructor(baseUrl = '') {
    this.auth = new AuthApi(baseUrl);
    this.payment = new PaymentApi(baseUrl);
  }

}

export default Api;

