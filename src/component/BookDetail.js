import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetail = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li
      className="bg-[#6d3d6d] text-white font-medium p-3 my-[10px] mx-auto cursor-pointer hover:line-through hover:opacity-70 rounded-full h-[10rem] w-[10rem] grid place-content-center"
      onClick={() => removeBook(book.id)}
    >
      <div className="font-bold text-xl">{book.title}</div>
      <div>{book.author}</div>
    </li>
  );
};

export default BookDetail;
