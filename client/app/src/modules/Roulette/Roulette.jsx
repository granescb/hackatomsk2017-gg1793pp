import * as React from 'react';
import { Route } from 'react-router';

import Layout from './view/Layout';

class RouletteLayout {
  getRoutes() {
    return (
      <Route key="live">
        <Route path="roulette" component={Layout} />
      </Route>
    );
  }

}

export default RouletteLayout;
