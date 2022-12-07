import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {  FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";


function Footer() {
    return (
        <React.Fragment>
        <IconContext.Provider value={{ color: '#ffbb00', size: '2em' }}>
        <footer className="footer" >
            <div style={{display: 'block',textAlign: 'center',lineHeight: '100px',marginTop: '291px',}}>
                <a style={{marginRight:"30px"}} href= 'mailto:l.cvengros@icloud.com'>
                     <FaEnvelope/>
                </a>
            
                <a style={{marginRight:"30px"}}  href= 'https://github.com/Laurencvengros'>
                     <FaGithub/> 
                </a>
            
                <a href= 'https://www.linkedin.com/in/lauren-cvengros-a00957249/'>
                     <FaLinkedin/>
                </a>
            </div>
    
       
    </footer>
    </IconContext.Provider>
        </React.Fragment>
      );
    }

export default Footer;