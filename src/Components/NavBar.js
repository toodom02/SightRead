import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #f8f8f8;
    }
    a, .navbar-nav .nav-link {
        color: #000000;
        &:hover{
            text-decoration: none !important; 
            color: gray;
        }
    }
`;


export const NavBar = () => (
    <Styles>
        <Navbar collapseOnSelect className="shadow" expand="lg" variant="light" fixed="top">
            <div className="container">
                <Navbar.Brand href="/SightRead/"><b>S♪ght<font color="#006666"><em>Read</em></font></b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="2" as={Link} to="/about">About</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </Styles>
)