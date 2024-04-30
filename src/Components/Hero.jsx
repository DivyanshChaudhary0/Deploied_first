import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Hero = () => {

  const [slider, setSlider] = useState(0);

  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  // useEffect(
  //   function () {
  //     let interval = setInterval(function () {
  //       handlePlus();
  //     }, 2000);
  //     return () => clearInterval(interval);
  //   },
  //   [slider]
  // );

  const handlePlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  const handleMinus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  return (
    <>
      <div className=" w-[90%] h-[80vh] mt-6 relative mx-auto rounded-2xl">
        <img
          src={imgData[slider].url}
          alt=""
          className=" w-full h-full object-cover object-center rounded-2xl"
        />
        <div className=" w-[90%] h-[80vh] bg-black absolute top-0 left-0 opacity-10 rounded-2xl"></div>

        <p className=" w-full absolute top-[50%] text-center text-3xl text-white font-semibold">
          {" "}
          Welcome to the world of tasty and fresh Food.
        </p>

        <div className=" w-full flex gap-6 items-center justify-between px-24 absolute top-[50%] text-white">
          <FaAngleLeft
            size={30}
            onClick={handleMinus}
            className=" cursor-pointer"
          />
          <FaAngleRight
            size={30}
            onClick={handlePlus}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
