import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am Dhara Bindal from Indore, MP.
            <br/>An inspiring pre final year student with great understanding in C++ , 
            skilled in Data Structures. I am a competitive programmer and also a web developer.
            <br />
            <br />
            At present I had shifted my interest in Data Science and Machine Learning .
             Currently I am at the level of exploring this field.
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
