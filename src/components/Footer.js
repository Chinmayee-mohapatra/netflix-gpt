import React from "react";

const Footer = () => {
  return (
    <div className="p-4 bg-black bg-opacity-90 text-slate-400">
      <div className="w-3/4 mx-auto m-12 flex flex-col gap-8">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-6">
            <p>FAQ</p>
            <p>Cookie Preferences</p>
          </div>
          <div className="flex flex-col gap-6">
            <p>Help Center</p>
            <p>Corporate Information</p>
          </div>
          <div className="flex flex-col gap-6">
            <p>Terms of Use</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-6">
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
