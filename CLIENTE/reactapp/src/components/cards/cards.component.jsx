import "./cards.styles.css";

function Cards({ user }) {
  const { name, email, phone } = user;
  return (
    <div className="card-container">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default Cards;
