import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import appwriteSDK from "../utils";

export default function MainNavbar() {
    const authRedirect = async () => {
        try {
          await appwriteSDK.account.createOAuth2Session(
            "github",
            "http://localhost:3000/welcome",
            "http://localhost:3000"
          );
        } catch (error) {
          console.log(error);
        }
      };
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
                    <Button variant="outline-light" onClick={authRedirect} className="rounded-pill">Sign In</Button>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}