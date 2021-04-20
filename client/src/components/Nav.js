import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./../views/Format.css";

const NavBar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark">
        <Container>
          <Navbar.Brand href="#home"><h5 className="c5">Crohn’s and Colitis Clinical Care Consortium (C5)</h5></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/Home">
                <h1 className="color-Nav">Home</h1>
              </Nav.Link>
              <Nav.Link href="/Basic">
                <h1 className="color-Nav">IBD</h1>
              </Nav.Link>
              <Nav.Link href="/Research">
                <h1 className="color-Nav">Meet the Team</h1>
              </Nav.Link>
              <Nav.Link href="/Events">
                <h1 className="color-Nav">Events</h1>
              </Nav.Link>
              <Nav.Link href="/My_Health">
                <h1 className="color-Nav">MyHealth</h1>
              </Nav.Link>
              <Nav.Link href="/FAQ">
                <h1 className="color-Nav">FAQ</h1>
              </Nav.Link>
              <Nav.Link href="/Discussion">
                <h1 className="color-Nav">Discussion</h1>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/Sign_In">
                <h1 className="color-Nav">Sign In</h1>
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
