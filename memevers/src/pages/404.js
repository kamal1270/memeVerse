import React from "react";
import { Link } from "react-router-dom";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 text-center">
      <h1 className="text-5xl font-bold">404 - Meme Not Found</h1>
      <p className="mt-4 text-lg">Looks like this meme doesn't exist!</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Custom404;
