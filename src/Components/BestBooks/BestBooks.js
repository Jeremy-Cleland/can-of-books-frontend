import React from "react";
import "./BestBooks.css";
import axios from "axios";
import { Carousel, Button, Container, ButtonGroup } from "react-bootstrap";
import AddBookForm from "../AddBookForm/AddBookForm";
import UpdateBookForm from "../UpdateBookForm/UpdateBookForm";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isOpen: false,
      isEditing: false,
      bookDatabase: {},
    };
  }

  //* Get all books from the backend
  getBooks = async () => {
    let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
    this.setState({
      books: bookData.data,
    });
    console.log(bookData.data);
  };

  //* Add a new book to the backend
  handleNewBook = (event) => {
    event.preventDefault();

    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };
    this.closeModal();
    console.log("New Book Submitted from Book Form Modal", newBook);
    this.postBooks(newBook);
  };

  //* Add a new book to the backend

  handleUpdateBook = async (event) => {
    event.preventDefault();

    let toUpdateBook = {
      _id: this.state.bookDatabase._id,
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${toUpdateBook._id}`;
      let updatedBook = await axios.put(url, toUpdateBook);
      let books = [...this.state.books];
      let updatedBookList = books.map((prevBook) =>
        prevBook._id === updatedBook.data._id ? updatedBook.data : prevBook
      );
      this.setState({ books: updatedBookList, isEditing: false });
    } catch (error) {
      console.log(error.message);
    }
  };

  postBooks = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, bookObj);
      this.setState({
        books: [...this.state.books, createdBook.data],
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  deleteBook = async (id) => {
    let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
    await axios.delete(url);
    let libraryUpdated = this.state.books.filter((book) => book._id !== id);
    console.log(libraryUpdated, id);
    this.setState({
      books: libraryUpdated,
    });
  };

  openAddModal = () => this.setState({ isOpen: true });

  openUpdateModal = async (book) =>
    this.setState({ isEditing: true, bookDatabase: book });

  closeModal = () => this.setState({ isOpen: false, isEditing: false });

  componentDidMount = () => {
    this.getBooks();
  };

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <div>
            <Carousel className='carousel'>
              {this.state.books.map((book) => {
                return (
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={"https://loremflickr.com/1280/800/nature"}
                      alt={book.title}
                    />
                    <Carousel.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <p>{book.status}</p>
                      <Container>
                        <ButtonGroup>
                          <Button
                            onClick={() => {
                              this.deleteBook(book._id);
                            }}
                            variant='dark'
                          >
                            Delete
                          </Button>{" "}
                          <Button
                            onClick={() => {
                              this.openUpdateModal(book);
                            }}
                            variant='dark'
                          >
                            Update
                          </Button>
                        </ButtonGroup>
                      </Container>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <Button
              onClick={this.openAddModal}
              className='my-4'
              variant='outline-info'
            >
              Add New Book
            </Button>
            <AddBookForm
              openAddModal={this.openAddModal}
              handleNewBook={this.handleNewBook}
              onHide={this.closeModal}
              isOpen={this.state.isOpen}
            />
            <UpdateBookForm
              openUpdateModal={this.openUpdateModal}
              bookDat={this.state.bookDatabase}
              isEditing={this.state.isEditing}
              closeModal={this.closeModal}
            />
          </div>
        ) : (
          <h3>No Books Found</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
