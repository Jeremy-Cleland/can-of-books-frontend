import React from "react";
import axios from "axios";
import { Carousel, Button } from "react-bootstrap";
import BookFormModal from "../BookFormModal/BookFormModal";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showForm: false,
    };
  }
  handleCloseModal = () => this.setState({ showForm: false });
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
    this.setState({ books: bookData.data });
    console.log(bookData.data);
  };

  handleShowModal = () => {
    this.setState({
      showForm: true,
    });
  };

  handleNewBook = (event) => {
    event.preventDefault();

    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };
    this.handleCloseModal();
    console.log("New Book Submitted from Book Form Modal", newBook);
    this.postBooks(newBook);
  };

  postBooks = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let newBook = await axios.post(url, bookObj);
      this.setState({
        books: [...this.state.books, newBook.data],
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
                      src={
                        "https://via.placeholder.com/1200x800/045a04/F6f6f6/"
                      }
                      alt={book.title}
                    />
                    <Carousel.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <p>{book.status}</p>
                      <Button
                        onClick={() => {
                          this.deleteBook(book._id);
                        }}
                        variant='danger'
                      >
                        Delete
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <Button
              onClick={this.handleShowModal}
              className='my-4'
              variant='outline-info'
            >
              Add New Book
            </Button>
            <BookFormModal
              handleNewBook={this.handleNewBook}
              showForm={this.state.showForm}
              handleCloseModal={this.handleCloseModal}
            />
          </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
