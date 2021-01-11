import axios from "axios";
import types from "./types";

export function setToDos(payload) {
  return {
    type: types.FETCH_TODOS_SUCCESS,
    paylaod: payload
  };
}

export function fetchTodos(dispatch) {
  return function () {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((data) => {
        // console.log(data);
        dispatch(setToDos(data.data));
      })
      .catch((err) => {
        return {
          type: types.FETCH_TODOS_FAILED,
          paylaod: err.message
        };
      });
  };
}
