import BaseApi from '../BaseApi';
import { bind } from 'decko';

class AuthApi extends BaseApi {
  baseUrl = '';
  converter = null;

  constructor(baseUrl = '') {
    super(baseUrl);
    this.baseUrl = `${baseUrl}/api/user`;
  }

  @bind
  signIn(email, password) {
    return this.sendQuery(
      this.queryTypes.POST,
      `${this.baseUrl}/login/email`,
      { email, password },
    );
  }
}

export default AuthApi;
