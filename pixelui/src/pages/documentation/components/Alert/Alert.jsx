import React, { useState } from "react";
import "./Alert.css";

import CodeBlock from "../../../../components/CodeBlock/CodeBlock";

import { BiSolidErrorAlt } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const AlertComponents = ({ status, children }) => {
  let alertTextColor;
  let alertBackgroundColor;
  let headingText;

  switch (status) {
    case "error":
      alertTextColor = "#C70039";
      alertBackgroundColor = "#FEA1A1";
      headingText = "Error";
      break;
    case "success":
      alertTextColor = "#4caa72";
      alertBackgroundColor = "#D1F4E0";
      headingText = "Success";
      break;
    case "warning":
      alertTextColor = "#d3a054";
      alertBackgroundColor = "#FDEDD3";
      headingText = "Warning";
      break;
    case "info":
      alertTextColor = "#5690ce";
      alertBackgroundColor = "#CCE2FC";
      headingText = "Info";
      break;
  }

  return (
    <div>
      <h2 className="alert_heading_text">{headingText}</h2>
      <div
        className="alert_components"
        style={{ backgroundColor: alertBackgroundColor, color: alertTextColor }}
      >
        {children}
      </div>
    </div>
  );
};

const AlertIcons = ({ status }) => {
  let alertIcon;

  switch (status) {
    case "error":
      alertIcon = <BiSolidErrorAlt className="alert_icons" />;
      break;
    case "success":
      alertIcon = <AiOutlineCheckCircle className="alert_icons" />;
      break;
    case "warning":
      alertIcon = <BiError className="alert_icons" />;
      break;
    case "info":
      alertIcon = <AiOutlineInfoCircle className="alert_icons" />;
      break;
  }

  return <div>{alertIcon}</div>;
};

const AlertPreview = () => {
  return (
    <div className="alert">
      <AlertComponents status="error">
        <AlertIcons status="error" />
        There was a problem creating your account!
      </AlertComponents>
      <AlertComponents status="success">
        <AlertIcons status="success" />
        Thank you. Your submission has been sent.
      </AlertComponents>
      <AlertComponents status="warning">
        <AlertIcons status="warning" />
        Your daily data bandwith is about to end.
      </AlertComponents>
      <AlertComponents status="info">
        <AlertIcons status="info" />
        You've been inactive for a while, so we logged you out. Please Login to
        continue.
      </AlertComponents>
    </div>
  );
};

const CodePreview = () => {
  const codeText = `<AlertComponents status="error">
  <AlertIcons status="error" />
  There was a problem creating your account!
</AlertComponents>
<AlertComponents status="success">
  <AlertIcons status="success" />
  Thank you. Your submission has been sent.
</AlertComponents>
<AlertComponents status="warning">
  <AlertIcons status="warning" />
  Your daily data bandwith is about to end.
</AlertComponents>
<AlertComponents status="info">
  <AlertIcons status="info" />
  You've been inactive for a while, so we logged you out. Please Login to continue.
</AlertComponents>`;
  return <CodeBlock codeText={codeText} />;
};

function Alert() {
  const [showCode, setShowCode] = useState(false);

  const makeActive = {
    color: "black",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };

  return (
    <div>
      <h1>Alert</h1>
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
      {!showCode ? <AlertPreview /> : <CodePreview />}
    </div>
  );
}

export default Alert;
