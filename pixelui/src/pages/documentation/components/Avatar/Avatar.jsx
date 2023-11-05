import React, { useState } from "react";

function Avatar() {
  const [showCode, setShowCode] = useState(false);

  const makeActive = {
    color: "black",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };

  return (
    <div>
      <h1>Avatar</h1>
      <p className="desc">Description goes here</p>
      <div className="alert_toggle">
        <button
          onClick={() => setShowCode(false)}
          style={!showCode ? makeActive : {}}
        >
          Preview
        </button>
        <button
          onClick={() => setShowCode(true)}
          style={showCode ? makeActive : {}}
        >
          Code
        </button>
      </div>
      {!showCode ? "" : ""}
    </div>
  );
}

export default Avatar;
