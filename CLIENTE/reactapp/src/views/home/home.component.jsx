import Navbar from "../../components/navbar/navbar.component";
import CardList from "../../components/cardList/cardList.component";
import "./home.styles.css";
import { useEffect, useState } from "react";

const usersArray = [{name: "Alfa", email: "alfa@gmail.com"}, {name: "Beta", email: "beta@gmail.com"},
 {name: "Gama", email: "gama@gmail.com"}
];

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(usersArray);
  },[]);
  return (
    <div className="home">
      <h1 className="home-title">Estas en el Home</h1>
      <Navbar />
      <CardList allUsers={users}/>
    </div>
  );
}

export default Home;
