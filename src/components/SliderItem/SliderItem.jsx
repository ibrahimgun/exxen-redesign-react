import { Add, PlayArrow, ThumbDown, ThumbUp } from "@material-ui/icons";
import React, { useState } from "react";
import "./sliderItem.scss";

export default function SliderItem({ index }) {
  const trailer =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="sliderItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://yorumguncel.com/wp-content/uploads/2021/01/gibi-dizi-konusu-oyunculari-exxen-dizileri.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="detail">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUp className="icon" />
              <ThumbDown className="icon" />
            </div>
            <div className="detailTop">
              <span>2 saat 11 dakika</span>
              <span className="limit">+13</span>
              <span>2021</span>
            </div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quia ab, at dicta, sunt maiores quaerat repellendus,
              corrupti sequi nemo dolorum cum!
            </div>
            <div className="genre">Fun Facts</div>
          </div>
        </>
      )}
    </div>
  );
}
