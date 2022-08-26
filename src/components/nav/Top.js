import React from 'react'
import "./nav.css"
import { Nav, Navbar, Container, } from 'react-bootstrap'; 
// import {Link} from "react-router-dom"

export default function Top() {
    return (
        <div className='top'>
            <Navbar className='topcontent' expand="lg">
                <Container className='topwrapper'>
                    <Navbar.Brand href="#">
                        <img src="images/logo.png" alt="" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <div className="ul">
                            <a href="sopon.com">Home</a>
                        </div>

                        <div className="ul">
                            <a href="sopon.com">Porjects</a>
                        </div>

                        <div className="ul">
                            <a href="sopon.com">Bogs</a>
                        </div>

                        <div className="ul">
                            <a href="sopon.com">About me</a>
                        </div>
                        <div className="ul">
                            <a href="sopon.com">Contact</a>
                        </div>







                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
