import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../ui/App';
import NotFound from '../ui/NotFound';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
