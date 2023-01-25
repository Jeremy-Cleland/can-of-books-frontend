import React from "react";
import "./BookFormModal.css";
import { Modal, Button } from "react-bootstrap";

class BookFormModal extends React.Component {
  render() {
    return (
      <Modal
        className='Modal'
        style={{ textAlign: "center" }}
        show={this.props.handleShowModal}
        onHide={this.props.handleCloseModal}
      >
        <Modal.Header closeButton style={{ color: "black" }}>
          New Book
        </Modal.Header>
        <form onSubmit={this.props.handleNewBook}>
          <label htmlFor='title'>Title</label>
          <input type='text' placeholder='Title' name='title' id='title' />
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            placeholder='Description'
            name='description'
            id='description'
          />
          <label htmlFor='status'>Status</label>
          <input type='text' placeholder='Status' name='status' id='status' />
          <Button type='submit'>Add new</Button>
        </form>
      </Modal>
    );
  }
}

export default BookFormModal;
