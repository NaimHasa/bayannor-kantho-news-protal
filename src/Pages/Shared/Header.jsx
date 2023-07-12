import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



const Header = () => {
    const { user, logOut } = useContext(authContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
        // .catch(error => console.error(error))
    }
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
                        <>
                            {
                                user?.uid
                                    ?
                                    <>
                                        <span>{user?.email}</span>
                                        <Button onClick={handleLogOut} variant="secondary">Log out</Button>


                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }


                        </>
                        <Nav.Link eventKey={2} >
                            {user?.photoURL
                                ?
                                <Image className='me-4' style={{ height: '30px' }}
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