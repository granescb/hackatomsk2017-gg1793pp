import { bind } from 'decko';
import { QueryTypes } from './utils';
import HttpActions from './HttpActions';

class BaseApi {
  baseUrl = '';
  queryTypes = {};

  constructor(baseUrl = '', version = '') {
    this.baseUrl = baseUrl;
    this.actions = new HttpActions(baseUrl, version);
    this.queryTypes = QueryTypes;
  }

  @bind
  async sendQuery(type, url, requestData = {}, options = {}, converterFunc = dt => dt) {
    let response;
    switch (type) {
      case QueryTypes.POST:
        response = await this.actions.post(url, requestData, options);
        break;
      case QueryTypes.DELETE:
        response = await this.actions.delete(url, requestData, options);
        break;
      case QueryTypes.PUT:
        response = await this.actions.put(url, requestData, options);
        break;
      default:
        response = await this.actions.get(url);
        break;
    }
    
    const { status, result } = response.data;
    const success = status === 0;
    const resultResponse = {
      success,
      data: success ? converterFunc(result) : null,
      errorMessage: success ? null : 'Ошибка сервера',
    };
    return resultResponse;
  }
}

export default BaseApi;
