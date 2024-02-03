import React, { useState } from "react";
import "./Button.css";

import { HiArrowSmallRight } from "react-icons/hi2";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiSolidCloudUpload } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { BsFillCameraFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { LiaEditSolid } from "react-icons/lia";
import { FiSearch } from "react-icons/fi";
import CodeBlock from "../../../../components/CodeBlock/CodeBlock";

const ButtonComponent = ({ type, color, radius, children, btnText }) => {
  switch (type) {
    case "btn-basic":
      return (
        <div className={`btn_basic color_${color} btn_radius_${radius}`}>
          {btnText}
        </div>
      );
    case "btn-link":
      return (
        <div className={`btn_link btn_link_${color} btn_radius_${radius}`}>
          {children && <span>{children}</span>}
          <div>{btnText}</div>
        </div>
      );
    case "btn-text-icon":
      return (
        <div className={`btn_text_icon color_${color} btn_radius_${radius}`}>
          {children && <span>{children}</span>}
          <div>{btnText}</div>
        </div>
      );
    case "btn-icon":
      return (
        <div className={`btn_icon color_${color} btn_radius_${radius}`}>
          {children}
        </div>
      );
    case "btn-float":
      return (
        <div className={`btn_float color_${color} btn_radius_${radius}`}>
          {children}
        </div>
      );
    default:
      break;
  }
};

const ButtonPreview = () => {
  return (
    <div className="button">
      <div>
        <h2 className="button_heading_text">Button Radius</h2>
        <div className="button_box">
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-basic"
              color="default"
              radius="small"
              btnText="Button"
            />
            <p>small</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-basic"
              color="default"
              radius="medium"
              btnText="Button"
            />
            <p>medium</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-basic"
              color="default"
              radius="large"
              btnText="Button"
            />
            <p>large</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-basic"
              color="default"
              radius="full"
              btnText="Button"
            />
            <p>full</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="button_heading_text">Basic Buttons</h2>
        <div className="button_box">
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-basic"
              color="default"
              radius="medium"
              btnText="Default"
            />
            <p>Default</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-basic"
              color="primary"
              radius="medium"
              btnText="Primary"
            />
            <p>Primary</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-basic"
              color="secondary"
              radius="medium"
              btnText="Secondary"
            />
            <p>Secondary</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-basic"
              color="success"
              radius="medium"
              btnText="Success"
            />
            <p>Success</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-basic"
              color="warning"
              radius="medium"
              btnText="Warning"
            />
            <p>Warning</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-basic"
              color="danger"
              radius="medium"
              btnText="Danger"
            />
            <p>Danger</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="button_heading_text">Link Buttons</h2>
        <div className="button_box">
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-link"
              color="default"
              radius="small"
              btnText="Next Page"
            />
            <p>Default</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-link"
              color="white"
              radius="full"
              btnText="Navigate"
            >
              <HiArrowSmallRight className="btn_icon_style" />
            </ButtonComponent>
            <p>White</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-link"
              color="black"
              radius="full"
              btnText="Open link"
            >
              <BsBoxArrowUpRight className="btn_icon_style" />
            </ButtonComponent>
            <p>Black</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="button_heading_text">Button with Icons</h2>
        <div className="button_box">
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-text-icon"
              color="success"
              btnText="Upload"
              radius="full"
            >
              <BiSolidCloudUpload className="btn_icon_style" />
            </ButtonComponent>
            <p>Upload</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-text-icon"
              color="danger"
              btnText="Delete"
              radius="medium"
            >
              <AiOutlineDelete className="btn_icon_style" />
            </ButtonComponent>
            <p>Delete</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent
              type="btn-text-icon"
              color="primary"
              btnText="Add"
              radius="small"
            >
              <IoAddOutline className="btn_icon_style" />
            </ButtonComponent>
            <p>Add</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="button_heading_text">Only Icons</h2>
        <div className="button_box">
          <div className="button_wrapper">
            <ButtonComponent type="btn-icon" color="secondary" radius="medium">
              <BsFillCameraFill className="btn_icon_style" />
            </ButtonComponent>
            <p>Capture</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent type="btn-icon" color="danger" radius="medium">
              <AiOutlineHeart className="btn_icon_style" />
            </ButtonComponent>
            <p>Like</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent type="btn-icon" color="primary" radius="small">
              <BsBookmark className="btn_icon_style" />
            </ButtonComponent>
            <p>Bookmark</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="button_heading_text">Floating Action Buttons</h2>
        <div className="button_box">
          <div className="button_wrapper">
            <ButtonComponent type="btn-float" color="primary" radius="small">
              <IoAddOutline className="btn_icon_style" />
            </ButtonComponent>
            <p>Add</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent type="btn-float" color="secondary" radius="large">
              <LiaEditSolid className="btn_icon_style" />
            </ButtonComponent>
            <p>Edit</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent type="btn-float" color="danger" radius="full">
              <AiOutlineDelete className="btn_icon_style" />
            </ButtonComponent>
            <p>Delete</p>
          </div>
          <div className="button_wrapper">
            <ButtonComponent type="btn-float" color="warning" radius="medium">
              <FiSearch className="btn_icon_style" />
            </ButtonComponent>
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodePreview = () => {
  const codeText = `  // Button Radius - radius: [small, medium, large, full]
  <ButtonComponent type="btn-basic" color="default" radius="small" btnText="Button"/>
  <ButtonComponent type="btn-basic" color="default" radius="medium" btnText="Button"/>
  <ButtonComponent type="btn-basic" color="default" radius="large" btnText="Button"/>
  <ButtonComponent type="btn-basic" color="default" radius="full" btnText="Button"/>
  
  // Basic Buttons - type: [btn-basic], color: [default, primary, secondary, success, warning, danger]
  <ButtonComponent type="btn-basic" color="default" radius="medium" btnText="Default"/>
  <ButtonComponent type="btn-basic" color="primary" radius="medium" btnText="Primary"/>
  <ButtonComponent type="btn-basic" color="secondary" radius="medium" btnText="Secondary"/>
  <ButtonComponent type="btn-basic" color="success" radius="medium" btnText="Success"/>
  <ButtonComponent type="btn-basic" color="warning" radius="medium" btnText="Warning"/>
  <ButtonComponent type="btn-basic" color="danger" radius="medium" btnText="Danger"/>

  // Link Buttons - type: [btn-link]
  <ButtonComponent type="btn-link" color="default" radius="small" btnText="Next Page"/>
  // Link Button With Icon
  <ButtonComponent type="btn-link" color="white" radius="full" btnText="Navigate">
      <HiArrowSmallRight className="btn_icon_style" /> // Button Icon
  </ButtonComponent>
  <ButtonComponent type="btn-link" color="black" radius="full" btnText="Open link">
      <BsBoxArrowUpRight className="btn_icon_style" /> // Button Icon
  </ButtonComponent>

  // Button with Icons - type: [btn-text-icon]
  <ButtonComponent type="btn-text-icon" color="success" btnText="Upload" radius="full">
      <BiSolidCloudUpload className="btn_icon_style" /> // Button Icon
  </ButtonComponent>
  <ButtonComponent type="btn-text-icon" color="danger" btnText="Delete" radius="medium">
      <AiOutlineDelete className="btn_icon_style" /> // Button Icon
  </ButtonComponent>
  <ButtonComponent type="btn-text-icon" color="primary" btnText="Add" radius="small">
      <IoAddOutline className="btn_icon_style" /> // Button Icon
  </ButtonComponent>

  // Only Icons - type: [btn-icon]
  <ButtonComponent type="btn-icon" color="secondary" radius="medium">
      <BsFillCameraFill className="btn_icon_style" /> // Button Icon
  </ButtonComponent>
  <ButtonComponent type="btn-icon" color="danger" radius="medium">
      <AiOutlineHeart className="btn_icon_style" /> // Button Icon
  </ButtonComponent>
  <ButtonComponent type="btn-icon" color="primary" radius="small">
      <BsBookmark className="btn_icon_style" /> // Button Icon
  </ButtonComponent>

  // Floating Action Buttons - type: [btn-float]
  <ButtonComponent type="btn-float" color="primary" radius="small">
      <IoAddOutline className="btn_icon_style" /> // Button Icon
  </ButtonComponent>
  <ButtonComponent type="btn-float" color="secondary" radius="large">
      <LiaEditSolid className="btn_icon_style" /> // Button Icon
  </ButtonComponent>
  <ButtonComponent type="btn-float" color="danger" radius="full">
      <AiOutlineDelete className="btn_icon_style" /> // Button Icon
  </ButtonComponent>
  <ButtonComponent type="btn-float" color="warning" radius="medium">
      <FiSearch className="btn_icon_style" /> // Button Icon
  </ButtonComponent>`;
  return <CodeBlock codeText={codeText} />;
};

function Button() {
  const [showCode, setShowCode] = useState(false);

  const makeActive = {
    color: "black",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };
  return (
    <div className="button_main">
      <h1>Button</h1>
      <p className="desc">
        Drive user interaction through primary, link, icon, or floating action
        buttons for seamless navigation.
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
      {!showCode ? <ButtonPreview /> : <CodePreview />}
    </div>
  );
}

export default Button;
