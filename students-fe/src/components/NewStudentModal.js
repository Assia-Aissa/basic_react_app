import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStudentForm from "./NewStudentForm";

class NewStudentModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const { create, student, onSubmit } = this.props;
    const title = create ? "Add Student" : "Edit Student";

    return (
      <>
        <Button color="primary" onClick={this.toggle}>
          {create ? "Add Student" : "Edit"}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            <NewStudentForm student={student} onSubmit={onSubmit} toggle={this.toggle} />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default NewStudentModal;
