import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import '../App.css'

const styles ={
  rightNav: {
    paddingRight: '20px',

  }
}

function Navigation(){

  const [isActive, setIsActive] = useState(false);

  const handleClick = (e, ) => {
    
    
    (e).preventDefault();

    setIsActive(true);
  };

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/home">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li style={{backgroundColor: isActive ? 'salmon' : '', color: isActive ? 'white' : ''}}
        onClick={handleClick}>
        <a className="nav-link" href="/about">About </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/resume">Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    
  //  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //     <Container>
  //        <Navbar.Brand  href="/home" style={styles.rightNav}>Lauren Cvengros</Navbar.Brand>
  //        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //         <Navbar.Collapse id="responsive-navbar-nav">
  //           <Nav className="ms-auto">
  //           <NavLink
  //                 activeClassName="active"
  //                 className={"navbarChange"}
  //                 to="/about"
  //             >
  //                 About
  //             </NavLink>
             
  //             <NavLink
  //                 activeClassName="active"
  //                 className={"navbarChange"}
  //                 to="/projects"
  //             >
  //                 Projects
  //             </NavLink>
  //             <Nav.Link href="/resume">Resume</Nav.Link>
  //             <Nav.Link href="/contact">Contact</Nav.Link>
  //           </Nav>
  //         </Navbar.Collapse>
  //      </Container>
  //   </Navbar>
  );
}

export default Navigation