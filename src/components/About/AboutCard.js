import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am Dhara Bindal from Indore, MP.
            <br/>A motivated individual possessing advanced proficiency in C++, adept in Data Structures, 
            and in competitive programming, as well as showcasing expertise in web development.
            <br />
            <br />

            </p>

          <p className="Quote" style={{font:"100px"}}>
          "It's never too late to be what you might've been.”
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
