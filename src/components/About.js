import React from "react";
// eslint-disable-next-line
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I'm learning to code!
      </p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
