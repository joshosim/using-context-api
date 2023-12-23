import { v1 as uuid } from "uuid";

export const theReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return [
        ...state,
        {
          name: action.book.name,
          dept: action.book.dept,
          image_url: action.book.image_url,
          id: uuid(),
        },
      ];
    case "DELETE_PERSON":
      state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
