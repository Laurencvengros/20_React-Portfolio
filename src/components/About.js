import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from '../assets/images/profile_pic.jpg';
import ParticlesBg  from "particles-bg";
import '../App.css'

const styles={
  avatar:{
    width: '300px',
    height: '400px',
  },

  margins:{
    marginTop: '100px'
  }
}
const About = () => {
    return (
      <React.Fragment> 
     
    
        <div className="container " style={styles.margins}>
          <ParticlesBg type="cobweb" bg={true} />
            <div className="row ">
              <div className="col-md-8 col-sm-12 order-sm-first order-last">
                <h3 className="text-warning"> My name is Lauren Cvengros.</h3>
                <div className="text-white-50 bg-white">
                <img style={styles.avatar} src={Photo} alt="..."></img>
                  
              
                </div>
              </div>  
              <div className="col-md-4 col-sm-12">
              <p> I am a 25 year old full stack web developer based in Grand Rapids, Michigan. I am a problem solver and a creative with an eye for detail specializing in building responsive, user friendly websites. </p>
                  <p>I'm currently getting my training through Michigan State University's Web Development Bootcamp. I write my code primarily in JavaScript and also have experience with Node, Express, and SQL. I am always looking to expand my skillset and plan to further my knowledge to expand to any technology that will help me build even better apps</p>
                  <p>I believe in addition to good development, good design is incredibly important, I like my websites to look as nice as they run. I work with React, HTML, CSS and Bootstrap to make that happen.</p>
                  <p>I have a passion for learning and trying different things and love to take on new and challenging projects.</p>
              </div>
          </div>
        </div>
        <div className="container">
              <div className ="row ">
                <div className="col-sm-4 align-self-start" id="skillsText">
                  <h1 className="text-warning">Here are a few of the things I'm best at.</h1>
                </div>
                <div className="col-sm-8  order-last">
                  <div className="wrap-circles">
                            
                    <div className="circle per-95">
                      <div className="inner">HTML & CSS</div>
                    </div>
                    <div className="circle per-90">
                      <div className="inner">JavaScript</div>
                    </div>
                    <div className="circle per-70">
                      <div className="inner">Express JS</div>
                    </div>
                    <div className="circle per-70">
                      <div className="inner">Node JS</div>
                    </div>
                    <div className="circle per-70">
                      <div className="inner">SQL</div>
                    </div>
                    <div className="circle per-90">
                      <div className="inner">REST APIs</div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </React.Fragment>
    );
};

export default About;