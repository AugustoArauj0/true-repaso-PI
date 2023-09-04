import Navbar from "../../components/navbar/navbar.component";
import CardList from "../../components/cardList/cardList.component";
import Pagination from "../pagination/pagination.component";
import "../../components/navbar/navbar.styles.css";
import "./home.styles.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUsersByName } from "../../redux/actions";

function Home() {
  let cardsPerPage = 4;
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  const [searchString, setSearchString] = useState("");
  const messageError = useSelector((state) => state.message);
  ///
  const [currentPage, setCurrentPage] = useState(1); // [15.....,20]
  const totalPages = Math.ceil(allUsers.length / cardsPerPage);
  //                          0
  const startIndex = (currentPage - 1) * cardsPerPage;
  //                  10              15
  const endIndex = startIndex + cardsPerPage;
  let currentCards = allUsers.slice(startIndex, endIndex);

  // useEffect actua en el ciclo de vida del componente (cuando se monta y desmonta por ej)
  useEffect(() => {
    dispatch(getUsers());

    if (messageError !== "") {
      alert(messageError);
    }
  }, []); /* Este es el array de dependencias, cada cambio en el/los estado/s ubicado/s aqui ejecutara
  al useEffect nuevamente */
  useEffect(() => {}, [allUsers]);

  function pageHandler(pageNumber) {
    setCurrentPage(pageNumber);
  }

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
      <CardList info={currentCards} />
      <Pagination total={totalPages} page={pageHandler} />
    </div>
  );
}

export default Home;
