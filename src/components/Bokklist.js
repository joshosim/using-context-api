import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="py-4" style={{ background: theme.bg, color: theme.syntax }}>
      <ul className="flex flex-col gap-5">
        {books.map((book) => {
          return (
            <li
              key={book.id}
              style={{ background: theme.ui }}
              className="mt-8 mx-7 rounded-md py-3"
            >
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Booklist;
