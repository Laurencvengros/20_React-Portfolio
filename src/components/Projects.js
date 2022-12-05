import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const data = [
  {
    id: 1,
    name: "Level Up Fitness",
    description: "A full stack application working with RESTful APIs to plan your workouts using Node, Express, MySql and Handlebars to build RESTful APIs",
    view: "View on GitHub"
  },
  {
    id: 2,
    name: "JATE Text Editor",
    description: "A text editor appliaction that runs in the browser and meets PWA criteria. JATE can function both online and offline and can be useful for saving code snippets when there is not internet connection.",
    view: "View on GitHub"
  },
  {
    id: 3,
    name: "ORM E-Commerce",
    description: "A node.js application that uses and Express.js server, MySQL database and dotenv for a backend Ecommerce site. This application has RESTful APIs that have CRUD functiontions and uses sequelize as an ORM tool The application is back end only so insomnia is used to create requests to the API.",
    view: "View on GitHub"
  },
  {
    id: 4,
    name: "Social Media App",
    description: "A social network API that uses Mongo DB as a database, Mongoose ODM, Express.JS and seeds data through insomnia. It allows you to create your own user, share your thoughts, add others as friends and add reactions to your friends thoughts.",
    view: "View on GitHub"
  }
];



const CardListItem = props => {
  return (
    <div className="card" style={{ width: '18rem' }}> 
      
      <div className="content">
            <p className="project-title" id="card-title">{props.data.name}</p>
            <p>
            <a href={props.data.view}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a> 
            
            </p>
            <p id="topics">
                  ({props.data.description})
              </p>
      </div>
    </div>
  );
}


const Projects = () => {
  return (
    <div>
      {data.map(data => {
        return <CardListItem data={data} key={data.id} />;
      })}
    </div>
  );
};


export default Projects;