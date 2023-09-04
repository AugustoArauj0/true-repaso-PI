import React from "react";
import "./about.style.css";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"contenedorAbout"}>
        <br />
        <h1 id={"about-title"}>Welcome!</h1>
        <hr />
        <p>
          I am Augusto, and this is my proyect, a "Users Management Simulator"
          based Web App with all the CRUD functionalities integrated, developed
          with the knowledge adquired in the
          <a className={"henry-link"} href="https://www.soyhenry.com">
            {" "}
            SoyHenry
          </a>{" "}
          bootcamp.
        </p>
      </div>
    );
  }
}

export default About;
