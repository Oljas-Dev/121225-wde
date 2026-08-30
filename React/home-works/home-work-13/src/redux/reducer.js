import { SET_FILTER } from "./actions";

const initialState = {
  users: [
    { id: 1, name: "John" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Michael" },
    { id: 4, name: "Kate" },
    { id: 5, name: "Alex" },
  ],
  filter: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
