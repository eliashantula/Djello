import React, {Component} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link
} from "react-router-dom";


class BoardList extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      theboards: this.props.boards,
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentDidMount() {
    const {getInitialBoards, boards, isFetching} = this.props;

    getInitialBoards();
  }
  render() {
    const {getInitialBoards, boards, isFetching} = this.props;
   
    return (
      <div>

        <div className="card text-right" style={{background: "white", border: "none"}}>
          
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Select a Board
        </DropdownToggle>
        <DropdownMenu>
           {boards.map(board => {
            return (
          <DropdownItem tag={Link} exact to={`/board/${board.id}`} activeClassName="active">{`Board:${board.title}`}</DropdownItem>
         
)
          })}
        </DropdownMenu>
      </Dropdown>
         
        </div>
      </div>
    );
  }
}

export default BoardList;