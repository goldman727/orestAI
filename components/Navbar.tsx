import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import appwriteSDK from "../utils";
import componentConstants from '../components/constants';

const MainNavbar: React.FC = () => {
  const authRedirect = async () => {
    try {
      await appwriteSDK.account.createOAuth2Session(
        "github",
        "http://localhost:3000/welcome",
        "http://localhost:3000"
      );
    } catch (error) {
      console.error("OAuth2 session creation failed:", error);
    }
  };

  return (
    <Navbar className='custom-navbar' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">{componentConstants.navbar.logo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">{componentConstants.navbar.pricing}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item>
              <Button variant="outline-light" onClick={authRedirect} className="rounded-pill">{componentConstants.navbar.signIn}</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;