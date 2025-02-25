import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AuthContext } from '../../contexts/AuthContext';


export default function Header() {

    const { isAuthenticated } = useContext(AuthContext);

    return (

        <header>

            <div style={{ position: 'fixed', top: 10, right: 1, left: 1 }}>

                <Navbar expand="lg" className="bg-body-tertiary">

                    <Container>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" style={{ display: 'flex', margin: '0 auto', gap: '3em' }}>

                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/event/all">All Events</Nav.Link>

                                {isAuthenticated
                                    ? (
                                        <>
                                            <Nav.Link as={Link} to="/event/mine">My Events</Nav.Link>
                                            <Nav.Link as={Link} to="/event/create">Create Event</Nav.Link>
                                            <Nav.Link as={Link} to="/category/create">Create Category</Nav.Link>
                                            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                                        </>

                                    )
                                    : (
                                        <>
                                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                            <Nav.Link as={Link} to="/register">Register</Nav.Link>

                                        </>

                                    )
                                }



                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </header>

    )
}