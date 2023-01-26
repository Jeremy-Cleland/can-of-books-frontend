import React from "react";
import { Navbar } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect fixed='bottom' bg='dark' variant='dark'>
        <Navbar.Brand className='font-link' style={{ textAlign: "center" }}>
          Code Fellows
        </Navbar.Brand>
        -
      </Navbar>
    );
  }
}

export default Footer;
