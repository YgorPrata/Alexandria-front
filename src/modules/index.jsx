import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

// import { Header, Footer }  from '../components/index'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from './Home/Home'
import Arquitetura from './Arquitetura/Arquitetura'
import CadastroArquitetura from './Arquitetura/CadastroArquitetura/CadastroArquitetura'
import LinhaDoTempo from './LinhaDoTempo/LinhaDoTempo'

export const App = () => (
  <Fragment>
    <Router>
      <Header />
      <span className="header-spancing"></span>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/arquitetura" component={Arquitetura} />
        <div className="container">
          <Route path="/cadastro/arquitetura" component={CadastroArquitetura} />
          <Route path="/linha-do-tempo" component={LinhaDoTempo} />
        </div>
      </Switch>
      <Footer />
    </Router>
  </Fragment>
);

export default App;