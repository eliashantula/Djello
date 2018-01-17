import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import List from "./List";
import CreateListModalContainer from "../containers/CreateListModalContainer";
var ContentEditable = require('react-wysiwyg');
class SpecificBoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBoard: this.props.currentBoard,
      currentPage: this.props.currentPage,
      lists: this.props.currentPage.Lists
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      console.log(nextProps);
      this.setState({
        currentBoard: this.props.getOneBoard(nextProps.match.params.id),
        currentPage: nextProps.currentPage,
        lists: nextProps.currentBoard.Lists
      });
    } else if (this.props.currentBoard !== nextProps.currentBoard) {
      console.log(nextProps.currentBoard);
      this.setState({
        lists: nextProps.currentBoard.Lists,
        currentPage: nextProps.currentPage
      });
    }
  }

  componentDidMount() {
    const {
      getOneBoard,
      match,
      currentBoard,
      isFetching,
      currentPage,
      onSubmits
    } = this.props;

    getOneBoard(match.params.id);
  }
  render() {
    const {
      getOneBoard,
      currentBoard,
      isFetching,
      match,
      currentPage,
      lists,
      onSubmits
    } = this.props;

    let currentP = [];
    if (this.state.lists) {
      currentP = this.state.lists;
    }
    console.log(currentP);
    return (
      <div style={{ border: "2px solid black", borderRadius: "20px" }}>
      
        <div className="card text-center">
          <h2>{currentPage.title}</h2>
          <h4 />
          <CreateListModalContainer />

          <Container
            style={{
              border: "5px solid black",
              background: "white",
              paddingTop: "20px"
            }}
          >
            <Row style={{ border: "1px solid black" }}>
              {currentP.length > 0 &&
                currentP.map(list => {
                  return (
                    <Col
                      style={{ border: "2px solid black", height: "250px" }}
                      md={{ size: 3, offset: 2 }}
                    >
                      {`Title: ${list.title}`}
                      <Button
                        onClick={onSubmits}
                        style={{
                          width: "115px",
                          float: "right",
                          marginLeft: "10px"
                        }}
                        value={list.id}
                        color="danger"
                      >
                        Delete List
                      </Button>
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default SpecificBoardList;
