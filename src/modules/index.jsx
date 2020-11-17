import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

// import { Header, Footer }  from '../components/index'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Home from './home/home'
import Busca from './busca/busca'
import Arquitetura from './Arquitetura/arquitetura'
import Arte from './arte/arte'
import Livro from './livro/livro'
import CadastroArquitetura from './Arquitetura/cadastro-arquitetura/cadastro-arquitetura'
import LinhaDoTempo from './linha-do-tempo/linha-do-tempo'

export const App = () => (
  <Fragment>
    <Router>
      <Header />
      <span className="header-spancing"></span>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/busca-completa" component={Busca} />
        <Route path="/arquitetura" component={Arquitetura} />
        <Route path="/arte" component={Arte} />
        <Route path="/livro" component={Livro} />
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