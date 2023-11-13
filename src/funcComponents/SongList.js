import React, { useEffect, useState } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Amazing Grace", id: 1 },
    { title: "Yield not to temptation", id: 2 },
    { title: "Holy, Holy, Holy", id: 3 },
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };
  useEffect(() => {
    console.log("Use Effect Hook Runs", songs);
  }, [songs]);
  useEffect(() => {
    console.log("Use Effect Hook Runs", age);
  }, [age]);
  return (
    <div>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Add 1 to age: {age}
      </button>
    </div>
  );
};

export default SongList;
