import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailValidator } from '../utils.js/helper';
import { IconContext } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Anton', 'Montserrat']
    }
  });



const Contact =() =>{

    const [formState, setFormState] = useState({email: '', name: '', message: ''});
    const [contactMessage, setContactMessage]= useState('');

    function handleForm(e) {
        if (e.target.name === 'email'){
            const validEmail = EmailValidator(e.target.value);
            if(!validEmail){
                setContactMessage('Please Enter A Valid Email');
            }else{
                setContactMessage('');
            }
        }else{
            if(!e.target.value.length){
                const name = e.target.name;
                setContactMessage(`${name.charAt(0).toUpperCase()+ name.slice(1)} cannot be blank`)
            }
        }

        if(!contactMessage){
            setFormState({ ...formState, [e.target.name]: e.target.value})
        }
    }
    const form = useRef();

    function emailSender(e){
        e.preventDefault();

        emailjs.sendForm('service_yta3jrp', 'template_w8rd179', form.current, '05H9DAvQJMMh11o3g' )
        .then((response) =>{
            setContactMessage('Sent!');
        }, (error) => {
            setContactMessage('Error sending message, please contact me directly at L.Cvengros@icloud.com');
        })
    }

    return(
        <React.Fragment>
            <div>
                <h1 style={{marginTop: '50px', textAlign: 'center',fontFamily: 'Anton', fontSize: '60px'}}> Contact Me</h1>
                <hr style={{height:'3px',color: '#ffbb00',backgroundColor: '#ffbb00',width: '60%',marginLeft: 'auto',marginRight: 'auto',}}/>
            </div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '30rem', height: '30rem', marginLeft: '20px', marginTop: '100px' }}>
                            <Card.Body>
                                <Form onSubmit={emailSender} ref={form}> 
                                    <Form.Group controlId="name">
                                        <Form.Label style={{fontFamily:'Montserrat', marginBottom:'12px', fontWeight:'bold'}}>Name</Form.Label>
                                            <Form.Control 
                                                type="text"
                                                placeholder="Your Name"
                                                required name="name" 
                                                onBlur={handleForm}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label style={{fontFamily:'Montserrat', marginBottom:'12px', marginTop:'15px',fontWeight:'bold'}}>Email address</Form.Label>
                                        <Form.Control
                                            required name="email"
                                        type="email" 
                                        placeholder="Enter email"
                                        onBlur={handleForm}
                                        />
                                        <Form.Text className="text-muted"></Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="message">
                                        <Form.Label style={{fontFamily:'Montserrat', fontWeight:'bold'}}>Message</Form.Label>
                                        <Form.Control
                                            required name="message"
                                            type="text"
                                            placeholder="Type Your Message"
                                            as="textarea"
                                            rows={3}
                                            onBlur={handleForm} 
                                        ></Form.Control>
                                    </Form.Group>
                                    

                                    {contactMessage && <p >{contactMessage}</p>}

                                    <Button style={{marginLeft: '150px', marginTop: '40px',fontFamily: 'Anton', fontSize:'30px'}} variant="warning" type="submit" size="lg">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                    <h1 style={{  marginLeft: '200px', marginTop: '100px',fontFamily: 'Anton' }}>Contact Info</h1>
                    <hr style={{height:'3px',color: '#ffbb00',backgroundColor: '#ffbb00',width: '60%',marginLeft: 'auto',marginRight: 'auto',}}/>
                        <div style={{marginLeft: '90px'}}>
                            <IconContext.Provider value={{ color: '#ffbb00', size: '2em' }}>
                                <div>
                                    <a style={{  color: 'black'}} href= 'mailto:l.cvengros@icloud.com'>
                                        
                                    <h3 style={{  marginLeft: '10px', marginTop: '50px', color: 'black', fontFamily: 'Montserrat'}}> <FaEnvelope/> L.Cvengros@icloud.com</h3>
                                    </a>
                                </div>
                                <div>
                                    <a style={{  color: 'black'}} href= 'https://github.com/Laurencvengros'>
                                        
                                    <h3 style={{  marginLeft: '10px', marginTop: '50px', color: 'black', fontFamily: 'Montserrat'}}> <FaGithub/> Laurencvengros</h3>
                                    </a>
                                </div>
                                <div>
                                    <a style={{  color: 'black'}} href= 'https://www.linkedin.com/in/lauren-cvengros-a00957249/'>
                                        
                                    <h3 style={{  marginLeft: '10px', marginTop: '50px', color: 'black', fontFamily: 'Montserrat'}}> <FaLinkedin/> lauren-cvengros-a00957249</h3>
                                    </a>
                                </div>
                            </IconContext.Provider>
                        </div>
            
                    </Col>
                </Row>
            </Container>
      </React.Fragment>
    )
}

export default Contact;