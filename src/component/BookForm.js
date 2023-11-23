import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import Uka from "../img/uka.png";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [image_url, setImageurl] = useState(Uka);
  const handleImageChange = (e) => {
    console.log(e.target.image_url);
    setImageurl(URL.createObjectURL(e.target.image_url[0]));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(name, dept, image_url);
    setName("");
    setDept("");
  };
  return (
    <form onSubmit={handleSubmit} className="p-[20px]">
      <input
        className="w-full p-[10px] my-[0.325rem] mx-0 bg-[#3c1f3c] text-white border-none"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="w-full p-[10px] my-[0.325rem] mx-0 bg-[#3c1f3c] text-white border-none"
        type="text"
        placeholder="Department"
        value={dept}
        onChange={(e) => setDept(e.target.value)}
        required
      />
      <input type="file" onChange={handleImageChange} />

      <input
        className="py-[6px] px-[20px] my-[0.325rem] mx-auto bg-[#eee] block"
        type="submit"
        value="Add Student"
      />
    </form>
  );
};

export default BookForm;
