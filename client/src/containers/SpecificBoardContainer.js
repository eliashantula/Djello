import React, {Component} from 'react'
import {connect} from 'react-redux'
import SpecificBoard from '../components/SpecificBoard'
import {getOneBoard, onSubmits, onChanges} from '../actions'
import {bindActionCreators} from "redux"
import { Container, Row, Col, Button } from 'reactstrap';
//import EditableLabel from 'react-inline-edit';
class SpecificBoardContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {getOneBoard, currentBoard, isFetching, match, currentPage, lists, onSubmits, onChanges} = this.props;
    return (
      <SpecificBoard
       
        getOneBoard={getOneBoard}
        match = {match}
        currentBoard = {currentBoard}
        currentPage={currentPage}
        lists={lists}
        onSubmits = {onSubmits}
        onChanges={onChanges}

      />
    );
  }
}

//getting the store state to container's props
const mapStateToProps = state => {
   
  return {
    currentBoard: state.currentBoard,
    isFetching: state.isFetching,
    currentPage: state.currentPage

    
  };
};

//allowing container to access action calls
const mapDispatchToProps = dispatch => {
  const actions = {getOneBoard, onSubmits,onChanges};
  return bindActionCreators(actions, dispatch);
};

//connecting to the store
export default connect(mapStateToProps, mapDispatchToProps)(SpecificBoardContainer);