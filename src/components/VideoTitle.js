import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[22%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold pl-2 md:pl-0">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 ">
        {overview.length > 100 ? `${overview.substring(0, 100)}...` : overview}
      </p>
      <div className="flex gap-4 my-4 md:m-0 pl-2 md:pl-0">
        <button className="flex justify-center items-center bg-white text-black text-base md:text-lg font-semibold py-[2px] px-2 md:w-24 md:h-10 rounded-sm cursor-pointer hover:bg-gray-200 hover:bg-opacity-90 duration-200">
          <div className="hidden md:inline-block">
            <BsFillPlayFill size={26} />
          </div>
          <p>Play</p>
        </button>
        <button className="hidden md:inline-block bg-gray-400 text-white font-semibold w-32 h-10  rounded-sm cursor-pointer hover:bg-gray-700 hover:bg-opacity-90 duration-200">
          <div className="flex justify-center items-center gap-2">
            <div>
              <FaCircleInfo size={16} />
            </div>
            <p>More Info</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
