import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

function Header({ count }) {
  const [sidebar, setSideBar] = useState(false);
  // console.log(sidebar);
  return (
    <div className=" w-full flex items-center justify-between px-10 py-6 text-[18px] font-medium shadow-md fixed top-0 left-0 z-50 bg-white">
      <div>
        <Link to="/">
          <p>
            Yummy<span className=" text-yellow-400">Food</span>
          </p>
        </Link>
      </div>

      <div>
        <ul className=" hidden sm:flex gap-10">
          <li className=" hover:text-[#fbc531] cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className=" hover:text-[#fbc531] cursor-pointer">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className=" hover:text-[#fbc531] cursor-pointer">
            <NavLink to="/ourfoods">Our Foods</NavLink>
          </li>
          <li className=" hover:text-[#fbc531] cursor-pointer">
            <NavLink to="/signin">Sign In</NavLink>
          </li>
        </ul>
      </div>

      {sidebar ? (
        <div className=" z-10 absolute top-0 right-0 bg-[#f5f6fa] w-[300px] h-screen flex items-center justify-center sm:hidden">
          <RxCross2
            size={30}
            className=" absolute top-2 right-3 cursor-pointer"
            onClick={() => setSideBar(!sidebar)}
          />
          <ul className=" flex flex-col gap-10 ">
            <li
              className=" hover:text-[#fbc531] cursor-pointer"
              onClick={() => setSideBar(!sidebar)}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className=" hover:text-[#fbc531] cursor-pointer"
              onClick={() => setSideBar(!sidebar)}
            >
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li
              className=" hover:text-[#fbc531] cursor-pointer"
              onClick={() => setSideBar(!sidebar)}
            >
              <NavLink to="/ourfoods">Our Foods</NavLink>
            </li>
            <li
              className=" hover:text-[#fbc531] cursor-pointer"
              onClick={() => setSideBar(!sidebar)}
            >
              <NavLink to="/signin">Sign In</NavLink>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className=" flex gap-5 items-center relative">
        <GiHamburgerMenu
          fontSize={30}
          className=" cursor-pointer sm:hidden"
          onClick={() => setSideBar(!sidebar)}
        />
        <div className=" relative">
          <div className=" absolute top-[-18px] left-3 font-medium text-red-500">
            {count}
          </div>
          <FaCartShopping fontSize={30} />
        </div>
      </div>
    </div>
  );
}

export default Header;
