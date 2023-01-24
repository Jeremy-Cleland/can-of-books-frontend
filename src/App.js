import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BestBooks from "./BestBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
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
            <Route exact path='/' element={<BestBooks />}></Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
