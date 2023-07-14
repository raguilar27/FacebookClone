import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center switch-layers">
      {/*Left side*/}
      <div className="text-2xl/[28px] w-1/2 pb-5 min-w-[400px]">
        <div className="center-img">
          <Image
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            height={100}
            width={300}
            alt="Facebook Logo"
          />
        </div>
        <h2 className="ml-8 -mt-3">
          Connect with friends and the world around you on Facebook.
        </h2>
      </div>
      {/*Right side*/}
      <div className="bg-white flex flex-col p-5 rounded-xl w-400px shadow-xl min-w-[400px]">
        <input
          className="my-2 border border-l border-gray-300 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="my-2 border border-l border-gray-300 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="text"
          placeholder="Password"
        />
        <button className="bg-blue-500 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-600">
          Log in
        </button>
        <p className="cursor-pointer text-blue-600 font-medium text-sm my-2 text-center">
          Forgot password?
        </p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-500 my-2 py-3 px-4 text-lg font-medium text-white rounded-md hover:bg-green-600 mx-auto">
          Create new account
        </button>
      </div>
    </div>
  );
};

export default Login;
