import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import createRoutes from './routes';
import configureStore, { createReducer } from './configureStore';
import Api from './shared/api/Api';
import { RouletteModule } from './modules';
import './App.styl';

let history = hashHistory;

if (process.env.ENV === 'browser') {
  history = browserHistory;
}

let api = new Api('http://localhost:8000');

if (process.env.NODE_ENV == 'production') api = new Api('');

const modules = [
  new RouletteModule(),
];
const store = configureStore(modules, { api });
const routes = createRoutes(modules, store);
const rootComponent = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

if (process.env.ENV === 'browser') {
  ReactDOM.render(rootComponent, document.querySelector('#root'));
}

export { ReactDOM };
export default rootComponent;
