
'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Blockchain from './components/Blockchain';
import Accounts from './components/Account';
import Index from './components/Index';
import createBrowserHistory from 'history/createBrowserHistory';
import AccountDetail from './components/AccountDetail';

class App extends React.Component {
  render(){
      return (
        <Router history={false}>
        <div>
        <div className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse"
                      data-target="#example-navbar-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="example-navbar-collapse">
              <div className="nav navbar-nav">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/blockchain">BLOCKCHAIN</Link></li>
                <li><Link to="/accounts">Accounts</Link></li>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
            <Route  exact path="/" component={Index}/>
            <Route path="/blockchain" component=  {Blockchain}/>
            <Route path="/accounts/:id"   component={AccountDetail}/>
            <Route exact path="/accounts"   component={Accounts}/>
        </div>
        </div>
      </Router>
      )
  }
}
ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
