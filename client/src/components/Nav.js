import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./../views/Format.css";

const NavBar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" className="color-Nav">
        <Container>
          <Navbar.Brand href="#home"><h4>Crohn’s and Colitis Clinical Care Consortium (C5)</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/Home">
                <h1>Home</h1>
              </Nav.Link>
              <Nav.Link href="/Basic">
                <h1>IBD</h1>
              </Nav.Link>
              <Nav.Link href="/Research">
                <h1>Meet the Team</h1>
              </Nav.Link>
              <Nav.Link href="/Events">
                <h1>Events</h1>
              </Nav.Link>
              <Nav.Link href="/My_Health">
                <h1>MyHealth</h1>
              </Nav.Link>
              <Nav.Link href="/FAQ">
                <h1>FAQ</h1>
              </Nav.Link>
              <Nav.Link href="/Discussion">
                <h1>Discussion</h1>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/Sign_In">
                <h1>Sign In</h1>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

/*



Test out messing with the Nav Bar to make it horizontal

*/
