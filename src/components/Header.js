import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.png'

export default function Header() {    
    return (
        <header id="header">
            <Navbar fixed="top" expand="lg" collapseOnSelect="true" bg="light">
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className='d-inline-block align-top'
                        alt="SOVI Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="section-link" to="/">Home</Link>
                        <Link className="section-link" to="/about">About</Link>
                        <Link className="section-link" to="/service">Service</Link>
                        <Link className="section-link" to="/equipment">Equipment</Link>
                        <Link className="section-link" to="/contact">Contact</Link>
                        <Link className="request-link" to="/contact">Request a note</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

