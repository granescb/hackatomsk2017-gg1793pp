import * as React from 'react';
import { Route } from 'react-router';
import { bind } from 'decko';

import Layout from './view/Layout/Layout';

class Payment {
  getRoutes() {
    return <Route key="Top-app" path="top-app" component={Layout} />;
  }
}

export default Payment;
