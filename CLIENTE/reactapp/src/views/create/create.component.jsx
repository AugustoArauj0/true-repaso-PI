import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions/index";
import "./create.style.css";

function Create() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(error).length === 0) {
      dispatch(postUser(input));
    } else {
      alert("Faltan datos");
    }
  };
  console.log("ESTE ES EL INPUT", input);

  return (
    <div>
      <div className="form-cont">
        <h1>CREATE USER</h1>
        <form onSubmit={handleSubmit} className="form-style">
          <div>
            <label>Name: </label>
            <input name="name" value={input.name} onChange={handleChange} />
            <p>
              <strong>{error.name && error.name}</strong>
            </p>
          </div>
          <div>
            <label>Email: </label>
            <input name="email" value={input.email} onChange={handleChange} />
            <p>
              <strong>{error.email && error.email}</strong>
            </p>
          </div>
          <div>
            <label>Phone: </label>
            <input name="phone" value={input.phone} onChange={handleChange} />
            <p>
              <strong>{error.phone && error.phone}</strong>
            </p>
          </div>
          {Object.keys(error).length === 0 ? (
            <button
              type="submit"
              className="form-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button type="submit" className="form-button" disabled="true">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Create;
