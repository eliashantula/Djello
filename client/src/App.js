import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import BoardContainer from "./containers/BoardContainer";
import SpecificBoardContainer from "./containers/SpecificBoardContainer";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav
            className="navbar navbar-light bg-faded"
            style={{ marginBottom: "40px", backgroundColor: "red", borderRadius: "20px" }}

          >
            <h1>
              <a className="navbar-brand"><Link to="/">Welcome to your DJELLO!</Link></a>{" "}
            </h1>
          </nav>
          <div
            className="App container-fluid"
            style={{ backgroundColor: "blue", height: "800px" }}
          >
            <div>
              <BoardContainer />
            </div>

           
          
             
                <Switch>
                  <Route
                    exact
                    path="/board/:id"
                    component={SpecificBoardContainer}
                  />
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <h1 style={{ marginTop: "60px" }}>Welcome</h1>
                    )}
                  />
                </Switch>
              </div>
            </div>
         
      </Router>
    );
  }
}

export default App;
