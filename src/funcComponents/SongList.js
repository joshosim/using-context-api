import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Amazing Grace", id: 1 },
    { title: "Yield not to temptation", id: 2 },
    { title: "Holy, Holy, Holy", id: 3 },
  ]);
  const addSong = (title) => [
    setSongs([...songs, { title: title, id: uuid() }]),
  ];
  return (
    <div>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
