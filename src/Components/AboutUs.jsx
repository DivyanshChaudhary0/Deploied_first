import React from "react";

const AboutUs = () => {
  return (
    <div className="wrapper w-[75%] h-[90vh] mx-auto mt-[100px]">
      <div className="upper">
        <h2 className="text-4xl font-medium py-2">
          Driving the force of{" "}
          <span className="text-yellow-300">assortment</span>
        </h2>
        <p className=" text-lg text-gray-500">
          For over a decade now, we’ve been empowering our customers in
          discovering new tastes and experiences across countries. By putting
          together meticulous information for our customers, we enable them to
          make an informed choice
        </p>
      </div>
      <div className="lower flex flex-row gap-8 mt-14">
        <div className="left w-[50%] h-[100%]">
          <h1 className="text-5xl mb-4">Who We are?</h1>
          <p className=" text-base text-gray-500">
            Launched in 2010, Our technology platform connects customers,
            restaurant partners and delivery partners, serving their multiple
            needs. Customers use our platform to search and discover
            restaurants, read and write customer generated reviews and view and
            upload photos, order food delivery, book a table and make payments
            while dining-out at restaurants. On the other hand, we provide
            restaurant partners with industry-specific marketing tools which
            enable them to engage and acquire customers to grow their business
            while also providing a reliable and efficient last mile delivery
            service. We also operate a one-stop procurement solution, Hyperpure,
            which supplies high quality ingredients and kitchen products to
            restaurant partners. We also provide our delivery partners with
            transparent and flexible earning opportunities.
          </p>
        </div>
        <div className="right w-[50%] h-[100%] flex items-center justify-center px-2 py-2">
          <img
            src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
            alt=""
            className=" object-cover object-center rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
