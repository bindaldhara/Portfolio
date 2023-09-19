import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AcheivementsCard from "./AcheivementsCard";
import AchieveImg from "../../Assets/achievement.png";


function About() {
  return (
    <Container fluid className="about-section">
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Some of the <strong>Acheivements</strong> are
            </h1>
            <AcheivementsCard />
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={AchieveImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
