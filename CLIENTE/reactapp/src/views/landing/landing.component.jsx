import "./landing.styles.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Link to="/home">
        <button
          // La funcion que incluye onClick es necesaria porque Link cambia la ruta pero "no refresca la pagina"
          onClick={() => (window.location.href = "/home")}
          className="to-home-button"
        >
          Go to Home Page
        </button>
      </Link>
    </div>
  );
}

export default Landing;
