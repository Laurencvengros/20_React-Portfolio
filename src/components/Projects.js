import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Container from 'react-bootstrap/Container'


const data = [
  {
    id: 1,
    name: "Level Up Fitness",
    description: "A full stack application working with RESTful APIs to plan your workouts using Node, Express, MySql and Handlebars to build RESTful APIs",
    view: "https://github.com/Laurencvengros/Project_2"
  },
  {
    id: 2,
    name: "JATE Text Editor",
    description: "A text editor appliaction that runs in the browser and meets PWA criteria. JATE can function both online and offline and can be useful for saving code snippets when there is not internet connection.",
    view: "https://pacific-thicket-62202.herokuapp.com/"
  },
  {
    id: 3,
    name: "ORM E-Commerce",
    description: "A node.js application that uses and Express.js server, MySQL database and dotenv for a backend Ecommerce site. This application has RESTful APIs that have CRUD functiontions and uses sequelize as an ORM tool The application is back end only so insomnia is used to create requests to the API.",
    view: "https://github.com/Laurencvengros/ORM_E-Commerce"
  },
  {
    id: 4,
    name: "Social Media App",
    description: "A social network API that uses Mongo DB as a database, Mongoose ODM, Express.JS and seeds data through insomnia. It allows you to create your own user, share your thoughts, add others as friends and add reactions to your friends thoughts.",
    view: "https://github.com/Laurencvengros/18_Social_Media_API"
  },
  
];



// const CardListItem = props => {
//   return (
    
//       <Row xs={1} lg={3} className="g-4">
//         {Array.from({ length: 1 }).map((_, idx) => (
//           <Col>
//             <Card  key={idx}  >
             
//               <Card.Img variant="top" src="holder.js/100px160" />
//               <Card.Body>
//               <p className="project-title" id="card-title">{props.data.name}</p>
//                 <Card.Text>
//                 ({props.data.description})
//                 </Card.Text>
//                 <Card.Text>
//                 <a href={props.data.view}> <Button variant="dark">View Code</Button></a> 
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     );
//   }

    


const Projects = () => {

    return (
      <Container>
          <Row>
              {data.map((data, k) => (
                  <Col key={k} xs={12} md={4} lg={3}>
                      <Card >
                          <Card.Img src="https://via.placeholder.com/150x75" />

                          <Card.Body>
                              <Card.Title>{data.name}</Card.Title>
                              <Card.Text>({data.description})</Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
      </Container>
  )
}
    


export default Projects;