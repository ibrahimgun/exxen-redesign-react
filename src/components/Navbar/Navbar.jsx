import {
  ArrowDropDown,
  Notifications,
  PersonalVideo,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/db/Exxen.png"
            alt=""
          />
          <span className="menuPage">Homepage</span>
          <span className="menuPage">Series</span>
          <span className="menuPage">Movies</span>
          <span className="menuPage">Anime</span>
          <span className="menuPage">My List</span>
        </div>
        <div className="right">
          <div className="searchBar">
            <input type="text" placeholder="What do you want to watch?" />
          </div>
          <PersonalVideo className="icon" />
          <Notifications className="icon" />
          <img
            src="http://admin.biyografya.com/_docs/photos/62c3b3ef8c954a86b02d081a8297afaa.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
