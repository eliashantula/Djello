import React, { Component } from "react";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import CreateModal from "./CreateModal";
import CreateModalContainer from "../containers/CreateModalContainer";

class BoardList extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      theboards: this.props.boards,
      dropdownOpen: false,
      value: ""
    };
    
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.currentTarget.value
    });
  }

  componentWillReceiveProps() {
    const { getInitialBoards, boards, isFetching, currentPage, onSubmit } = this.props;

  
  }
  componentDidMount() {
    const { getInitialBoards, boards, isFetching, currentPage, onSubmit } = this.props;

    getInitialBoards();
    this.setState({
      theboards: this.props.boards
    });
  }
  render() {
    const { currentPage, getInitialBoards, boards, isFetching, onSubmit } = this.props;
    
    return (
      <div>
        <div
          className="card text-right"
          style={{ background: "white", border: "none" }}
        >
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Select a Board</DropdownToggle>
            <DropdownMenu>
              {boards.map(board => {
                return (
                  <DropdownItem
                    tag={Link}
                    exact
                    to={`/board/${board.id}`}
                    activeclassname="active"
                  >{`Board:${board.title}`}</DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
          <div className="buttons">
            <Button onClick={onSubmit} style={{ width: "175px", float: "right", marginLeft: "10px" }} value={currentPage.id} color="danger">
              Delete Board {`${currentPage.title}`}
            </Button>

            <CreateModalContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default BoardList;
