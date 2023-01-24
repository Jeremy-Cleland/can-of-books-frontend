import "./Header.css";
import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar className='header' collapseOnSelect expand='lg' variant='dark'>
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </NavItem>
        <Link to='/about' className='nav-link'>
          About
        </Link>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    );
  }
}

export default Header;
