import React from "react";
import { useNavigate } from "react-router-dom";

function ComponentsMenu() {
  const navigate = useNavigate();

  const isActive = (navlink) => {
    const path = window.location.pathname;
    return { color: path === navlink ? "#0B76F1" : "" };
  };

  return (
    <div className="docs-nav">
      <p>Guide</p>
      <ul className="list">
        <li>
          <div
            style={isActive("/docs/guide/introduction")}
            onClick={() => navigate("/docs/guide/introduction")}
          >
            Introduction
          </div>
        </li>
        <li>
          <div
            style={isActive("/docs/guide/colors")}
            onClick={() => navigate("/docs/guide/colors")}
          >
            Colors
          </div>
        </li>
        <li>
          <div
            style={isActive("/docs/guide/typography")}
            onClick={() => navigate("/docs/guide/typography")}
          >
            Typography
          </div>
        </li>
      </ul>

      <p>
        <strong>Components</strong>
      </p>
      <ul className="list">
        <li>
          <div
            style={isActive("/docs/components/alert")}
            onClick={() => navigate("/docs/components/alert")}
          >
            Alert
          </div>
        </li>
        <li>
          <div
            style={isActive("/docs/components/avatar")}
            onClick={() => navigate("/docs/components/avatar")}
          >
            Avatar
          </div>
        </li>
        <li>
          <div
            style={isActive("/docs/components/badge")}
            onClick={() => navigate("/docs/components/badge")}
          >
            Badge
          </div>
        </li>
        <li>
          <div
            style={isActive("/docs/components/button")}
            onClick={() => navigate("/docs/components/button")}
          >
            Button
          </div>
        </li>
        <li>
          <div
            style={isActive("/docs/components/card")}
            onClick={() => navigate("/docs/components/card")}
          >
            Card
          </div>
        </li>
        <li>
          <div
            style={isActive("/docs/components/headings")}
            onClick={() => navigate("/docs/components/headings")}
          >
            Headings
          </div>
        </li>
        <li>
          <div
            style={isActive("/docs/components/text")}
            onClick={() => navigate("/docs/components/text")}
          >
            Text
          </div>
        </li>
        <li>
          <div
            style={isActive("/docs/components/image")}
            onClick={() => navigate("/docs/components/image")}
          >
            Image
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ComponentsMenu;
