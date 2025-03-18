import px24 from "../pictures/px24.webp";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons/faMessage";

const SideImg = () => {
  return (
    <div className="grid place-items-center mt-20 bg-slate-950 mx-20 relative z-10">
      <div className="relative w-72 col-[-1/1] row-[-1/1] sm:w-96">
        <img src={px24} alt="" />
      </div>

      <div className="grid grid-cols-[auto_1fr] items-center gap-3 col-[-1/1] row-[-1/1]">
        <span className="w-8 h-8 bg-[rgba(190,_216,_255,_0.15)] grid place-content-center rounded-full">
          <FontAwesomeIcon className="h-5" icon={faMessage} />
        </span>

        <p className="text-[#97afd5] font-semibold text-sm sm:text-base">
          support@primeHub.com
        </p>
      </div>

      <div className="w-64 h-64 grid col-[-1/1] row-[-1/1] relative sm:w-96 sm:h-96">
        <span className="w-full h-full border-2 border-[rgba(185,_210,_244,_0.3)] rounded-full block col-[-1/1] row-[-1/1]"></span>
        <span className="w-full h-full border-2 border-white rounded-full  border-l-transparent border-b-transparent block col-[-1/1] row-[-1/1] animate-spin"></span>
      </div>

      <div className="w-56 h-56 grid col-[-1/1] row-[-1/1] sm:w-80 sm:h-80">
        <span className="w-full h-full border-2 border-[rgba(185,_210,_244,_0.3)] rounded-full block col-[-1/1] row-[-1/1]"></span>
        <span className="w-full h-full border-2 border-white rounded-full  border-l-transparent border-r-transparent block col-[-1/1] row-[-1/1] animate-spin"></span>
      </div>
    </div>
  );
};

export default SideImg;
