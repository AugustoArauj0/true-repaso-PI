import "./cards.styles.css";
import { Link } from "react-router-dom";

/* Este componente retorna la card individual de cada usuario, creado o de la api, contenida en la cardList y a su vez 
sirve como link al detalle del usuario al que le pertenezca la card clickeada, basandose en su ID*/
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
