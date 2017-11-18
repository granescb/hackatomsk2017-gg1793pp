import * as React from 'react';
import { Route } from 'react-router';
import { bind } from 'decko';

import Layout from './view/Layout/Layout';

class PaymentModule {
  getRoutes() {
    return <Route key="top-app" path="top-app" component={Layout} />;
  }
}

export default PaymentModule;
