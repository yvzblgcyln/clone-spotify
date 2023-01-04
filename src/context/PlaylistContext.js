import { createContext, useEffect, useState } from "react";
import { playlists as playlistsData } from "../data/data";
const PlaylistContext = createContext();

export const PlaylistContextProvider = ({ children }) => {
  const [playlists, setPlaylist] = useState(false);

  useEffect(() => {
    setPlaylist(playlistsData);
  }, []);

  const value = { playlists, setPlaylist };
  return <PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>;
};

export default PlaylistContext;
