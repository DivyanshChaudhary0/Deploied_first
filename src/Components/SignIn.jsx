import React, { useState } from "react";

const SignIn = () => {
  const [user, Setuser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    Setuser({...user,[e.target.name]:e.target.value})
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className="wrapper w-[85%] h-[90vh] mx-auto flex gap-8 mt-[30px]">
      <div className="left w-[50%] h-[100%] flex flex-col items-start justify-center">
        <h2 className="text-3xl font-medium py-2">
          Get Started With your Account
        </h2>
        <p className=" text-lg text-gray-500">
          Find Your Favourite Food On our platform. Just one step to order your
          food.
        </p>
      </div>
      <div className="right w-[50%] h-[100%] flex items-center justify-center">
        <form className="w-[60%] h-[70%] bg-slate-200 rounded-lg px-8" onSubmit={handleSubmit}>
          <p className=" text-2xl font-medium my-4">Sign Up</p>

          <div className="input mb-4">
            <div className="text-gray-500">Full Name</div>
            <input
              type="text"
              className="border-2 px-4 py-1 w-full rounded-md"
              value={user.username}
              name="username"
              onChange={handleChange}
            />
          </div>

          <div className="input mb-4">
            <div className="text-gray-500">Email</div>
            <input
              type="text"
              className="border-2 px-4 py-1 w-full rounded-md"
              value={user.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="input mb-4">
            <div className="text-gray-500">Mobile</div>
            <input
              type="text"
              className="border-2 px-4 py-1 w-full rounded-md"
              value={user.mobile}
              name="mobile"
              onChange={handleChange}
            />
          </div>

          <div className="input mb-4">
            <div className="text-gray-500">Password</div>
            <input
              type="text"
              className="border-2 px-4 py-1 w-full rounded-md"
              value={user.password}
              name="password"
              onChange={handleChange}
            />
          </div>

          <button className=" w-full bg-blue-600 text-white py-2 rounded-lg my-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
