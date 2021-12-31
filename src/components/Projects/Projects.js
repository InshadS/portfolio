import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.png";
import covidtracker from "../../Assets/Projects/covidtracker.png";
import weather from "../../Assets/Projects/weather.png";
import todo from "../../Assets/Projects/todo.png";
import calculator from "../../Assets/Projects/calculator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Netflix clone made with reactjs. using axios to fetch movie database from TMDB."
              link="https://inshad-netflix-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidtracker}
              isBlog={false}
              title="Covid-19 Tracker"
              description="A real time covid-19 updating website
              made with React Js and public API's.
              "
              link="https://inshad-covid-tracker.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A simple weather updating website
              made with React Js and public API's."
              link="https://inshad-weather-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="This is a simple ToDo web Application. created by using ReactJs Functional Component."
              link="https://inshad-todo-list.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="This is a sample project which i done in reactjs as a beginner. using Functional component"
              link="https://inshad-neumorphic-calculator.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
