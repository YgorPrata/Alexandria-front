import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from '../components/Header/Header';
import Home from './Home/Home';

export const App = () => (
  <Fragment>
    <Header />
    <Home />
    {/* <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router> */}
  </Fragment>
);

export default App;