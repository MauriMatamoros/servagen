import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import clientForm from '../ui/clientForm';
import NotFound from '../ui/NotFound';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={clientForm}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
