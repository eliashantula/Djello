import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { Container, Row, Col, Button } from 'reactstrap';
class ListList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBoard: this.props.currentBoard,
      currentPage: this.props.currentPage
    };
  }
  componentWillReceiveProps(nextProps) {
    /*if (this.props.match.params.id !== nextProps.match.params.id) {
      this.setState({
        currentBoard: this.props.getOneBoard(nextProps.match.params.id),
        currentPage: this.props.currentPage
      });
    }*/
  }

  componentDidMount() {
 
  }
  render() {
  console.log(this.props)

    return (
       <Row>
          <Col>List</Col>
        </Row>
    );
  }
}

export default ListList;
