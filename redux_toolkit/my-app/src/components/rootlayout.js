import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Rootlayout() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Redux-toolkit</Navbar.Brand>
          <Nav.Link href="/product">Products</Nav.Link>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/cart">My Bag 0</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
