import React from "react";

const Delivery = () => {
  return (
    <div className="  flex flex-col items-center justify-center  sm:w-[80%] h-[80vh] bg-white mx-auto mt-6">
      <h1 className=" text-yellow-300 text-center	text-2xl font-bold py-10">
        Quick Delivery
      </h1>
      <div className=" small:justify-center sm:w-full flex items-center gap-6 px-5">
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
          className=" w-[250px] sm:w-[350px]  md:w-[450px] lg:w-[550px]"
        />
        <div>
          <p className="text-green-600 text-3xl font-bold mb-2">Get The App</p>
          <p className=" text-2xl lg:text-5xl font-bold mb-4 msm:text-3xl">
            The Fastest Food <br /> Delivery In India
          </p>
          <button className=" bg-black text-white rounded px-6 py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
