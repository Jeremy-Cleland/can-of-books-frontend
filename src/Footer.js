import React from "react";
import { Navbar, Link, NavItem } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand>Code Fellows</Navbar.Brand>-
        <NavItem>
          <Link to='/about' className='nav-link'>
            About
          </Link>
        </NavItem>
      </Navbar>
    );
  }
}

export default Footer;
