import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

const styles ={
  rightNav: {
    paddingRight: '20px',

  }
}

function Navigation(){

  const [currentLink, setCurrentLink] = useState('');

  let a = {};
  let b = {};
  let c = {};
  let d = {};
  let e = {};
  
  switch(currentLink){
  case 'home':
   a= { backgroundColor: 'red'};
   break;
  case 'about':
   b= { backgroundColor: 'blue'};
   break;
  case 'projects':
   c= { backgroundColor: 'green'};
   break;
  case 'resume':
   d= { backgroundColor: 'yellow' };
   break;
  case 'contact':
   e= { backgroundColor: 'cyan'};
   break;
  default:
   a = {}
}
  

  

  return (

    
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <NavLink to="/home" style={a} onClick={() => setCurrentLink('home')}>Lauren Cvengros</NavLink>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto tab" >
              
                <NavLink to="/about" style={b} onClick={() => setCurrentLink('about')}>About</NavLink>
              
                <NavLink to="/projects" style={c} onClick={() => setCurrentLink('projects')}>projects</NavLink>
                <NavLink to="/resume" style={d} onClick={() => setCurrentLink('resume')}>Resume</NavLink>
                <NavLink to="/contact" style={e} onClick={() => setCurrentLink('contact')}>Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
       </Container>
    </Navbar>
  );
}

export default Navigation