import { AuthApi } from './Auth';
import { PaymentApi } from './Payment';
import { RouletteApi } from './Roulette';

class Api {
  constructor(baseUrl = '') {
    this.auth = new AuthApi(baseUrl);
    this.payment = new PaymentApi(baseUrl);
    this.roulette = new RouletteApi(baseUrl);
  }

}

export default Api;

