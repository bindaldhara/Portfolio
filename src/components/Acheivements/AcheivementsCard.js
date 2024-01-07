import React from "react";
import { Row } from "react-bootstrap";


function AcheivementsCard() {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h5> • Secured a position as a <strong className="main-name">full time employee at Atlassian</strong> after a <strong className="main-name">successfull completion of internship</strong> demonstrating exceptional skills and contributing to team's success. </h5>
        <h5>• <strong className="main-name">Smart India Hackathon 2022 National Runner-up</strong>. Out of 125 submission across India on our problem statement,
we were among the <strong>top 5 teams</strong></h5>
<h5>• Highest rating of 1601 at <strong className="main-name">Leetcode</strong>, with 500+ DSA questions solved</h5>
<h5>• Open Source Contributor in <strong className="main-name">HacktoberFest 2022</strong> and merged more than 10 pull requests</h5>
<h5>• Recepient Of <strong className="main-name">MMVY Scholarship</strong></h5>
      </Row>
    );
  }
  
  export default AcheivementsCard;
  