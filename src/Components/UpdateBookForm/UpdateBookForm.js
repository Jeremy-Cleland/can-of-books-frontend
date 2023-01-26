import React from "react";
import "./UpdateBookForm.css";
import { Container, Button, Form, Modal } from "react-bootstrap";

class UpdateBookForm extends React.Component {
  render() {
    return (
      <Modal
        className='Modal'
        style={{ textAlign: "center" }}
        show={this.props.isEditing}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton style={{ color: "black" }}>
          Edit Book
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.props.handleEditBook}>
              <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type='text'
                  // defaultValue={this.props.book.title}
                />
              </Form.Group>
              <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='text'
                  // defaultValue={this.props.book.description}
                />
              </Form.Group>
              <Form.Group controlId='Status'>
                <Form.Check
                  type='checkbox'
                  label='status'
                  // defaultChecked={this.props.book.status}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Update Book
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UpdateBookForm;
