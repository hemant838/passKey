import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-800  text-white ">
      <div className="mycontainer flex justify-between py-5 px-4  items-center h-14">
        <div className="logo font-bold text-white  text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">Key/&gt;</span>
        </div>
        
        <button className="text-white bg-green-950 my-5 rounded-md">
          <img
            className="inverted w-10 "
            src="icons/github.png"
            alt="github logo"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
