import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetail = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li
      className="bg-[#6d3d6d] text-white font-medium my-[10px] mx-auto cursor-pointer hover:line-through hover:opacity-70 rounded-xl h-60 w-[10rem] border-2 border-white flex flex-col items-center"
      onClick={() => removeBook(book.id)}
    >
      <img
        src={book.image_url}
        alt={book.image_url}
        className="object-cover h-36 w-full rounded-t-xl"
      />
      <div className="py-4">
        <div className="font-bold text-xl flex-wrap">{book.name}</div>
        <div>{book.dept}</div>
      </div>
    </li>
  );
};

export default BookDetail;
