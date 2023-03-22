import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import workingMan from "../../Assets/200.gif";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
       
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
              Myself
                <strong className="main-name"> Dhara Bindal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={workingMan}
                alt="home pic"
                className="img-fluid"
                style={{width:"100%"}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
     
    </section>
  );
}

export default Home;
