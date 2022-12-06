import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const styles ={
  rightNav: {
    paddingRight: '20px',

  }
}

function Navigation(){


  const [color, setColor] = useState('purple'); 

  const handleHighlightTab = () => {
    
    setColor({
      color: 'green'
    });
  }

  return (
 

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
         <Navbar.Brand  href="/home" style={styles.rightNav}>Lauren Cvengros</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link style={{color:color}} onSelect={handleHighlightTab} href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
       </Container>
    </Navbar>
  );
}

export default Navigation