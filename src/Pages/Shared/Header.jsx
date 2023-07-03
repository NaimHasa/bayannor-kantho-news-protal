import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-4">
            <Container>
                <Navbar.Brand className='fs-2 fw-bold text-success'><Link to='/'>BayannorKantho</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fs-5" >
                        <Nav.Link href="#allnews">All News</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#career">Career</Nav.Link>

                    </Nav>
                    <Nav>
                        <Button variant="secondary" className='mx-2'>LogIn</Button>
                        <Button variant="secondary">Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;