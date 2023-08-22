import Navbar from "../../components/navbar/navbar.component";
import CardList from "../../components/cardList/cardList.component";
import "./home.styles.css";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Estas en el Home</h1>
      <Navbar />
      <CardList />
    </div>
  );
}

export default Home;
