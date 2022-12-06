import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from '../assets/images/profile_pic.jpg';
import ParticlesBg  from "particles-bg";
import '../App.css'

const styles={
  avatar:{
    width: '300px',
    height: '400px',
    marginTop: '100px',
    fontWeight: '100px'
  },

  margins:{
    marginTop: '100px',
    fontSize: '20px'
  },


  skills:{
    marginTop: '50px',
    marginLeft: '50px'
  },

  skillsText:{
    textAlign: 'center',
    marginTop: '100px',
   
    

  },
  aboutText:{
    marginTop: '50px',
    textAlign: 'center',
    fontSize: '50px',
    
  }
}


const About = () => {
    return (
      <React.Fragment> 
     
    
        <div className="container " >
          <ParticlesBg type="cobweb" bg={true} />
          <h3 className="text-warning" style={styles.aboutText}> My name is Lauren Cvengros.</h3>
            <div className="row ">
              <div className="col-md-4 col-sm-12 order-sm-first order-last">
                
                <div className="text-white-50 bg-white">
                <img style={styles.avatar} src={Photo} alt="..."></img>
                  
              
                </div>
              </div>  
              <div className="col-md-8 col-sm-12" style={styles.margins}>
                  <p> I am a 25 year old full stack web developer based in Grand Rapids, Michigan. I am a problem solver and a creative with an eye for detail specializing in building responsive, user friendly websites. </p>
                  <p>I'm currently getting my training through Michigan State University's Web Development Bootcamp. I write my code primarily in JavaScript and also have experience with Node, Express, and SQL. I am always looking to expand my skillset and plan to further my knowledge to expand to any technology that will help me build even better apps</p>
                  <p>I believe in addition to good development, good design is incredibly important, I like my websites to look as nice as they run. I work with React, HTML, CSS and Bootstrap to make that happen.</p>
                  <p>I have a passion for learning and trying different things and love to take on new and challenging projects.</p>
              </div>
          </div>
        </div>
        
      </React.Fragment>
    );
};

export default About;