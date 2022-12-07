import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { EmailValidator } from '../utils.js/helper';


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
                setContactMessage('Please Emter A Valid Email');
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
    return(
        <React.Fragment>
            <div>
                <h1 style={styles.contactHeader}> Contact Me</h1>
                <hr style={styles.hrStyle}/>
            </div>

            <Card style={{ width: '30rem', height: '30rem', marginLeft: '500px', marginTop: '100px' }}>
                <Card.Body>
                    <Form  >
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
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                         <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        {contactMessage && <p >{contactMessage}</p>}

                        <Button  variant="warning" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
      </React.Fragment>
    )
}

export default Contact;