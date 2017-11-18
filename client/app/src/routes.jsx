import * as React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { App } from './modules/App';

function createRoutes(modules, store) {
  return (
    <Route path="/" component={App}>
      { modules.map(module => module.getRoutes ? module.getRoutes() : null) }
    </Route>
  );
}

export default createRoutes;
