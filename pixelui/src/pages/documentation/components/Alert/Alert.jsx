import React, { useState } from "react";
import "./Alert.css";

import CodeBlock from "../../../../components/CodeBlock/CodeBlock";

import { BiSolidErrorAlt } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const AlertComponent = ({ status, children, action }) => {
  let alertTextColor;
  let alertBackgroundColor;

  switch (status) {
    case "error":
      alertTextColor = "#C70039";
      alertBackgroundColor = "#FEA1A1";
      break;
    case "success":
      alertTextColor = "#4caa72";
      alertBackgroundColor = "#D1F4E0";
      break;
    case "warning":
      alertTextColor = "#d3a054";
      alertBackgroundColor = "#FDEDD3";
      break;
    case "info":
      alertTextColor = "#5690ce";
      alertBackgroundColor = "#CCE2FC";
      break;
    default:
      break;
  }

  return (
    <div>
      <div
        className="alert_components"
        style={{ backgroundColor: alertBackgroundColor, color: alertTextColor }}
      >
        <div className="alert_icon_msg">{children}</div>
        <IoClose onClick={action} className="alert_close" />
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
    default:
      break;
  }

  return <div>{alertIcon}</div>;
};

const AlertPreview = () => {
  return (
    <div className="alert">
      <div className="alert_box">
        <h2 className="alert_heading_text">Error</h2>
        <AlertComponent status="error" action={() => {}}>
          <AlertIcons status="error" />
          There was a problem creating your account!
        </AlertComponent>
      </div>
      <div className="alert_box">
        <h2 className="alert_heading_text">Success</h2>
        <AlertComponent status="success" action={() => {}}>
          <AlertIcons status="success" />
          Thank you. Your submission has been sent.
        </AlertComponent>
      </div>
      <div className="alert_box">
        <h2 className="alert_heading_text">Warning</h2>
        <AlertComponent status="warning" action={() => {}}>
          <AlertIcons status="warning" />
          Your daily data bandwith is about to end.
        </AlertComponent>
      </div>
      <div className="alert_box">
        <h2 className="alert_heading_text">Info</h2>
        <AlertComponent status="info" action={() => {}}>
          <AlertIcons status="info" />
          You've been inactive for a while, so we logged you out. Please Login
          to continue.
        </AlertComponent>
      </div>
    </div>
  );
};

const CodePreview = () => {
  const codeText = `  <AlertComponent status="error" action={() => {}}>
    <AlertIcons status="error" />
    There was a problem creating your account!
  </AlertComponent>

  <AlertComponent status="success" action={() => {}}>
    <AlertIcons status="success" />
    Thank you. Your submission has been sent.
  </AlertComponent>

  <AlertComponent status="warning" action={() => {}}>
    <AlertIcons status="warning" />
    Your daily data bandwith is about to end.
  </AlertComponent>
  
  <AlertComponent status="info" action={() => {}}>
    <AlertIcons status="info" />
    You've been inactive for a while, so we logged you out. Please Login to continue.
  </AlertComponent>`;
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
      <p className="desc">
        Notify users promptly with dynamic messages, ensuring important
        information is instantly communicated.
      </p>
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
