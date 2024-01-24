import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { BiMusic } from "react-icons/bi";
import { BiMoviePlay } from "react-icons/bi";
import { BiNews } from "react-icons/bi";
import { BiTrophy } from "react-icons/bi";
import { BiBulb } from "react-icons/bi";
import { BiStopwatch } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import { FaShirt } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";
import { BiVideoPlus } from "react-icons/bi";
import { BiSolidVideos } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isHome = useLocation().pathname === "/";
  if (!isMenuOpen) return null;
  return (
    <div
      className={`sidebar p-10 top-20 bottom-0 shadow-lg fixed bg-white z-10 h-full overflow-auto`}
    >
      <ul className="flex gap-3 flex-col">
        <li className="flex">
          <Link className="flex" to="/">
            <MdHomeFilled className="h-6 w-7" /> Home
          </Link>
        </li>
        {/* <li>Shorts</li> */}
        <li>
          <Link className="flex" to="/">
            <BiVideoPlus className="h-6 w-7" /> Subscriptions
          </Link>
        </li>

        <hr
          style={{ width: "100%", border: "1px solid black", margin: "10px 0" }}
        />

        <li>
          <Link className="flex" to="/">
            <BsStopwatch className="h-6 w-7" />
            History{" "}
          </Link>
        </li>
        <li>
          <Link className="flex" to="/">
            <BiSolidVideos className="h-6 w-7" /> Library
          </Link>
        </li>

        <li>
          <Link className="flex" to="/liked-videos">
            <FiThumbsUp className="h-6 w-7" /> Liked videos
          </Link>
        </li>
        <li>
          <Link className="flex" to="/">
            <BiStopwatch className="h-6 w-7" /> Watch later
          </Link>
        </li>

        <hr
          style={{ width: "100%", border: "1px solid black", margin: "10px 0" }}
        />
        <h1 className="font-bold pt-5">Explore</h1>
        <li className="flex">
          <Link className="flex" to="/">
            <BiTrendingUp className="h-6 w-7" /> Trending
          </Link>
        </li>
        <li>
          <Link className="flex" to="/">
            <BiShoppingBag className="h-6 w-7" /> Shopping
          </Link>
        </li>
        <li>
          <Link className="flex" to="/">
            <BiMusic className="h-6 w-7" /> Music
          </Link>
        </li>
        <li>
          <Link className="flex" to="/">
            <BiMoviePlay className="h-6 w-7" /> Movies
          </Link>
        </li>
        <li>
          <Link className="flex" to="/">
            <FaGamepad className="h-5 w-7" /> Games
          </Link>
        </li>

        <li>
          <Link className="flex" to="/">
            <BiNews className="h-6 w-7" /> News
          </Link>
        </li>
        <li>
          <Link className="flex" to="/">
            <BiTrophy className="h-6 w-7" /> Sports
          </Link>
        </li>
        <li>
          <Link className="flex" to="/">
            <BiBulb className="h-6 w-7" /> Learning
          </Link>
        </li>
        <li>
          <Link className="flex" to="/">
            <FaShirt className="h-5 w-7" /> Fashion & Beauty
          </Link>
        </li>
        <hr
          style={{ width: "100%", border: "1px solid black", margin: "10px 0" }}
        />
        <h1 className="font-bold pt-5">More from YouTube</h1>
        <li>Youtube Premium</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
