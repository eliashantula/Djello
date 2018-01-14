import React, {Component} from "react";


import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class BoardList extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const {getInitialBoards, boards, isFetching} = this.props;

    getInitialBoards();
  }
  render() {
    const {getInitialBoards, boards, isFetching} = this.props;
    console.log(this.props.boards)
    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Boards</div>
          <div className="card-block">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Board Title:</th>
                  <th scope="col">Created By User:</th>
                </tr>
              </thead>
              <tbody>
                
                  
          
                  return (
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <NavLink exact to={`/api/boards/?`} activeClassName="active">
        Enter Board
      </NavLink>{' '}
                      </td>
                    </tr>
                  );
                
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted">
          </div>
        </div>
      </div>
    );
  }
}

export default BoardList;