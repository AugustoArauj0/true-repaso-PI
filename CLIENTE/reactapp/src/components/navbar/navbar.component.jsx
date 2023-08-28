import "./navbar.styles.css";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar.component";

export const Navbar = ({ handleChange, handleSubmit }) => {
  return (
    <div className="navbar-style">
      <div>
        <Link
          to="/home"
          onClick={() => (window.location.href = "/home")}
          style={{ textDecoration: "none" }}
        >
          <h3 id="home-label"> HOME </h3>
        </Link>
      </div>

      <div>
        <Link
          to="/create"
          onClick={() => (window.location.href = "/create")}
          style={{ textDecoration: "none" }}
        >
          <h3 id="create-label"> CREATE </h3>
        </Link>
      </div>

      <div>
        <Link
          to="/about"
          onClick={() => (window.location.href = "/about")}
          style={{ textDecoration: "none" }}
        >
          <h3 id="about-label"> ABOUT </h3>
        </Link>
      </div>
      <div>
        <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Navbar;
