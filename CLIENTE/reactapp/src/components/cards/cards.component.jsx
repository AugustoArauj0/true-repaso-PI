import "./cards.styles.css";
import { Link } from "react-router-dom";

function Cards({ user }) {
  const { name, email, phone, id } = user;
  return (
    <div className="card-container">
      <Link
        to={`/home/${id}`}
        style={{ textDecoration: "none", color: "#c71585" }}
        onClick={() => (window.location.href = `/home/${id}`)}
      >
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <p>ID: {id}</p>
      </Link>
    </div>
  );
}

export default Cards;
