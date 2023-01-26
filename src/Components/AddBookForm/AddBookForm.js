import React from "react";
import "./AddBookForm.css";
import { Modal, Button, Form } from "react-bootstrap";

class AddBookForm extends React.Component {
  render() {
    return (
      <Modal
        className='Modal'
        style={{ textAlign: "center" }}
        show={this.props.isOpen}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton style={{ color: "black" }}>
          New Book
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handleNewBook}>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Title'
                name='title'
                id='title'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Description'
                name='description'
                id='description'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='status'>
              <Form.Label>Status</Form.Label>
              <Form.Control
                type='text'
                placeholder='Status'
                name='status'
                id='status'
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Add this Book
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.closeModal}>
            Close
          </Button>
        </Modal.Footer>
        s
      </Modal>
    );
  }
}

export default AddBookForm;
