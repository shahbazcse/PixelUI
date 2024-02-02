import React from "react";
import { IoIosDesktop } from "react-icons/io";

const NonDesktopPage = () => {
  return (
    <div className="container">
      <div className="message">
        <IoIosDesktop className="icon" />
        <h1 className="heading">Switch to Desktop Mode</h1>
        <p className="guideline">
          This app is optimized for desktop use. Please switch to desktop mode
          for the best experience.
        </p>
      </div>
    </div>
  );
};

export default NonDesktopPage;
