import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[22%] pl-[3%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">
        {overview.length > 100 ? `${overview.substring(0, 100)}...` : overview}
      </p>
      <div className="flex gap-4">
        <button className="flex justify-center items-center bg-white text-black font-semibold w-24 h-10 rounded-sm cursor-pointer hover:bg-gray-200 hover:bg-opacity-90 transition-all duration-200">
          <div>
            <BsFillPlayFill size={26} />
          </div>
          <p>Play</p>
        </button>
        <button className="flex justify-center items-center gap-2 bg-gray-400 text-white font-semibold w-32 h-10  rounded-sm cursor-pointer hover:bg-gray-700 hover:bg-opacity-90 transition-all duration-200">
          <div>
            <FaCircleInfo size={16} />
          </div>
          <p>More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
