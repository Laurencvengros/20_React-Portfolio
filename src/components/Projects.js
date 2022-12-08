import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg  from "particles-bg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Container from 'react-bootstrap/Container';
import levelUp from '../assets/images/level_up.jpg';
import jate from '../assets/images/jate.jpg';
import ecommerce from '../assets/images/ecommerce.jpg';
import socialMedia from '../assets/images/GET_users.jpg';
import weatherDashboard from '../assets/images/weather.jpg';
import teamApp from '../assets/images/team.jpg';


const data = [
  {
    id: 1,
    name: "Level Up Fitness",
    description: "A full stack application to plan your workouts using Node, Express, MySql and Handlebars to build RESTful APIs",
    view: "https://github.com/Laurencvengros/Project_2",
    deploy: "https://github.com/Laurencvengros/Project_2",
    pic: levelUp
  },
  {
    id: 2,
    name: "JATE Text Editor",
    description: "A text editor appliaction that meets PWA criteria and runs both online and offline.",
    view: "https://pacific-thicket-62202.herokuapp.com/",
    deploy: "https://pacific-thicket-62202.herokuapp.com/",
    pic: jate
  },
  {
    id: 3,
    name: "ORM E-Commerce",
    description: "A node.js application that uses and Express.js server and MySQL database for a backend Ecommerce site. ",
    view: "https://github.com/Laurencvengros/ORM_E-Commerce",
    deploy: "https://github.com/Laurencvengros/ORM_E-Commerce",
    pic: ecommerce
  },
  {
    id: 4,
    name: "Social Media App",
    description: "A social network API that uses Mongo DB as a database, Mongoose ODM, Express.JS and seeds data through insomnia.",
    view: "https://github.com/Laurencvengros/18_Social_Media_API",
    deploy: "https://github.com/Laurencvengros/18_Social_Media_API",
    pic: socialMedia

  },
  {
    id: 5,
    name: "Weather Dashboard",
    description: "A Javascript application that uses the OpenWeather API so the user may search the forecast for any city they'd like",
    view: "https://github.com/Laurencvengros/Weather_Dashboard",
    deploy: "https://laurencvengros.github.io/Weather_Dashboard/",
    pic: weatherDashboard
  },
  {
    id: 6,
    name: "Team Profile Generator",
    description: "A Node.js application that generates an HTML page that displays information from your terminal.",
    view: "https://github.com/Laurencvengros/Team_Profile_Generator",
    deploy: "https://github.com/Laurencvengros/Team_Profile_Generator",
    pic: teamApp
  }
  
  
  
];  



const Projects = () => {

    return (
      <Container>
        <ParticlesBg type="cobweb" bg={true} />
        <h1 style={{marginTop: '50px', color:'#ffbb00', fontSize:'50px', marginLeft: '40px'}}>Check out some of the things I've built</h1>
        <hr style={{height:'3px',color: '#ffbb00',backgroundColor: '#ffbb00',width: '90%'}}/>
          <Row>
              {data.map((data, k) => (
                  <Col key={k} xs={12} md={6} lg={4} style={{padding: '30px'}}>
                      <Card style={{marginTop: '20px',height: '30rem',width: '20rem',textAlign: 'center',}}>
                          <Card.Img src={data.pic} />

                          <Card.Body >
                              <Card.Title style={{marginTop: '30px'}}>{data.name}</Card.Title>
                              <Card.Text style={{marginTop: '30px'}}>{data.description}</Card.Text>
                              
                                <a href={data.view}> <Button variant="dark" className='mt-auto' >View Code</Button></a> 
                                <a href={data.deploy}> <Button variant="dark" className='mt-auto' >View App</Button></a> 
                          </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
      </Container>
  )
}
    


export default Projects;