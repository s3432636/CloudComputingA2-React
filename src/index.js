import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Teams from "./components/teams";
import Nav from "./components/navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import reducer from "./reducer";

ReactDOM.render(
  <Provider store={createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
<Router>
    <Nav />
    <App />
  </Router>
  </Provider>,
  document.getElementById("root")
);
