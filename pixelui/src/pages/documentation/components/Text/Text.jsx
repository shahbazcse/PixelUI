import React, { useState } from "react";
import "./Text.css";
import CodeBlock from "../../../../components/CodeBlock/CodeBlock";

const TextPreview = () => {
  return (
    <div className="typography">
      <div className="box">
        <p className="subtitle-1">Subtitle 1</p>
      </div>
      <div className="box">
        <p className="subtitle-2">Subtitle 2</p>
      </div>
      <div className="box">
        <p className="body-1">Body 1</p>
      </div>
      <div className="box">
        <p className="body-2">Body 2</p>
      </div>
      <div className="box">
        <p className="btn-text">Button</p>
      </div>
      <div className="box">
        <p className="caption">Caption</p>
      </div>
      <div className="box">
        <p className="overline">OVERLINE</p>
      </div>
    </div>
  );
};

const CodePreview = () => {
  const codeText = `  <p className="subtitle-1">Subtitle 1</p>
  <p className="subtitle-2">Subtitle 2</p>
  <p className="body-1">Body 1</p>
  <p className="body-2">Body 2</p>
  <p className="btn-text">Button</p>
  <p className="caption">Caption</p>
  <p className="overline">OVERLINE</p>`;
  return <CodeBlock codeText={codeText} />;
};

function Text() {
  const [showCode, setShowCode] = useState(false);

  const makeActive = {
    color: "black",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };

  return (
    <div>
      <h1>Text</h1>
      <p className="desc">Description goes here</p>
      <div className="avatar_toggle">
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
      {!showCode ? <TextPreview /> : <CodePreview />}
    </div>
  );
}

export default Text;
