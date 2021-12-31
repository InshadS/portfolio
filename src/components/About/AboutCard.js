import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Inshad Shaludeen </span>
            from <span className="purple"> Palakkad, Kerala.</span>
            <br />I have completed a bachelor's graduation in{" "}
            <span className="purple">Computer Application.</span>
            <br />I am a passionate{" "}
            <span className="purple">Web Developer</span> having an experience
            of designing and building Web Applications with{" "}
            <span className="purple">JavaScript / Reactjs </span>
            and some other cool libraries and frameworks.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
