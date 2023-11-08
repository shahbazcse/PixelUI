import React, { useState } from "react";
import "./Button.css";

import { HiArrowSmallRight } from "react-icons/hi2";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiSolidCloudUpload } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";

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
      return <div className={`btn_icon`}></div>;
    case "btn-float":
      return <div className={`btn_float`}></div>;
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
              <AiFillDelete className="btn_icon_style" />
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
            {/* Component */}
            <p>Capture</p>
          </div>
          <div className="button_wrapper">
            {/* Component */}
            <p>Like</p>
          </div>
          <div className="button_wrapper">
            {/* Component */}
            <p>Bookmark</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="button_heading_text">Floating Action Buttons</h2>
        <div className="button_box">
          <div className="button_wrapper">
            {/* Component */}
            <p>Add</p>
          </div>
          <div className="button_wrapper">
            {/* Component */}
            <p>Edit</p>
          </div>
          <div className="button_wrapper">
            {/* Component */}
            <p>Delete</p>
          </div>
          <div className="button_wrapper">
            {/* Component */}
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodePreview = () => {};

function Button() {
  const [showCode, setShowCode] = useState(false);

  const makeActive = {
    color: "black",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };
  return (
    <div>
      <h1>Button</h1>
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
      {!showCode ? <ButtonPreview /> : <CodePreview />}
    </div>
  );
}

export default Button;
