import React from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
    this.setState({ books: bookData.data });
    console.log(bookData.data);
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
          <Carousel className='carousel'>
            {this.state.books.map((book) => {
              return (
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={`https://via.placeholder.com/1200x800/045a04/F6f6f6/?text=${book.title}`}
                    alt='First slide'
                  />
                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
