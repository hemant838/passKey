import React from "react";

function Footer() {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center  w-full">
        <div className="logo font-bold text-white  text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">Key/&gt;</span>
        </div>

      <div className="flex justify-center items-center text-xl">
        Created with Love <img className="w-7 mx-3 "  src="icons/love.png" alt="" /> by{""}
        <a href="https://twitter.com/hemant70402026">HEMANT</a>
      </div>
    </div>
  );
}

export default Footer;
