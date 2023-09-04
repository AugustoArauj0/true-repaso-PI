import Cards from "../cards/cards.component";
import "./cardList.styles.css";

/* Este componente retorna el array contenedor de las cards a presentar en el home, tanto las de la api como las creadas
 con el formulario de creacion */
function CardList({ info }) {
  const userList = info;

  return (
    <div className="card-list">
      {userList?.map((user, index) => (
        <Cards key={index} user={user} />
      ))}
    </div>
  );
}
export default CardList;
