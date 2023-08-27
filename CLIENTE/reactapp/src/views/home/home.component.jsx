import Navbar from "../../components/navbar/navbar.component";
import CardList from "../../components/cardList/cardList.component";
import "./home.styles.css";
import "../../components/navbar/navbar.styles.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUsersByName, clearMessage } from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const [searchString, setSearchString] = useState("");
  const messageError = useSelector((state) => state.message);

  // useEffect actua en el ciclo de vida del componente (cuando se monta y desmonta por ej)
  useEffect(() => {
    if (!allUsers.length) {
      dispatch(getUsers());
    }
    if (messageError !== "") {
      alert(messageError);
    }
    return () => {
      dispatch(clearMessage());
    };
  }, [
    dispatch,
    allUsers,
    messageError,
  ]); /* Este es el array de dependencias, cada cambio en el/los estado/s ubicado/s aqui ejecutara
  al useEffect nuevamente */

  const handleChange = (event) => {
    setSearchString(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUsersByName(searchString));
  };

  return (
    <div className="home">
      <Navbar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        className="navbar-style"
      />
      <CardList allUsers={allUsers} />
    </div>
  );
}

export default Home;
