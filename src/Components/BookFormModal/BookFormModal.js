import React from "react";
import "./BookFormModal.css";
import { Modal, Button } from "react-bootstrap";

export class BookFormModal extends React.Component {
  render() {
    return (
      <Modal
        className='modal'
        show={this.props.handleShowModal}
        onHide={this.props.handleCloseModal}
      >
        <Modal.Header closeButton>New Book</Modal.Header>.
        <form>
          <label htmlFor='title'>Title</label>
          <input type='text' placeholder='Title' name='title' id='title' />
          <label htmlFor='title'>Description</label>
          <input type='text' placeholder='Title' name='title' id='title' />
          <label htmlFor='title'>Status</label>
          <input type='text' placeholder='Title' name='title' id='title' />
          <Button type='submit'>Add new</Button>
        </form>
      </Modal>
    );
  }
}

export default BookFormModal;
