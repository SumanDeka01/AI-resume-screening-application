import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-blue-400 flex justify-between items-center h-15 p-4">
        <a className="text-xl">ReSuman</a>
        <div className="p-3 m-4 flex gap-3">
          <a href="">Home</a>
          <a href="">Resume</a>
          <button className="bg-blue-500 h-8 w-35 rounded-2xl cursor-pointer">
            Upload here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
