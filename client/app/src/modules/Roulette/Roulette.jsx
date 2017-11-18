import * as React from 'react';
import { Route } from 'react-router';

import { reducer } from 'modules/Roulette/redux';

import Layout from './view/Layout';

class RouletteLayout {
  getRoutes() {
    return (
      <Route key="live">
        <Route path="roulette" component={Layout} />
      </Route>
    );
  }

  getReducer() {
    return { name: 'roulette', reducer };
  }
}

export default RouletteLayout;
