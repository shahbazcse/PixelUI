import "./Home.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { PiArrowRightThin } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const { dispatch } = useContext(AppContext);

  const handleNavigate = () => {
    dispatch({ type: "SET_LINK", payload: "guide" });
    dispatch({ type: "TOGGLE_LINK", payload: true });
    navigate("/docs/guide/introduction");
  };

  return (
    <div className="home_main">
      <div className="home_left">
        <p className="home_desc">
          Discover a rich CSS Component Library with Avatar, Alert, Badge,
          Button, Card, Headings, Text, and Image components for seamless web
          design.
        </p>
        <div className="home_buttons">
          <a onClick={handleNavigate} className="btn_getstarted">
            <p>Get Started</p>
            <PiArrowRightThin className="home_icon" />
          </a>
          <a
            className="btn_github"
            href="https://github.com/shahbazcse/PixelUI"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="home_icon" />
            <p>Github</p>
          </a>
        </div>
      </div>
      <div className="home_right">
        <div className="home_logo">
          Pixel<span>UI</span>
        </div>
        <div className="home_label">
          Make beautiful websites regardless of your design experience.
        </div>
      </div>
    </div>
  );
}

export default Home;
