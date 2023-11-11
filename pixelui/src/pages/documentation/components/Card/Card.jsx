import React, { useState } from "react";
import "./Card.css";

import { LiaHeartSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";

import smallImg01 from "../../../../assets/small01.jpg";
import smallImg02 from "../../../../assets/small02.jpg";
import smallImg03 from "../../../../assets/small03.jpg";
import smallImg04 from "../../../../assets/small04.jpg";
import mediumImg01 from "../../../../assets/medium01.jpg";
import mediumImg02 from "../../../../assets/medium02.jpg";
import mediumImg03 from "../../../../assets/medium03.jpg";
import mediumImg04 from "../../../../assets/medium04.jpg";
import largeImg01 from "../../../../assets/large01.jpg";
import largeImg02 from "../../../../assets/large02.jpg";
import largeImg03 from "../../../../assets/large03.jpg";
import largeImg04 from "../../../../assets/large04.jpg";

const CardComponent = ({
  type,
  cardSize,
  cardRadius,
  cardImg,
  cardLabel,
  badgeType,
  badgeText,
  children,
}) => {
  switch (type) {
    case "card-size":
      return <div className={`card_size_${cardSize}`}></div>;
    case "card-radius":
      return (
        <div
          className={`card_size_${cardSize}  card_radius_${cardRadius}`}
        ></div>
      );
    case "card-badge":
      return (
        <div
          className={`${badgeType} card_size_${cardSize} card_radius_${cardRadius}`}
        >
          {cardImg && <img src={cardImg} alt="sample" className="card_img" />}
          <div>{children}</div>
          <div className="card_label">{cardLabel && <p>{cardLabel}</p>}</div>
        </div>
      );
    case "card-dismiss":
      return (
        <div
          className={`card_dismiss card_size_${cardSize} card_radius_${cardRadius}`}
        >
          {cardImg && <img src={cardImg} alt="sample" className="card_img" />}
          <div className="dismiss_wrapper">
            <IoClose className="dismiss_icon" />
          </div>
          <div className="card_label">{children && <p>{children}</p>}</div>
        </div>
      );
    case "card-text-overlay":
      return (
        <div
          className={`card_text_overlay card_size_${cardSize} card_radius_${cardRadius}`}
        >
          {cardImg && <img src={cardImg} alt="sample" className="card_img" />}
          <div className="card_label">{children && <p>{children}</p>}</div>
        </div>
      );
    case "card-text-only":
      return (
        <div
          className={`card_text_only card_size_${cardSize} card_radius_${cardRadius}`}
        ></div>
      );
    case "card-vertical":
      return (
        <div
          className={`card_vertical card_size_${cardSize} card_radius_${cardRadius}`}
        ></div>
      );
    case "card-horizontal":
      return (
        <div
          className={`card_horizontal card_size_${cardSize} card_radius_${cardRadius}`}
        ></div>
      );
    case "card-shadow":
      return (
        <div
          className={`card_shadow card_size_${cardSize} card_radius_${cardRadius}`}
        ></div>
      );
  }
};

const CardPreview = () => {
  return (
    <div className="card">
      <div>
        <h2 className="card_heading_text">Card Size</h2>
        <div className="card_box">
          <div className="card_wrapper">
            <CardComponent type="card-badge" cardSize="small" />
            <p>small</p>
          </div>
          <div className="card_wrapper">
            <CardComponent type="card-badge" cardSize="medium" />
            <p>medium</p>
          </div>
          <div className="card_wrapper">
            <CardComponent type="card-badge" cardSize="large" />
            <p>large</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="card_heading_text">Card Radius</h2>
        <div className="card_box">
          <div className="card_wrapper">
            <CardComponent
              type="card-badge"
              cardSize="small"
              cardRadius="small"
            />
            <p>small</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-badge"
              cardSize="small"
              cardRadius="medium"
            />
            <p>medium</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-badge"
              cardSize="small"
              cardRadius="large"
            />
            <p>large</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="card_heading_text">Cards with Badges</h2>
        <div className="card_box">
          <div className="card_wrapper">
            <CardComponent
              type="card-badge"
              badgeType="icon-badge"
              cardSize="small"
              cardRadius="small"
              cardImg={smallImg01}
              cardLabel="Product Name"
            >
              <LiaHeartSolid className="card_icon_style" />
            </CardComponent>
            <p>small</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-badge"
              badgeType="label-badge"
              badgeText="New"
              cardSize="medium"
              cardRadius="medium"
              cardImg={mediumImg01}
              cardLabel="Product Name"
            ></CardComponent>
            <p>medium</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-badge"
              badgeType="label-badge"
              badgeText="New"
              cardSize="large"
              cardRadius="large"
              cardImg={largeImg01}
              cardLabel="Product Name"
            />
            <p>large</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="card_heading_text">Cards with Dismiss</h2>
        <div className="card_box">
          <div className="card_wrapper">
            <CardComponent
              type="card-dismiss"
              cardSize="small"
              cardRadius="small"
              cardImg={smallImg02}
            >
              Product Name
            </CardComponent>
            <p>small</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-dismiss"
              cardSize="medium"
              cardRadius="medium"
              cardImg={mediumImg02}
            >
              Product Name
            </CardComponent>
            <p>medium</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-dismiss"
              cardSize="large"
              cardRadius="large"
              cardImg={largeImg02}
            >
              Product Name
            </CardComponent>
            <p>large</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="card_heading_text">Cards with Text overlay</h2>
        <div className="card_box">
          <div className="card_wrapper">
            <CardComponent
              type="card-text-overlay"
              cardSize="small"
              cardRadius="small"
              cardImg={smallImg04}
            >
              Think less. Feel more.
            </CardComponent>
            <p>small</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-text-overlay"
              cardSize="medium"
              cardRadius="medium"
              cardImg={mediumImg04}
            >
              “It does not do to dwell on dreams and forget to live.”
              <p>~ J.K. Rowling</p>
            </CardComponent>
            <p>medium</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-text-overlay"
              cardSize="large"
              cardRadius="large"
              cardImg={largeImg04}
            >
              “So, this is my life. And I want you to know that I am both happy
              and sad and I'm still trying to figure out how that could be.”
              <p>~ Stephen Chbosky</p>
            </CardComponent>
            <p>large</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="card_heading_text">Text Only Cards</h2>
        <div className="card_box">
          <div className="card_wrapper">
            {/* Card Component */}
            <p>Mini Card</p>
          </div>
          <div className="card_wrapper">
            {/* Card Component */}
            <p>Small Card</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="card_heading_text">Vertical/Horizontal Cards</h2>
        <div className="card_box">
          <div className="card_wrapper">
            {/* Card Component */}
            <p>Mini Card</p>
          </div>
          <div className="card_wrapper">
            {/* Card Component */}
            <p>Small Card</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="card_heading_text">Cards with shadow</h2>
        <div className="card_box">
          <div className="card_wrapper">
            {/* Card Component */}
            <p>Mini Card</p>
          </div>
          <div className="card_wrapper">
            {/* Card Component */}
            <p>Small Card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodePreview = () => {};

function Card() {
  const [showCode, setShowCode] = useState(false);

  const makeActive = {
    color: "black",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };
  return (
    <div>
      <h1>Card</h1>
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
      {!showCode ? <CardPreview /> : <CodePreview />}
    </div>
  );
}

export default Card;
