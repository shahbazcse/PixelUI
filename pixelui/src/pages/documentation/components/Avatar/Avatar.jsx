import React, { useState } from "react";
import "./Avatar.css";
import CodeBlock from "../../../../components/CodeBlock/CodeBlock";

import maleAvatar from "../../../../assets/maleAvatarSample.jpeg";
import femaleAvatar from "../../../../assets/femaleAvatarSample.jpeg";

const AvatarComponent = ({ type, size, src, name }) => {
  let imgSize;
  switch (size) {
    case "small":
      imgSize = "42px";
      break;
    case "medium":
      imgSize = "58px";
      break;
    case "large":
      imgSize = "76px";
      break;
    default:
      break;
  }
  return (
    <div
      className={`${type}_avatar`}
      style={{ width: imgSize, height: imgSize }}
    >
      <img src={src} alt={name} className="avatar_img" />
    </div>
  );
};

const AvatarPreview = () => {
  return (
    <div className="avatar">
      <div>
        <h2 className="avatar_heading_text">Round Avatar</h2>
        <div className="avatar_box">
          <div className="avatar_wrapper">
            <AvatarComponent
              type="round"
              size="small"
              src={maleAvatar}
              name="Avatar1"
            />
            <p>small</p>
          </div>
          <div className="avatar_wrapper">
            <AvatarComponent
              type="round"
              size="medium"
              src={maleAvatar}
              name="Avatar2"
            />
            <p>medium</p>
          </div>
          <div className="avatar_wrapper">
            <AvatarComponent
              type="round"
              size="large"
              src={maleAvatar}
              name="Avatar3"
            />
            <p>large</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="avatar_heading_text">Squircle Avatar</h2>
        <div className="avatar_box">
          <div className="avatar_wrapper">
            <AvatarComponent
              type="squircle"
              size="small"
              src={femaleAvatar}
              name="Avatar1"
            />
            <p>small</p>
          </div>
          <div className="avatar_wrapper">
            <AvatarComponent
              type="squircle"
              size="medium"
              src={femaleAvatar}
              name="Avatar2"
            />
            <p>medium</p>
          </div>
          <div className="avatar_wrapper">
            <AvatarComponent
              type="squircle"
              size="large"
              src={femaleAvatar}
              name="Avatar3"
            />
            <p>large</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodePreview = () => {
  const codeText = `  // Round Avatar - Small
  <AvatarComponent type="round" size="small" src="https://picsum.photos/200" name="Avatar1"/>
  // Round Avatar - Medium
  <AvatarComponent type="round" size="medium" src="https://picsum.photos/200" name="Avatar2"/>
  // Round Avatar - Large
  <AvatarComponent type="round" size="large" src="https://picsum.photos/200" name="Avatar3"/>
  
  // Squircle Avatar - Small
  <AvatarComponent type="squircle" size="small" src="https://picsum.photos/200" name="Avatar1"/>
  // Squircle Avatar - Medium
  <AvatarComponent type="squircle" size="medium" src="https://picsum.photos/200" name="Avatar2"/>
  // Squircle Avatar - Large
  <AvatarComponent type="squircle" size="large" src="https://picsum.photos/200" name="Avatar3"/>`;
  return <CodeBlock codeText={codeText} />;
};

function Avatar() {
  const [showCode, setShowCode] = useState(false);

  const makeActive = {
    color: "black",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };

  return (
    <div className="avatar_main">
      <h1>Avatar</h1>
      <p className="desc">
        Customize user profiles with images avatars, adding a personal touch to
        your platform.
      </p>
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
      {!showCode ? <AvatarPreview /> : <CodePreview />}
    </div>
  );
}

export default Avatar;
