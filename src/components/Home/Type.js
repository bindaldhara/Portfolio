import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Backend Developer",
          "Go & Python Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
