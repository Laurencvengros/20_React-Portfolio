import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg  from "particles-bg";
import '../App.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import myResume from '../assets/images/resume.pdf';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Anton', 'Montserrat']
    }
  });



const Resume = () =>{
    return(
        <React.Fragment> 
            
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <div  style={{marginTop: '100px', color:'#000', fontFamily:'Anton'}}>
                            <h1 style={{fontSize:'60px',}}>Here are a few of the things I'm best at.</h1>
                            <hr style={{height:'3px',color: '#ffbb00',backgroundColor: '#ffbb00',width: '70%',marginLeft: '5px'}}/>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer className="test">
            <ParticlesBg type="cobweb" bg={true} />
                <MDBRow >
                    <MDBCol md="4" className='col'>
                        <div className="col-sm-12  order-last" style={{marginTop: '100px', fontFamily:'Montserrat',  marginLeft: '-80px'}}>
                            <div className="wrap-circles">
                                <div className="circle per-100">
                                    <div className="inner">SQL</div>
                                </div>
                                <div className="circle per-100">
                                    <div className="inner">MongoDB</div>
                                </div>
                                <div className="circle per-100">
                                    <div className="inner">REST APIs</div>
                                </div>
                                <div className="circle per-100">
                                    <div className="inner">MERN Stack</div>
                                </div>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol md="4" className='col'>
                        <div className="col-sm-12  order-last" style={{marginTop: '100px', fontFamily:'Montserrat',  marginLeft: '-80px'}}>
                            <div className="wrap-circles">
                                <div className="circle per-100">
                                    <div className="inner">HTML & CSS</div>
                                </div>
                                <div className="circle per-100">
                                    <div className="inner" > JavaScript</div>
                                </div>
                                <div className="circle per-100">
                                    <div className="inner">Node.js</div>
                                </div>
                                <div className="circle per-100">
                                    <div className="inner">React</div>
                                </div>
                                
                            </div>
                        </div>
                    </MDBCol>
                    
                </MDBRow>
            </MDBContainer>
            <MDBContainer className="mt-4">
                <MDBRow>
                    <MDBCol md="12">
                        <h1 style={{fontSize:'60px',marginTop: '10px', color:'#000',  marginLeft: '40px', fontFamily:'Anton'}}> Download My Resume</h1>
                        <hr style={{height:'3px',color: '#ffbb00',backgroundColor: '#ffbb00',width: '60%',marginLeft: '5px'}}/>
                        <embed id="Resume" src={myResume} width="100%" height="750px" style={{marginBottom: '100px'}}/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment> 
    )
}

export default Resume;