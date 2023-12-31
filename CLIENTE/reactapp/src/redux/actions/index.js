import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USERS_BY_NAME = "GET_USERS_BY_NAME";
export const ERROR = "ERROR";
export const POST_USER = "POST_USER";
export const UPDATE_USER = "UPDATE_USER";
// export const DELETE_USER = "DELETE_USER";

// Accion que 
export function postUser({ name, email, phone }) {
  return async function (dispatch) {
    try {
      await axios.post("/users", { name, email, phone });
      alert("Usuario creado exitosamente");
      return dispatch({
        type: "POST_USER",
      });
    } catch (error) {
      alert("El usuario no se creo, hubo un error");
    }
  };
}

export function getUsers() {
  return async function (dispatch) {
    try {
      const response = await axios("/users");
      return dispatch({
        type: "GET_USERS",
        payload: response.data,
      });
    } catch (error) { }
  };
}

export function getUsersByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(`/users/?name=${name}`);
      return dispatch({
        type: "GET_USERS_BY_NAME",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  };
}

export function deleteUserDB(id) {
  return async function (dispatch) {
    try {
      await axios
        .delete(`/users/${id}`)
        .then(alert(`Deleted user with ID ${id}`));
      // return dispatch({
      //   type: "DELETE_USER",
      //   id,
      // });
    } catch (error) {
      alert("There was an error in the deleting process");
    }
  };
}

export function updateUserDB(id, input) {
  return async function (dispatch) {
    const { name, email, phone } = input;
    try {
      await axios
        .patch(`/users/${id}`, { name: name, email: email, phone: phone })
        .then(alert(`Updated data of user with ID ${id}`));
      return dispatch({
        type: "UPDATE_USER",
      });
    }
    catch (error) {
      alert("There was an error in the updating process");
    }
  }
}
