import React, { useState } from "react";
import "./Headings.css";
import CodeBlock from "../../../../components/CodeBlock/CodeBlock";

const HeadingsPreview = () => {
  return (
    <div className="typography">
      <div className="box">
        <h2 className="header-1">Heading 1</h2>
      </div>
      <div className="box">
        <h2 className="header-2">Heading 2</h2>
      </div>
      <div className="box">
        <h3 className="header-3">Heading 3</h3>
      </div>
      <div className="box">
        <h4 className="header-4">Heading 4</h4>
      </div>
      <div className="box">
        <h5 className="header-5">Heading 5</h5>
      </div>
      <div className="box">
        <h6 className="header-6">Heading 6</h6>
      </div>
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
  const codeText = `  <h1 className="header-1">Heading 1</h1>
  <h2 className="header-2">Heading 2</h2>
  <h3 className="header-3">Heading 3</h3>
  <h4 className="header-4">Heading 4</h4>
  <h5 className="header-5">Heading 5</h5>
  <h6 className="header-6">Heading 6</h6>
  <p className="subtitle-1">Subtitle 1</p>
  <p className="subtitle-2">Subtitle 2</p>
  <p className="body-1">Body 1</p>
  <p className="body-2">Body 2</p>
  <p className="btn-text">Button</p>
  <p className="caption">Caption</p>
  <p className="overline">OVERLINE</p>`;
  return <CodeBlock codeText={codeText} />;
};

function Headings() {
  const [showCode, setShowCode] = useState(false);

  const makeActive = {
    color: "black",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };

  return (
    <div>
      <h1>Headings</h1>
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
      {!showCode ? <HeadingsPreview /> : <CodePreview />}
    </div>
  );
}

export default Headings;
