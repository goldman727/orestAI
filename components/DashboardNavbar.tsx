import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import appwriteSDK from "../utils";
import componentsConstants from '../components/components.Constants';

const DashboardNavbar: React.FC = () => {
    return (
        <Navbar className='custom-navbar' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">{componentsConstants.navbar.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Welcome Dashboard</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <p>Kuzmychenko Orest</p>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DashboardNavbar;