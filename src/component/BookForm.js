import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit} className="p-[20px]">
      <input
        className="w-full p-[10px] my-[0.325rem] mx-0 bg-[#3c1f3c] text-white border-none"
        type="text"
        placeholder="Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="w-full p-[10px] my-[0.325rem] mx-0 bg-[#3c1f3c] text-white border-none"
        type="text"
        placeholder="Department"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        className="py-[6px] px-[20px] my-[0.325rem] mx-auto bg-[#eee] block"
        type="submit"
        value="Add Student"
      />
    </form>
  );
};

export default BookForm;
