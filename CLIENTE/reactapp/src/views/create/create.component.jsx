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

    if (input.name === "" || input.name[0].trim().length === 0) {
      error.name = "*Fill this entry";
    }
    // eslint-disable-next-line no-useless-escape
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
      error.email = "*El mail format is invalid";
    }
    if (/^[0-9]{0,9}$/.test(input.phone)) {
      error.phone = "*That phone number is invalid";
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
      alert("todo Ok");
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
              <strong>{error.name && error.name}</strong>
            </p>
          </div>
          <div>
            <label>Phone: </label>
            <input name="phone" value={input.phone} onChange={handleChange} />
            <p>
              <strong>{error.name && error.name}</strong>
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
