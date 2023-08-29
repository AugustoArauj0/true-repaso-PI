import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USERS_BY_NAME = "GET_USERS_BY_NAME";
export const ERROR = "ERROR";
export const CLEAN_MESSAGE = "CLEAN_MESSAGE";
export const POST_USER = "POST_USER";

export function postUser({ name, email, phone }) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/users", { name, email, phone });
      alert("Usuario creado exitosamente");
    } catch (error) {
      alert("El usuario no se creo, hubo un error");
    }
  };
}

export function getUsers() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/users");
      return dispatch({
        type: "GET_USERS",
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function getUsersByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/users/?name=${name}`);
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

export function clearMessage() {
  return function (dispatch) {
    return dispatch({
      type: "CLEAN_MESSAGE",
    });
  };
}
