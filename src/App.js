import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Playlist from "./pages/playlist/Playlist";
import Playlists from "./pages/playlists/Playlists";
import Search from "./pages/search/Search";
import Tracks from "./pages/tracks/Tracks";
import LeftBar from "./components/leftBar/LeftBar";
import Play from "./components/play/Play";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  const Layout = () => {
    return (
      <div>
        <div className="app">
          <div className="appLeft">
            <LeftBar />
          </div>
          <div className="appRight">
            <Navbar />
            <div className="outlet">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
        <Play />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/collection/playlists", element: <Playlists /> },
        { path: "/collection/tracks", element: <Tracks /> },
        { path: "/playlist/:id", element: <Playlist /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
