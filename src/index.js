import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';
import './index.css'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'

const routing = (
  <Router>
    <React.StrictMode>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={App} ></Route>
      </Switch>
      <Footer></Footer>
    </React.StrictMode>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
