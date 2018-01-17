import React from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter,  Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
class CreateModal extends React.Component {
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
  const { boards, onSubmit, currentPage} = this.props;
   console.log(currentPage)
    

  }

  render() {
     const { boards, onSubmit, currentBoard} = this.props;
     
    return (
      <div>
        <Button color="success" onClick={this.toggle}>New Board</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Form onSubmit={onSubmit}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            
        <FormGroup>
          <Label for="username">User Id</Label>
          <Input  name="username" id="username" placeholder="username" />
        </FormGroup>
        <FormGroup>
          <Label for="title">Board Title</Label>
          <Input name="title" id="title" placeholder="Board Title" />
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

export default CreateModal;