import React from "react";
import Navbar from "../Ui/Navbar";

const ForgetPassword = () => {
  return (
    <div className="max-w-full flex items-center justify-center min-h-screen">
      <Navbar/>
      <div className="max-w-md flex-1  rounded-lg shadow-lg bg-slate-300 mx-auto ">
        <h1 className=" p-2 text-xl font-bold">Forgot Password</h1>
        <form className="max-w-md px-4 py-8  mx-auto">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@mail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              New password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>

          <button
            type="submit"
            className="text-gray-800 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
