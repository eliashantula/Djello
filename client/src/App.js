import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import BoardContainer from'./containers/BoardContainer';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
      return (
      <Router>
        <div>
          <nav
            className="navbar navbar-light bg-faded"
            style={{marginBottom: "40px"}}>
            <h1>
              <a className="navbar-brand">
                Welcome to your DJELLO!
              </a>{" "}
            </h1>
          </nav>
          <div className="App container-fluid">
           <div className="Board">
                
              </div>
               <div>
      <NavLink exact to="/about" activeClassName="active">
        About
      </NavLink>{' '}
      <NavLink exact to="/yourboards" activeStyle={{color: 'red'}}>
        Your Boards
      </NavLink>{' '}
      </div>
            <div className="row">
              <div className="col-xl-6">
                <BoardContainer />
              </div>
              <div className="col-xl-6">
                <Switch>
                
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
