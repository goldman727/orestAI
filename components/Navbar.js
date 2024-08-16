import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';

export default function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">OrestAI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Pricing</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Item>
                    <Button variant="outline-light" href="/signin" className="rounded-pill">Sign In</Button>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}