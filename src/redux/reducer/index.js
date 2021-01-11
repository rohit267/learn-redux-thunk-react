import types from "../action/types";

const initialState = {
  todos: []
};

export default function rootReducer(state = initialState, action) {
  console.log("FROM REDUCER", action.type);
  switch (action.type) {
    case types.FETCH_TODOS_SUCCESS:
      state.todos = action.payload;
      break;
    default:
      break;
  }
  return state;
}
