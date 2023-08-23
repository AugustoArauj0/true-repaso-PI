import axios from "axios";

export const GET_USERS = "GET_USERS";

export function getUsers() {
  return async function (dispatch) {
    const response = await axios("https://jsonplaceholder.typicode.com/users");

    return dispatch({
      type: "GET_USERS",
      payload: response.data,
    });
  };
}
