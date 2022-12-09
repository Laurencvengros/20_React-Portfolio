import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Anton', 'Montserrat']
    }
  });



function Navigation(){

  const [currentLink, setCurrentLink] = useState('');

  let a = {};
  let b = {};
  let c = {};
  let d = {};
  let e = {};
  let f={}
  
  switch(currentLink){
  case 'home':
   a= { color: '#ffbb00'};
   
   break;
  case 'about':
   b= { color: '#ffbb00'};
   a= { color: 'white'};
   break;
  case 'projects':
   c= { color: '#ffbb00'};
   a= { color: 'white'};
   break;
  case 'resume':
   d= { color: '#ffbb00' };
   a= { color: 'white'};
   break;
  case 'contact':
   e= { color: '#ffbb00'};
   a= { color: 'white'};
   break;
  default:
   f ={}
  }
  

  

  return (



   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={f}>
      <NavLink to="/home" className='navHeader' style={a} onClick={() => setCurrentLink('home')} id='navText'>Lauren Cvengros</NavLink>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto tab" >
              
                <NavLink  to="/about" className='navs' style={b} onClick={() => setCurrentLink('about')} id='navText'>About</NavLink>
              
                <NavLink to="/projects" className='navs' style={c} onClick={() => setCurrentLink('projects')} id='navText'>Projects</NavLink>
                <NavLink to="/resume" className='navs' style={d} onClick={() => setCurrentLink('resume')} id='navText'>Resume</NavLink>
                <NavLink to="/contact" className='navs' style={e} onClick={() => setCurrentLink('contact')} id='navText'>Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
       </Container>
    </Navbar>
  );
}


export default Navigation;