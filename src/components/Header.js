import React from 'react';
import  Home  from './Home';
import About from './About'
import Navigation from './Navigation';
import Projects from './Projects';
import Resume from './Resume'
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';


const Header = () =>{
    return(
        
        <Router>
            <Navigation />
            <Routes>
            <Route path="/20_React-Portfolio"  element={<About/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path="/home"  element={<Home/>}/>
            <Route path="/projects"  element={<Projects/>}/>
            <Route path="/resume"  element={<Resume/>}/>
            <Route path="/contact"  element={<Contact/>}/>
            </Routes>
        </Router>
    );
};

export default Header;