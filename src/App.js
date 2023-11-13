import React from "react";
//import SongList from "./funcComponents/SongList";
//import ChatPage from "./chatPageComp/ChatPage";
import Navbar from "./components/Navbar";
import Booklist from "./components/Bokklist";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="max-w-[400px] m-8 mx-auto text-center">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
      {/* <SongList /> */}
      {/* <ChatPage /> */}
    </div>
  );
}

export default App;
