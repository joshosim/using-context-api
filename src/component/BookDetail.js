import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { AiOutlineDelete } from "react-icons/ai";

const BookDetail = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li className="bg-[#6d3d6d] relative text-white font-medium my-[10px] mx-auto cursor-pointer rounded-xl h-60 w-[10rem] border-2 border-white flex flex-col items-center">
      <img
        src={book.image_url}
        alt={book.image_url}
        className="object-cover h-36 w-full rounded-t-xl"
      />
      <div className="py-4">
        <div className="font-bold text-xl flex-wrap">{book.name}</div>
        <div>{book.dept}</div>
      </div>
      <AiOutlineDelete
        className="absolute bottom-0 right-0 hover:opacity-70 hover:scale-105"
        size={25}
        color="white"
        onClick={() => {
          alert(`Do you want to delete ${book.name} from the list?`);
          dispatch({ type: "DELETE_PERSON", id: book.id });
        }}
      />
    </li>
  );
};

export default BookDetail;
