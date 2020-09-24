import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'

import { Header, Footer }  from '../components/index'
import Home from './Home/Home'
import Arquitetura from './Arquitetura/Arquitetura'

export const App = () => (
  <Fragment>
    <Header />
    <Home />
    <Arquitetura />

    {/* <Router history={history}>
      <Switch>
      <Route path="/" component={Home} />
      </Switch>
    </Router> */}
    <Footer />
  </Fragment>
);

export default App;