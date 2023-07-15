import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{padding: '10px 100px'}}>
            <Navbar.Brand href="#home">SWEET CORNER</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link><Link to='/home' className='link'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/About' className='link'>About</Link></Nav.Link>
              <Nav.Link><Link to='/menu' className='link'>Menu</Link></Nav.Link>
              <Nav.Link><Link to='/Contact' className='link'>Contact us</Link></Nav.Link>
              <Nav.Link><Link to='/Review' className='link'>Review</Link></Nav.Link>
              <Nav.Link><Link to='/login' className='link'>Login</Link></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
