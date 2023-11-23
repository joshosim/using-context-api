import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetail from "./BookDetail";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="m-5">
      <ul className="grid grid-cols-3">
        {books.map((book) => {
          return <BookDetail book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="p-[20px] text-center text-white font-bold">
      No Students in Class.
    </div>
  );
};

export default BookList;
