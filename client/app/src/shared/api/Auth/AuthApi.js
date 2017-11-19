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
      `${this.baseUrl}/login`,
      {
        login: email,
        password },
    );
  }

  @bind
  signUp(email, password) {
    return this.sendQuery(
      this.queryTypes.POST,
      `${this.baseUrl}/signup`,
      {
        login: email,
        password, 
      },
    );
  }

  @bind
  getUserBalance() {
    return this.sendQuery(
      this.queryTypes.GET,
      `${this.baseUrl}/balance`,
    );
  }
  
  @bind
  signOut() {
    return this.sendQuery(
      this.queryTypes.GET,
      `${this.baseUrl}/logout`,
    );
  }
}

export default AuthApi;
