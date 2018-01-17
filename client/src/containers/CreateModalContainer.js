import React, {Component} from "react";

//connecting to the store
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//our component and actions to give it
import CreateModal from "../components/CreateModal";


//for using forms
import serialize from "form-serialize";


import {createBoard} from "../actions";
import {createABoard} from "../actions";
//creating our own container
class CreateModalContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {boards, createABoard, currentBoard} = this.props;
    return (
      <CreateModal
        boards={boards}
        createABoard={createABoard}
        currentBoard = {currentBoard}


        
      />
    );
  }
}



const mapStateToProps = state => {
  return {
    boards: state.boards,
    currentBoard: state.currentBoard,
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;

      const data = serialize(form, {hash: true});
      dispatch(
      createABoard(data)
       );
      form.reset();
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);