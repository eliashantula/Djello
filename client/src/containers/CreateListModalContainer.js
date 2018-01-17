import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CreateListModal from "../components/CreateListModal";

import serialize from "form-serialize";

import { createList } from "../actions";
import { createAList } from "../actions";

class CreateModalContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { boards, createABoard, lists } = this.props;
    return (
      <CreateListModal
        boards={boards}
        createAList={createAList}
        lists={lists}
      />
    );
  }
}

const mapStateToProps = state => {

  return {
    boards: state.boards,
    lists: state.lists,
    currentPage: state.currentPage.id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
     console.log(data)
      dispatch(createAList(data));
      form.reset();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateListModal);
