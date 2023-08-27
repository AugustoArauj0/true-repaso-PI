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
        <h1>Welcome!</h1>
        <hr />
        <p>
          I am Augusto, and this is my proyect, an Web App of Users Management,
          that i developed with the knowledge adquired in the
          <a href="https://www.soyhenry.com"> SoyHenry</a> bootcamp.
        </p>
      </div>
    );
  }
}

export default About;
