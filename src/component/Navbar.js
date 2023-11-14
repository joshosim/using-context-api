import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="bg-[#6d3d6d] p-6">
      <h1 className="font-bold text-2xl text-white">X-tra Reading List</h1>
      <p className=" text-white">
        Currently you have {books.length} books to get through...
      </p>
    </div>
  );
};

export default Navbar;
