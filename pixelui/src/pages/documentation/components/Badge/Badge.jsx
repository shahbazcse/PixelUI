import React, { useState } from "react";
import "./Badge.css";
import CodeBlock from "../../../../components/CodeBlock/CodeBlock";

import { MdLocalPostOffice } from "react-icons/md";
import { AiFillChrome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

import maleAvatar from "../../../../assets/maleAvatarSample.jpeg";
import femaleAvatar from "../../../../assets/femaleAvatarSample.jpeg";

const BadgeComponent = ({ type, status, img, name, children }) => {
  switch (type) {
    case "avatar-badge":
      return (
        <div className={`avatar_badge ${status}`}>
          <img src={img} alt={name} />
        </div>
      );
    case "icon-badge":
      return <div className="icon_badge">{children}</div>;
  }
};

const BadgePreview = () => {
  return (
    <div className="badge">
      <div>
        <h2 className="badge_heading_text">Badge on Avatars</h2>
        <div className="badge_box">
          <div className="badge_wrapper">
            <BadgeComponent
              type="avatar-badge"
              status="online"
              img={maleAvatar}
              name="Avatar1"
            />
            <p>Online</p>
          </div>
          <div className="badge_wrapper">
            <BadgeComponent
              type="avatar-badge"
              status="busy"
              img={maleAvatar}
              name="Avatar2"
            />
            <p>Away</p>
          </div>
          <div className="badge_wrapper">
            <BadgeComponent
              type="avatar-badge"
              status="dnd"
              img={femaleAvatar}
              name="Avatar3"
            />
            <p>Busy</p>
          </div>
          <div className="badge_wrapper">
            <BadgeComponent
              type="avatar-badge"
              status="offline"
              img={femaleAvatar}
              name="Avatar4"
            />
            <p>Offline</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="badge_heading_text">Badge on Icons</h2>
        <div className="badge_box">
          <div className="badge_wrapper">
            <BadgeComponent type="icon-badge">
              <MdLocalPostOffice className="icon_style" />
            </BadgeComponent>
            <p>Inbox</p>
          </div>
          <div className="badge_wrapper">
            <BadgeComponent type="icon-badge">
              <AiFillChrome className="icon_style" />
            </BadgeComponent>
            <p>Browser</p>
          </div>
          <div className="badge_wrapper">
            <BadgeComponent type="icon-badge">
              <BsFillCartFill className="icon_style" />
            </BadgeComponent>
            <p>Cart</p>
          </div>
          <div className="badge_wrapper">
            <BadgeComponent type="icon-badge">
              <IoMdNotifications className="icon_style" />
            </BadgeComponent>
            <p>Notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodePreview = () => {
  const codeText = `  // Badge on Avatars
  <BadgeComponent type="avatar-badge" status="online" img="https://picsum.photos/200" name="Avatar1"/>
  <BadgeComponent type="avatar-badge" status="busy" img="https://picsum.photos/200" name="Avatar2"/>
  <BadgeComponent type="avatar-badge" status="dnd" img="https://picsum.photos/200" name="Avatar3"/>
  <BadgeComponent type="avatar-badge" status="offline" img="https://picsum.photos/200" name="Avatar4"/>
  
  // Badge on Icons
  <BadgeComponent type="icon-badge">
      <MdLocalPostOffice className="icon_style" /> // Insert Icon Here
  </BadgeComponent>
  <BadgeComponent type="icon-badge">
      <AiFillChrome className="icon_style" /> // Insert Icon Here
  </BadgeComponent>
  <BadgeComponent type="icon-badge">
      <BsFillCartFill className="icon_style" /> // Insert Icon Here
  </BadgeComponent>
  <BadgeComponent type="icon-badge">
      <IoMdNotifications className="icon_style" /> // Insert Icon Here
  </BadgeComponent>`;
  return <CodeBlock codeText={codeText} />;
};

function Badge() {
  const [showCode, setShowCode] = useState(false);

  const makeActive = {
    color: "black",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };

  return (
    <div>
      <h1>Badge</h1>
      <p className="desc">
        Highlight key information or status, offering a visually striking
        way to draw attention to content.
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
      {!showCode ? <BadgePreview /> : <CodePreview />}
    </div>
  );
}

export default Badge;
