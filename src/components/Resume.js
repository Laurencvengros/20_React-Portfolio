import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg  from "particles-bg";
import '../App.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import myResume from '../assets/images/resume.pdf'

const styles={
    skills:{
        marginTop: '50px',
        marginLeft: '50px'
      },
    
      skillsText:{
        textAlign: 'center',
        marginTop: '100px',
       
    },
    resumeText: {
        textAlign: 'center'
    }
}

const Resume = () =>{
    return(
        <React.Fragment> 
            
           

            <div className="container" >
                <ParticlesBg type="cobweb" bg={true} />
                <div className ="row ">
                    <div className=" col-sm-12" style={styles.skillsText}>
                        <h1>Here are a few of the things I'm best at.</h1>
                    </div>
                    
                    <div className="col-sm-12  order-last" style={styles.skills}>
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
                        <div className="inner">React</div>
                        </div>
                        <div className="circle per-60">
                        <div className="inner">SQL</div>
                        </div>
                        <div className="circle per-70">
                        <div className="inner">NoSQL</div>
                        </div>
                        <div className="circle per-90">
                        <div className="inner">REST APIs</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
            <h1 style={styles.resumeText}> Download My Resume</h1>
          <embed id="Resume" src={myResume} width="100%" height="750px" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </React.Fragment> 
    )
}

export default Resume;