import React, { createContext, useReducer } from "react";
import { theReducer } from "../reducers/reducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(theReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
