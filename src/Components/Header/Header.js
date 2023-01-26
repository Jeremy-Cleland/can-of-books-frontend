import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        bg='dark'
        sticky='top'
        collapseOnSelect
        expand='lg'
        variant='dark'
      >
        <Container>
          <Navbar.Brand className='font-link'>My Favorite Books</Navbar.Brand>
          <Nav className='me-auto'>
            <Container>
              <Link className='font-link' to='/'>
                Home
              </Link>
            </Container>
            <Container>
              <Link className='font-link' to='/about'>
                About
              </Link>
            </Container>
          </Nav>
        </Container>

        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    );
  }
}

export default Header;
