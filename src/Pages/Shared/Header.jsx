import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import { BsFillPersonPlusFill } from 'react-icons/bs';



const Header = () => {
    const { user } = useContext(authContext);
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
                        <Nav.Link><h6><strong>{user?.displayName}</strong></h6></Nav.Link>
                        <Nav.Link eventKey={2} >
                            {user?.photoURL
                                ?
                                <Image
                                    style={{ height: '50px' }}
                                    roundedCircle
                                    src={user?.photoURL
                                    }>
                                </Image>
                                : <BsFillPersonPlusFill></BsFillPersonPlusFill>
                            }
                        </Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;