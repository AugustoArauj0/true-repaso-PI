import Cards from "../cards/cards.component";
import "./cardList.styles.css";

function CardList({allUsers}) {
  const userList = allUsers;
  return (
    <div className="card-list">
      {
        userList?.map((user, index) => <Cards key={index} user={user}/>)
      }
    </div>
  );
}

export default CardList;
