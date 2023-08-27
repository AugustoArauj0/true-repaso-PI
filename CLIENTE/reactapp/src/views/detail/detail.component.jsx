import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./detail.styles.css";

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  /*EJEMPLO DE USO DE AXIOS Y DIFERENCIAS CON FETCH()*/
  useEffect(() => {
    axios(`http://localhost:3001/users/${id}`).then((response) =>
      setUser(response.data)
    );
  }, [id]);

  return (
    <div className="detail-style">
      {user.name ? (
        <>
          <form>
            <label id="title">USER DETAIL</label>
            <br />
            <br />
            <label>User: {user.name}</label>
            <br />
            <br />
            <label>Email: {user.email}</label>
            <br />
            <br />
            <label>Phone: {user.phone}</label>
          </form>
        </>
      ) : (
        <h1>Loading character...</h1>
      )}
    </div>
  );
};

export default Detail;
