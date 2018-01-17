import React, {Component} from 'react'
import {connect} from 'react-redux'
import Board from '../components/Board'
import {getInitialBoards} from '../actions'
import {bindActionCreators} from "redux"
import {onSubmit} from '../actions'


class BoardContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {getInitialBoards, boards, isFetching, currentPage, onSubmit} = this.props;
    return (
      <Board
        getInitialBoards={getInitialBoards}
        boards={boards}
        isFetching={isFetching}
        currentPage={currentPage}
        onSubmit={onSubmit}
        
      />
    );
  }
}


const mapStateToProps = state => {
  return {
    boards: state.boards,
    isFetching: state.isFetching,
    currentPage: state.currentPage
  };
};


const mapDispatchToProps = dispatch => {
  const actions = {getInitialBoards, onSubmit};
  return bindActionCreators(actions, dispatch);
};

//connecting to the store
export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);