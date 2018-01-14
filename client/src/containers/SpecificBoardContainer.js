import React, {Component} from 'react'
import {connect} from 'react-redux'
import SpecificBoard from '../components/SpecificBoard'
import {getOneBoard} from '../actions'
import {bindActionCreators} from "redux"


class SpecificBoardContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {getOneBoard, currentBoard, isFetching, match} = this.props;
    return (
      <SpecificBoard
       
        getOneBoard={getOneBoard}
        match = {match}
        currentBoard = {currentBoard}

      />
    );
  }
}

//getting the store state to container's props
const mapStateToProps = state => {
   console.log(state)
  return {
    currentBoard: state.currentBoard,
    isFetching: state.isFetching,
  };
};

//allowing container to access action calls
const mapDispatchToProps = dispatch => {
  const actions = {getOneBoard};
  return bindActionCreators(actions, dispatch);
};

//connecting to the store
export default connect(mapStateToProps, mapDispatchToProps)(SpecificBoardContainer);