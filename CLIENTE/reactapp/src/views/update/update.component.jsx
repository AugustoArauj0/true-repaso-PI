import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserDB } from "../../redux/actions/index";
import axios from "axios";
import "./update.styles.css";
import { useParams } from "react-router-dom";

function Update() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("ID: ", id);

  const [input, setInput] = useState({
    id: id,
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validate = (input) => {
    input = input || " ";
    let error = {};
    const regexNombre = /^([a-z0-9]+(\/{1}[a-z0-9]+)*)+(?!([\/]{2}))$/;

    if (input.name === "" || input.name[0].trim().length === 0) {
      error.name = "*Fill this entry";
    }
    if (regexNombre.test(input.name)) {
      error.name = "The name must only contain letters";
    }
    if (input.name.length < 5 || input.name.length > 9) {
      error.name =
        "The username must contain between 5 and 10 characters and start capitalized";
    }

    // eslint-disable-next-line no-useless-escape
    if (input.email === "" || input.email[0].trim().length === 0) {
      error.email = "*Fill this entry";
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
      error.email = "*That email format is invalid";
    }

    if (input.phone.length === 0 || input.name[0].trim().length === 0) {
      error.phone = "*Fill this entry";
    }
    if (!/^[0-9]{0,9}$/.test(input.phone)) {
      error.phone = "*Max digits for phone is 9 digits";
    }
    return error;
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (Object.keys(error).length === 0) {
      dispatch(updateUserDB(id, input));
      document.location.href = "/home";
    } else {
      alert("Complete all fields please");
    }
  };

  return (
    <div>
      <div className="update-form-cont">
        <h1>UPDATE USER</h1>
        <form onSubmit={handleUpdate} className="form-style">
          <div>
            <label>New Name: </label>
            <input name="name" value={input.name} onChange={handleChange} />
            <p>
              <strong>{error.name && error.name}</strong>
            </p>
          </div>
          <div>
            <label>New Email: </label>
            <input name="email" value={input.email} onChange={handleChange} />
            <p>
              <strong>{error.email && error.email}</strong>
            </p>
          </div>
          <div>
            <label>New Phone: </label>
            <input name="phone" value={input.phone} onChange={handleChange} />
            <p>
              <strong>{error.phone && error.phone}</strong>
            </p>
          </div>
          {Object.keys(error).length === 0 ? (
            <button
              type="submit"
              className="update-form-button"
              onClick={handleUpdate}
            >
              Update
            </button>
          ) : (
            <button
              type="submit"
              className="update-form-button"
              disabled="true"
            >
              Update
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Update;
