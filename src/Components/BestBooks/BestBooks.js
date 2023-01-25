import React from "react";
import axios from "axios";
import { Carousel, Button } from "react-bootstrap";
import AddBookForm from "../AddBookForm/AddBookForm";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isOpen: false,
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
    this.setState({
      books: bookData.data,
    });
    console.log(bookData.data);
  };

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

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

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
                      src={"https://via.placeholder.com/1200x800/045a04/"}
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
              onClick={this.openModal}
              className='my-4'
              variant='outline-info'
            >
              Add New Book
            </Button>
            <AddBookForm
              openModal={this.openModal}
              handleNewBook={this.handleNewBook}
              onHide={this.closeModal}
              isOpen={this.state.isOpen}
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
