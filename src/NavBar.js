/*=============================================================================
File: Navbar.js
-------------------------------------------------------------------------------
Description: 
    Navigation bar for entire website.
---------------------------------------
Navigation to: 
    Homepage, Login, C++, JavaScript, Python, Compare Languages, 
    Quick References, Account components
=============================================================================*/
import React from 'react';
import { 
    Navbar, Nav, NavDropdown, Offcanvas, 
    Container, Row, Col, 
    Form, Button
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

export default function NavBar() {
    
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                //className={styles.nav}
            >
                <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav"
                />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                >
                    <Nav
                        className="justify-content-end flex-grow-1 pe-3"
                        //style={{width: "100%"}}
                    >
                        <Nav.Link
                            as={NavLink}
                            to="/login"
                            //className={styles.navLink}
                        >
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
           {[true].map((expand) => (
            <Navbar
                key={expand}
                expand={expand}
                className="mb-3"
            >
                <Container>
                    <Navbar.Brand 
                        as={NavLink}
                        to="/"
                    >
                        Code(ing) Buddy
                    </Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header clossButton>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                            >
                                Code(ing) Buddy
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Form 
                                className="d-flex"
                            >
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="formHorizontalSearch"
                                >
                                    <Col>
                                        <Form.Control 
                                            type="search"
                                            placeholder="Search"
                                            //className="me-2"
                                            aria-label="Search"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Select
                                            defaultValue="From..."
                                        >
                                            <option>
                                                From...
                                            </option>
                                            <option>
                                                C++
                                            </option>
                                            <option>
                                                JavaScript
                                            </option>
                                            <option>
                                                Python 
                                            </option>
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select
                                            defaultValue="To..."
                                        >
                                            <option>
                                                To...
                                            </option>
                                            <option>
                                                C++
                                            </option>
                                            <option>
                                                JavaScript 
                                            </option>
                                            <option>
                                                Python 
                                            </option>
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Button>
                                            Search
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                            <Nav
                                className="justify-content-end flex-grow-1 pe-3"
                            >
                                <NavDropdown
                                    title="Menu"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item
                                        as={NavLink}
                                        to="/cplusplus"
                                        // className={styles.navLink}
                                    >
                                        C++
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={NavLink}
                                        to="/javascript"
                                    >
                                       JavaScript 
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={NavLink}
                                        to="/python"
                                    >
                                        Python
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={NavLink}
                                        to="/comparelanguages"
                                    >
                                        Compare Languages
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={NavLink}
                                        to="/quickrefs"
                                    >
                                        Quick References
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item
                                        as={NavLink}
                                        to="/account"
                                    >
                                        Account
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
           ))}
        </>
    );
}
