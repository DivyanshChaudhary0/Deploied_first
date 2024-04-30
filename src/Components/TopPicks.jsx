import React from "react";
import { topPicks } from "../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" , color: "black"}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" , color: "black" }}
        onClick={onClick}
      />
    );
  }

const TopPicks = ({handleAdd}) => {

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className=" w-[90%] mx-auto px-10 py-10 mt-6 ">
      <Slider {...settings}>
        {topPicks.map(function(val) {
          return (
            <div key={val.id} className=" w-[100%] mb-6">
              <div className="flex items-center justify-center">
              <img
                src={val.img}
                alt=""
                className=" w-[200px] h-[200px] rounded-full"
              />
              </div>
              <div className="flex items-center justify-center flex-col gap-3 pt-2">
                <p className=" font-semibold uppercase">{val.title}</p>
                <p className=" font-semibold">{val.price}</p>
                <button className=" bg-black text-white rounded px-6 py-2" onClick={handleAdd}>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopPicks;
