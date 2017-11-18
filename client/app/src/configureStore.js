import {
  compose,
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

import * as authFeature from './features/auth';
import * as roomsFeature from './features/rooms';
import * as paymentFeature from './features/payment';

function configureStore(modules, extra) {
  const middlewares = [
    thunk.withExtraArgument(extra),
  ];

  const reducer = createReducer(modules);

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      persistState(['auth']),
      (process.env.ENV === 'browser' && window.devToolsExtension)
        ? window.devToolsExtension() : (arg => arg),
    ),
  );
  
  return store;
}

function createReducer(modules) {
  const reducersData = modules
        .filter(module => module.getReducer)
        .map(module => module.getReducer ? module.getReducer() : null);

  const modulesReducers = reducersData.reduce(
      (reducers, reducerData) => {
        return { ...reducers, [reducerData.name]: reducerData.reducer };
      },
      {},
  );
  return combineReducers({
    auth: authFeature.reducer,
    rooms: roomsFeature.reducer,
    payment: paymentFeature.reducer,
    ...modulesReducers,
  });
}

export { createReducer };
export default configureStore;
