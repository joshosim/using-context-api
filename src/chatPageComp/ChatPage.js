import React from "react";
import { useState } from "react";
import { BsThreeDotsVertical, BsChat } from "react-icons/bs";
import Uka from "../img/uka.png";
import { v1 as uuid } from "uuid";
import { data } from "./data";

const ChatPage = () => {
  const [mssg, setMssg] = useState(data);
  const [message, setMessage] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    addMessage(message);
    setMessage("");
  };
  const addMessage = (message) => {
    setMssg([...mssg, { msg: message, id: uuid() }]);
  };
  return (
    <div className="h-[80vh]">
      <div>
        {/* navbar */}
        <div className="bg-blue-500 flex justify-between items-center p-3">
          <img
            src={Uka}
            alt="uka"
            className="h-12 w-12 object-cover rounded-full"
          />
          <h1 className="font-bold text-xl">Osim Uka</h1>
          <BsThreeDotsVertical size={25} />
        </div>
        {/* chat */}
        <div className="bg-blue-100 px-6 h-[60vh] py-1 overflow-y-auto">
          <ul className="flex items-end flex-col text-end">
            {mssg.map((mess) => {
              return (
                <li key={mess.id} className="p-1 my-1 bg-blue-300 rounded-md">
                  {mess.msg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="bg-blue-500 p-3 flex justify-around items-center">
        <form onSubmit={handleSend} className="flex gap-2">
          <div className="bg-white flex gap-1 items-center pl-2 rounded-md">
            <BsChat size={25} />
            <input
              type="text"
              required
              className="p-1 rounded-md outline-none border-none"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="outline outline-2 p-1 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
