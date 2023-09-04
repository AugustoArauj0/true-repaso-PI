import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUserDB } from "../../redux/actions/index";
import axios from "axios";
import "./detail.styles.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [user, setUser] = useState({});
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  /*EJEMPLO DE USO DE AXIOS Y DIFERENCIAS CON FETCH()*/
  useEffect(() => {
    axios(`http://localhost:3001/users/${id}`).then((response) =>
      setUser(response.data)
    );
  }, [id]);

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteUserDB(id));
    document.location.href = "/home";
  };

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
            <br />
            <br />
            <label>User ID: {user.id}</label>
          </form>
          <br />
          <br />
          {console.log(typeof id)}
          {format.test(id) ? (
            <div>
              <button
                className="delete-button"
                type="button"
                onClick={handleDelete}
              >
                DELETE USER DATA
              </button>
              <button className="update-button">
                <Link
                  to={`/update/${id}`}
                  onClick={() => (window.location.href = `/update/${id}`)}
                  style={{ textDecoration: "none", color: "aqua" }}
                >
                  MODIFY USER DATA
                </Link>
              </button>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <h3>Loading character...</h3>
      )}
    </div>
  );
};

export default Detail;
