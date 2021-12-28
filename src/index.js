import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';
import './index.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/login';

const routing = (
  <Router>
    <React.StrictMode>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={App} ></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/logout' component={Logout}></Route>
      </Switch>
      <Footer></Footer>
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
