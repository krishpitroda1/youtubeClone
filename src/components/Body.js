import React, { useState } from "react";
import Sidebar from "./Sidebar";
// import MainContainer from './MainContainer'
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Head from "./Head";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [likedVideos, setLikedVideos] = useState([]);
  return (
    <div className="flex flex-col md:flex-row">
      <Head />
      <Sidebar className="h-screen" />
      <Outlet likedVideos={likedVideos} setLikedVideos={setLikedVideos} />
    </div>
  );
};

export default Body;
