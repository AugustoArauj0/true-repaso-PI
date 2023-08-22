import Cards from "../cards/cards.component";
import "./cardList.styles.css";

function CardList() {
  return (
    <div className="card-list">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default CardList;
