import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import LikedVideosPage from "./components/LikedVideosPage";
import { useState, createContext } from "react";
// import LoginComponent from "./components/LoginComponent";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children:[{
      path:"/",
      element:<MainContainer/>
    },{
      path:'watch',
      element:<WatchPage/>
    }],
  },
  {
    path: "/liked-videos",
    element: <LikedVideosPage/>
  }
]);

export const VideoContext = createContext(null)
function App() {
  const [likedVideos, setLikedVideos] = useState([])
  return (
    <Provider store={store}>
      <VideoContext.Provider value={{likedVideos, setLikedVideos}}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
      </VideoContext.Provider>
    </Provider>
  );
}

export default App;
