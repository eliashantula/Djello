import React from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter,  Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
class CreateListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
 componentDidMount() {
   
    

  }

  render() {
     const { currentPage, onSubmit, lists} = this.props;
   console.log(currentPage)
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>New List</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Form onSubmit={onSubmit}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
        <FormGroup>
          <Label for="title">List Title</Label>
          <Input name="title" id="title" placeholder="List Title" />
        </FormGroup>
        <FormGroup>
          <Label for="boardId"></Label>
          <Input  type="hidden" name="boardId" id="boardId" value={`${currentPage}`} />
        </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default CreateListModal;