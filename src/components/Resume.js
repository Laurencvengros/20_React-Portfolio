import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg  from "particles-bg";
import '../App.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import myResume from '../assets/images/resume.pdf'


const Resume = () =>{
    return(
        <React.Fragment> 
            <div className=" col-sm-12" style={{textAlign: 'center',marginTop: '100px'}}>
                            <h1>Here are a few of the things I'm best at.</h1>
                            <hr style={{height:'3px',color: '#ffbb00',backgroundColor: '#ffbb00',width: '60%',marginLeft: 'auto',marginRight: 'auto',}}/>
                        </div>
            <MDBContainer className="mt-5">
                <ParticlesBg type="cobweb" bg={true} />
                <MDBRow>
                    <MDBCol md="12">
                        <div className="col-sm-12  order-last" style={{marginTop: '50px',marginLeft: '50px'}}>
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
                    </MDBCol>
                    
                </MDBRow>
            </MDBContainer>
            <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
            <h1 style={{textAlign: 'center'}}> Download My Resume</h1>
            <hr style={{height:'3px',color: '#ffbb00',backgroundColor: '#ffbb00',width: '60%',marginLeft: 'auto',marginRight: 'auto', marginBottom: '20px'}}/>
          <embed id="Resume" src={myResume} width="100%" height="750px" style={{marginBottom: '100px'}}/>
        </MDBCol>
        <MDBCol>
            
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </React.Fragment> 
    )
}

export default Resume;