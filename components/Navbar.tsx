import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import appwriteSDK from "../utils";
import componentsConstants from '../components/components.Constants';

const MainNavbar: React.FC = () => {
  const authRedirect = async () => {
    try {
      const sdkName = process.env.APPWRITE_SDK_NAME || 'github';
      const sdkPage = process.env.APPWRITE_SDK_PAGE || 'http://localhost:3000/welcome';
      const sdkUrl = process.env.APPWRITE_SDK_URL || 'http://localhost:3000';
      await appwriteSDK.account.createOAuth2Session(
        sdkName,
        sdkPage,
        sdkUrl
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Navbar className='custom-navbar' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">{componentsConstants.navbar.title}</Navbar.Brand>
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

export default MainNavbar;