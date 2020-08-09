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
        <Navbar className="shadow" expand="lg" variant="light" fixed="top">
            <div class="container">
                <Navbar.Brand href="/"><b>S♪ght<font color="#006666"><em>Read</em></font></b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link><Link to="/">Home</Link></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link><Link to="/about">About</Link></Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </Styles>
)