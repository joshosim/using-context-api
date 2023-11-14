import React from "react";
import BookContextProvider from "./context/BookContext";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";
import BookForm from "./component/BookForm";
//import SongList from "./funcComponents/SongList";
//import ChatPage from "./chatPageComp/ChatPage";

function App() {
  return (
    <div className="bg-[#4c2a4c] max-w-[700px] w-[90%] m-8 mx-auto text-center">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
      {/* <SongList /> */}
      {/* <ChatPage /> */}
    </div>
  );
}

export default App;
