import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

function ComponentsMenu() {
  const navigate = useNavigate();

  const {
    state: { selectedLink, openLink },
    dispatch,
  } = useContext(AppContext);

  const isActive = (navlink) => {
    const path = window.location.pathname;
    return { color: path === navlink ? "#0B76F1" : "" };
  };

  const handleSelectLink = (type) => {
    if (type !== selectedLink) {
      dispatch({ type: "TOGGLE_LINK", payload: false });
      dispatch({ type: "SET_LINK", payload: type });
      dispatch({ type: "TOGGLE_LINK", payload: true });
    } else {
      dispatch({ type: "TOGGLE_LINK", payload: !openLink });
    }
  };

  const setDefault = () => {
    const isPathActive = window.location.pathname.split("/").includes("guide")
      ? "guide"
      : window.location.pathname.split("/").includes("components")
        ? "components"
        : "";
    handleSelectLink(isPathActive);
  }

  useEffect(() => {
    return setDefault();
  }, []);

  return (
    <div className="docs-nav noselect">
      <>
        <p onClick={() => handleSelectLink("guide")}>
          <span>Guide</span>
          {openLink && selectedLink === "guide" ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}
        </p>
        {openLink && selectedLink === "guide" ? (
          <ul className="list">
            <li onClick={() => navigate("/docs/guide/introduction")}>
              <div style={isActive("/docs/guide/introduction")}>
                Introduction
              </div>
            </li>
            <li onClick={() => navigate("/docs/guide/colors")}>
              <div style={isActive("/docs/guide/colors")}>Colors</div>
            </li>
            <li onClick={() => navigate("/docs/guide/typography")}>
              <div style={isActive("/docs/guide/typography")}>Typography</div>
            </li>
          </ul>
        ) : null}
      </>
      <>
        <p onClick={() => handleSelectLink("components")}>
          <span>Components</span>
          {openLink && selectedLink === "components" ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}
        </p>
        {openLink && selectedLink === "components" ? (
          <ul className="list">
            <li onClick={() => navigate("/docs/components/alert")}>
              <div style={isActive("/docs/components/alert")}>Alert</div>
            </li>
            <li onClick={() => navigate("/docs/components/avatar")}>
              <div style={isActive("/docs/components/avatar")}>Avatar</div>
            </li>
            <li onClick={() => navigate("/docs/components/badge")}>
              <div style={isActive("/docs/components/badge")}>Badge</div>
            </li>
            <li onClick={() => navigate("/docs/components/button")}>
              <div style={isActive("/docs/components/button")}>Button</div>
            </li>
            <li onClick={() => navigate("/docs/components/card")}>
              <div style={isActive("/docs/components/card")}>Card</div>
            </li>
            <li onClick={() => navigate("/docs/components/headings")}>
              <div style={isActive("/docs/components/headings")}>Headings</div>
            </li>
            <li onClick={() => navigate("/docs/components/text")}>
              <div style={isActive("/docs/components/text")}>Text</div>
            </li>
            <li onClick={() => navigate("/docs/components/image")}>
              <div style={isActive("/docs/components/image")}>Image</div>
            </li>
          </ul>
        ) : null}
      </>
    </div>
  );
}

export default ComponentsMenu;
