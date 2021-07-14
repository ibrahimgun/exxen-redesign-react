import { Add, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./movieDetails.scss";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  return (
    <div className="movieDetails">
      <img
        src="https://peach.blender.org/wp-content/uploads/rodents.png"
        alt=""
      />
      <div className="detail">
        <img src="https://i.imgur.com/LlclHXo.png" alt="" />
        <span className="info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          exercitationem temporibus officia ullam laborum minima delectus
          aliquam provident, perferendis, explicabo ut quae doloribus sapiente
          molestiae nisi quod architecto tempore aspernatur.
        </span>
        <div className="buttons">
          <Link to="/watch" style={{ textDecoration: "none" }}>
            <button className="play">
              <PlayArrow />
              <span>Watch Now</span>
            </button>
          </Link>
          <button className="more">
            <Add />
            <span>Add To List</span>
          </button>
        </div>
      </div>
    </div>
  );
}
