import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Profile from "../Components/About/About";
import BestBooks from "../Components/BestBooks/BestBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  render() {
    return (
      <>
        <Router>
          <Header />

          <div>
            {this.state.books.length > 0 &&
              this.state.books.map((book) => {
                return (
                  <div>
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                  </div>
                );
              })}
          </div>

          <Routes>
            <Route
              exact
              path='/'
              element={<BestBooks getBooks={this.getBooks} />}
            ></Route>

            <Route exact path='/about' element={<Profile />}></Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
