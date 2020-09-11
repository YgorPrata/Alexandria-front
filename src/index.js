import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './modules/App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment><App /></Fragment>
, document.getElementById('root'))

serviceWorker.unregister();
