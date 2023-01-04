import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PageContextProvider } from "./context/PageContext";
import { PlaylistContextProvider } from "./context/PlaylistContext";
import { UserContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <PlaylistContextProvider>
      <PageContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PageContextProvider>
    </PlaylistContextProvider>
  </UserContextProvider>
);
