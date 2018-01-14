import React, {Component} from 'react'
import {connect} from 'react-redux'
import Board from '../components/Board'
import {getInitialBoards} from '../actions'
import {bindActionCreators} from "redux"


class BoardContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {getInitialBoards, boards, isFetching} = this.props;
    return (
      <Board
        getInitialBoards={getInitialBoards}
        boards={boards}
        isFetching={isFetching}
      />
    );
  }
}

//getting the store state to container's props
const mapStateToProps = state => {
  return {
    boards: state.boards.boards,
    isFetching: state.boards.isFetching,
  };
};

//allowing container to access action calls
const mapDispatchToProps = dispatch => {
  const actions = {getInitialBoards};
  return bindActionCreators(actions, dispatch);
};

//connecting to the store
export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);