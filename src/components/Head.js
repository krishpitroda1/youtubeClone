// import React, { useEffect } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { AiFillYoutube } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
// import { useState } from "react";
// import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { BsFillBellFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  // const [searchQuery, setSearchQuery] = useState("");
  // const [suggestion, setSuggestions] = useState([]);
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  // const [showSuggestions, setShowSuggestions] = useState(false);
  // const getSearchSugesestions = async () => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //     mode: "no-cors",
  //   };

  //   fetch(YOUTUBE_SEARCH_API + searchQuery, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log("res", result))
  //     .catch((error) => console.log("error", error));
  // };
  // useEffect(() => {
  //   const timer = setTimeout(() => getSearchSugesestions(), 200);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchQuery]);
  return (
    <div className="grid grid-flow-col p-5 shadow-lg w-full bg-white fixed top-0">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuhandler()}
          className="h-8 cursor-pointer"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
          alt="menu"
        />
        <div className="">
          <Link to="/" className="flex">
            {/* <img className="h-10 mx-2" src="https://cdn.vox-cdn.com/thumbor/6MyN91DqRPwnQlOhvqPEHV8paaI=/0x0:1680x1050/1400x1050/filters:focal(840x525:841x526):no_upscale()/cdn0.vox-cdn.com/uploads/chorus_asset/file/9130449/YTLogo_old_new_animation.gif" alt="you-tube logo" /> */}
            <AiFillYoutube className="ml-5 mr-1  text-3xl" />
            <p className="flex mx-0 my-1 font-serif">Youtube</p>
          </Link>
        </div>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="b-2 px-5 rounded-l-full w-1/2 border border-gary-500 h-10"
          />
          <button className="rounded-r-full px-5 py-2 border border-black-500 bg-gray-200 ">
            🔍
          </button>
        </div>
      </div>
      <div className="col-span-1 my-1 flex">
        <a href="/">
          <BsFillBellFill className="h-7 w-16 my-1" />
        </a>
        <div>{isAuthenticated && <p>{user.name}</p>}</div>
        {isAuthenticated ? (
          <div>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => loginWithRedirect()}>
              <FaUserCircle className="h-9 w-16" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Head;
