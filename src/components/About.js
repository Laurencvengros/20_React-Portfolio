import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from '../assets/images/profile_pic.jpg';
import ParticlesBg  from "particles-bg";
import '../App.css'



const About = () => {
    return (
      <React.Fragment> 
     
    
        <div className="container bg-light" style={{marginTop: '100px'}}>
          <ParticlesBg type="cobweb" bg={true} />
          <h3 className="text-warning" style={{marginTop:'70px', textAlign:'center', fontSize: '50px'}}> My name is Lauren Cvengros.</h3>
            <div className="row ">
              <div className="col-lg-5 col-md-6 col-sm-12 order-sm-first order-last">
                
                <div className="text-white-50">
                <img style={{marginTop: '70px', marginBottom: '40px',  marginLeft:"40px", width: '300px', height: '400px',}} src={Photo} alt="..."></img>
                  
              
                </div>
              </div>  
              <div className="col-lg-7 col-md-6 col-sm-12 text-dark" style={{marginTop: '70px', fontSize: '20px'}}>
                  <p> I am a 25 year old full stack web developer based in Grand Rapids, Michigan. I am a problem solver and a creative with an eye for detail specializing in building responsive, user friendly websites. </p>
                  <p>I have a bachelor's degree from Michigan State University and am currently getting my Full Stack Web Development certificate though Michigan State. I am actively seeking employment as a Web Developer or related feild.
                    When i'm not coding, I enjoy spending my free time outdoors; snowboarding or hiking, going to the gym and reading books.
                  </p>
                  <p>I have a passion for learning and trying different things and love to take on new and challenging projects.</p>
              </div>
          </div>
        </div>
        
      </React.Fragment>
    );
};

export default About;