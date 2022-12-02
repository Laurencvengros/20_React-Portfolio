import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';




function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Row>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                    
            </Row>
            <Row >
                <Nav >
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link  href="#">Projects</Nav.Link>
                <Nav.Link  href="#">Resume</Nav.Link>
                <Nav.Link  href="#">Contact</Nav.Link>
                </Nav>
            
          </Row>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;
  