// src/components/NavigationBar.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavigationBar() {
    return (
        <Navbar expand="lg" className="navbar-style fixed-top">
            <Container>
                <Navbar.Brand className='navbar-brand ml-auto' href="#home">
                    CP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="navigation-link">Home</Nav.Link>
                        <Nav.Link href="#about" className="navigation-link">About</Nav.Link>
                        <Nav.Link href="#skills" className="navigation-link">Skills</Nav.Link>
                        <Nav.Link href="#projects" className="navigation-link">Projects</Nav.Link>
                        <Nav.Link href="#experience" className="navigation-link">Experience</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

