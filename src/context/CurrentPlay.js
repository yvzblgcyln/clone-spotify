import { createContext, useState } from "react";
import React, { useState, useEffect } from "react";

const CurrentPlay = createContext();

export const CurrentPlayProvider = ({ children }) => {
  const [page, setPage] = useState("");

  const value = {};
  return <CurrentPlay.Provider value={value}>{children}</CurrentPlay.Provider>;
};

export default CurrentPlay;

export const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};
