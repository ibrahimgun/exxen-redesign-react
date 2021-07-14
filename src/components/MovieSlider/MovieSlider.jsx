import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";
import SliderItem from "../SliderItem/SliderItem";
import "./movieSlider.scss";

export default function MovieSlider() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const sliderRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = sliderRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="movieSlider">
      <h1>İzlemeye Devam Et</h1>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={sliderRef}>
          <SliderItem index={0} />
          <SliderItem index={1} />
          <SliderItem index={2} />
          <SliderItem index={3} />
          <SliderItem index={4} />
          <SliderItem index={5} />
          <SliderItem index={6} />
          <SliderItem index={7} />
          <SliderItem index={8} />
          <SliderItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
