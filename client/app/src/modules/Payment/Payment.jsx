import * as React from 'react';
import { Route } from 'react-router';
import { bind } from 'decko';

import Layout from './view/Layout/Layout';

class PaymentLayout {
  getRoutes() {
    return <Route key="top-app" path="top-app" component={Layout} />;
  }
}

export default PaymentLayout;
