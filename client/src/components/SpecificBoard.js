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
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
import {  Modal, ModalHeader, ModalBody, ModalFooter,   Form, FormGroup, Label, Input, FormText  } from 'reactstrap'
var ContentEditable = require("react-wysiwyg");
class SpecificBoardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      currentBoard: this.props.currentBoard,
      currentPage: this.props.currentPage,
      lists: this.props.currentPage.Lists,
      id: 0,
      title: null
    };
  }

  dataChanged(data) {
        // data = { description: "New validated text comes here" }
        // Update your model from here
        console.log(data)
      
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
      onSubmits,
      onChanges
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
      onSubmits,
      onChanges
    } = this.props;

    let currentP = [];
    if (this.state.lists) {
      currentP = this.state.lists;
    }
    
    return (
      <div style={{ border: "2px solid black", borderRadius: "20px" }}>
        <div className="card text-center">
          <h2>{currentPage.title}</h2>
          <h4 />
          <CreateListModalContainer />

          <Container
            style={{
              border: "0px solid black",
              background: "white",
              paddingTop: "40px"
            }}
          >
            <Row style={{ border: "0px solid black" }}>
              {currentP.length > 0 &&
                currentP.map(list => {
                  
                  return (
                    <Col
                      style={{ border: "2px solid black", height: "250px", width: "100%", paddingLeft: "00px", margin: "10px" }}
                      sm={{ size: 4, offset: 0 }}
                    > <h4>List:
                 
          
         
        
                     <RIEInput change={onChanges}
                     propName={list.id}
                     
                     value={list.title}




                     />
                    
                 </h4>
            
                      <Button
                        onClick={onSubmits}
                        style={{
                         
                       
                          margin: "auto"
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
