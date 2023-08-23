import Navbar from "../../components/navbar/navbar.component";
import CardList from "../../components/cardList/cardList.component";
import "./home.styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, allUsers]);

  return (
    <div className="home">
      <h1 className="home-title">Welcome</h1>
      <Navbar />
      <CardList allUsers={allUsers} />
    </div>
  );
}

export default Home;
