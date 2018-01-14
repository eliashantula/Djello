import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import BoardContainer from'./containers/BoardContainer';
import SpecificBoardContainer from'./containers/SpecificBoardContainer';
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
          
                <NavLink exact to="/newboard" activeClassName="active">
        New Board
      </NavLink>{' '}
     

           
               <div>
<BoardContainer />
      </div>

      
            <div className="row">

              <div className="col-xl-6">
             
             </div>
              <div className="col-xl-6">
                <Switch>
                <Route  exact path="/board/:id" component = {SpecificBoardContainer} />  
                <Route exact path="/" render = {()=><h1 style={{marginTop: "60px"}}>Welcome</h1>} />
                
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
