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


const styles ={
    contactHeader:{
        marginTop: '50px',
        textAlign: 'center',
        
        
        
    },
    hrStyle: {
        height:'3px',
        color: '#ffbb00',
        backgroundColor: '#ffbb00',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    formStyle:{
        marginLeft: '50px',
        marginRight: 'auto',
        marginTop: '100px'
    }


}

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
                <h1 style={styles.contactHeader}> Contact Me</h1>
                <hr style={styles.hrStyle}/>
            </div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '30rem', height: '30rem', marginLeft: '100px', marginTop: '100px' }}>
                            <Card.Body>
                                <Form onSubmit={emailSender} ref={form}> 
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                            <Form.Control 
                                                type="text"
                                                placeholder="Your Name"
                                                required name="name" 
                                                onBlur={handleForm}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            required name="email"
                                        type="email" 
                                        placeholder="Enter email"
                                        onBlur={handleForm}
                                        />
                                        <Form.Text className="text-muted"></Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="message">
                                        <Form.Label>Message</Form.Label>
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

                                    <Button style={{marginLeft: '170px', marginTop: '40px'}} variant="warning" type="submit" size="lg">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                    <h1 style={{  marginLeft: '200px', marginTop: '100px' }}>Contact Info</h1>
                    <hr style={styles.hrStyle}/>
                        <div style={{marginLeft: '90px'}}>
                            <IconContext.Provider value={{ color: '#ffbb00', size: '2em' }}>
                                <div>
                                    <a style={{  color: 'black'}} href= 'mailto:l.cvengros@icloud.com'>
                                        
                                    <h3 style={{  marginLeft: '10px', marginTop: '50px', color: 'black'}}> <FaEnvelope/> L.Cvengros@icloud.com</h3>
                                    </a>
                                </div>
                                <div>
                                    <a style={{  color: 'black'}} href= 'https://github.com/Laurencvengros'>
                                        
                                    <h3 style={{  marginLeft: '10px', marginTop: '50px', color: 'black'}}> <FaGithub/> Laurencvengros</h3>
                                    </a>
                                </div>
                                <div>
                                    <a style={{  color: 'black'}} href= 'https://www.linkedin.com/in/lauren-cvengros-a00957249/'>
                                        
                                    <h3 style={{  marginLeft: '10px', marginTop: '50px', color: 'black'}}> <FaLinkedin/> lauren-cvengros-a00957249</h3>
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