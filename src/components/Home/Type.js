import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Competitive Programmer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Machine Learning Engineer",
        ],
        autoStart:true,
        loop: true,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
