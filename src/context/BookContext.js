import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";
import Uka from "../img/uka.png";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      name: "Osim Uka",
      dept: "MEE",
      image_url: Uka,
      id: 1,
    },
    {
      name: "Osim Uka",
      dept: "FST",
      image_url: Uka,
      id: 2,
    },
  ]);
  const addBook = (name, dept, image_url) => {
    setBooks([
      ...books,
      { name: name, dept: dept, image_url: image_url, id: uuid() },
    ]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
