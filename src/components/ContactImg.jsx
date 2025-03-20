import px24 from "../pictures/px24.webp";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons/faMessage";

const SideImg = () => {
  return (
    <div className="grid place-items-center mt-20 bg-slate-950 mx-20 relative z-10 p-10 rounded-lg">
      <div className="relative w-72 sm:w-96">
        <img src={px24} alt="Support" className="rounded-lg shadow-lg" />
      </div>

      <div className="grid grid-cols-[auto_1fr] items-center gap-3 mt-5">
        <span className="w-10 h-10 bg-[rgba(190,_216,_255,_0.15)] flex items-center justify-center rounded-full">
          <FontAwesomeIcon className="h-6 text-white" icon={faMessage} />
        </span>
        <p className="text-[#97afd5] font-semibold text-sm sm:text-base">
          support@primeHub.com
        </p>
      </div>

      <div className="relative w-64 h-64 sm:w-96 sm:h-96 flex justify-center items-center">
        <span className="absolute w-full h-full border-2 border-[rgba(185,_210,_244,_0.3)] rounded-full"></span>
        <span className="absolute w-full h-full border-2 border-white rounded-full border-l-transparent border-b-transparent animate-spin-slow"></span>
      </div>

      <div className="relative w-56 h-56 sm:w-80 sm:h-80 flex justify-center items-center">
        <span className="absolute w-full h-full border-2 border-[rgba(185,_210,_244,_0.3)] rounded-full"></span>
        <span className="absolute w-full h-full border-2 border-white rounded-full border-l-transparent border-r-transparent animate-spin-slow"></span>
      </div>
    </div>
  );
};

export default SideImg;
