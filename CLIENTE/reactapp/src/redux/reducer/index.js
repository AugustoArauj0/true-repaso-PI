import { GET_USERS, GET_USERS_BY_NAME, ERROR, CLEAN_MESSAGE } from "../actions";

let initialState = { allUsers: [], copyUsers: [], message: "" };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload, // [usuarios]
        copyUsers: [...action.payload], // copiar con el spread para que sea un array nuevo y se quede la refencia
      };
    case GET_USERS_BY_NAME:
      return {
        ...state,
        allUsers: action.payload,
      };
    case ERROR:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAN_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
}

export default rootReducer;
