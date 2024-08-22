import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import componentsConstants from '../components/components.Constants';
import useStringStore from '../store/useStringStore';

const DashboardNavbar: React.FC = () => {
    const name = useStringStore((state) => state.name);
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
                            <p>{name}</p>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DashboardNavbar;