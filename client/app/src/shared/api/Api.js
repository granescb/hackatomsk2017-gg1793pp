import { AuthApi } from './Auth';
import { PaymentApi } from './Payment';
import { RouletteApi } from './Roulette';
import { BetApi } from './Bet';

class Api {
  constructor(baseUrl = '') {
    this.auth = new AuthApi(baseUrl);
    this.payment = new PaymentApi(baseUrl);
    this.roulette = new RouletteApi(baseUrl);
    this.bet = new BetApi(baseUrl);
  }

}

export default Api;

