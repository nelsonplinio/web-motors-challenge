import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

import history from './services/history';

import SearchCar from './pages/SearchCar';
import SearchMotorcycle from './pages/SearchMotorcycle';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={SearchCar} />
        <Route path="/search-motorcycle" component={SearchMotorcycle} />
      </Switch>
    </Router>
  );
}
