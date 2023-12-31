import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="bg-[#6d3d6d] p-6 flex justify-between items-center">
      <h1 className="font-bold text-2xl text-white">Students in the Class</h1>
      <div className="flex gap-6">
        <AiOutlineSearch size={45} color="white" />
        <p className=" text-white font-bold , text-xl grid place-content-center p-5 h-4 w-4 border-2 rounded-full">
          {books.length}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
