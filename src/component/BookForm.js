import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [image_url, setImageurl] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageurl(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_PERSON",
      book: {
        name,
        dept,
        image_url: URL.createObjectURL(image_url),
      },
    });
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
      <div className="flex justify-between items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <input
          className="py-[6px] px-[20px] my-[0.325rem] mx-auto bg-[#eee] block"
          type="submit"
          value="Add Student"
        />
      </div>
    </form>
  );
};

export default BookForm;
