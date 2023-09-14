import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import './projects.css';

import picture from "../../Assets/Picture1.png";
import yelp from "../../Assets/yelp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
   
      <Container>
        <h1 className="project-heading">
          Projects
        </h1>
        <p style={{ color: "white" }}>
          Here are some of those I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yelp}
              title="Yelpcamp"
              description=" It uses monolithic model-view-controller MVC architecture to build a full-stack web application based on NodeJS
              The campgrounds and reviews of the campgrounds have all CRUD functionality which are being saved on MongoDB
              Passport JS is being used for the authentication purpose.The tech stack used here is NondeJS , MongoDB and Express."
              demoLink="https://yelp-camp-brown.vercel.app/"
              ghLink="https://github.com/bindaldhara/yelpcamp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={picture}
              isBlog={false}
              title="News Aggregator"
              description=" A Django project to scrape a news website using BeautifulSoup and requests module.
              It has the functionality to filter out the data according to the users’ wish. 
              React serves as the frontend, handling the user interface and getting and setting data via requests to the Django
              backend, which is an API built using the Django REST framework (DRF)"
              ghLink="https://github.com/bindaldhara/News-Aggregator"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
