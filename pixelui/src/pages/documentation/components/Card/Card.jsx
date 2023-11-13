import React, { useState } from "react";
import "./Card.css";

import { LiaHeartSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { GoAlert } from "react-icons/go";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import smallImg01 from "../../../../assets/small01.jpg";
import smallImg02 from "../../../../assets/small02.jpg";
import smallImg03 from "../../../../assets/small03.jpg";
import smallImg04 from "../../../../assets/small04.jpg";
import mediumImg01 from "../../../../assets/medium01.jpg";
import mediumImg02 from "../../../../assets/medium02.jpg";
import mediumImg03 from "../../../../assets/medium03.jpg";
import mediumImg04 from "../../../../assets/medium04.jpg";
import mediumImg05 from "../../../../assets/medium05.jpg";
import largeImg01 from "../../../../assets/large01.jpg";
import largeImg02 from "../../../../assets/large02.jpg";
import largeImg03 from "../../../../assets/large03.jpg";
import largeImg04 from "../../../../assets/large04.jpg";
import CodeBlock from "../../../../components/CodeBlock/CodeBlock";

const CardComponent = ({
  type,
  cardSize,
  cardRadius,
  cardImg,
  cardLabel,
  cardTheme,
  badgeType,
  badgeText,
  children,
}) => {
  switch (type) {
    case "card-size":
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
          }}
          className={`card_size_${cardSize}`}
        >
          {children}
        </div>
      );
    case "card-radius":
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
          }}
          className={`card_size_${cardSize}  card_radius_${cardRadius}`}
        >
          {children}
        </div>
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
          style={{ backgroundColor: cardTheme }}
        >
          {children}
        </div>
      );
    case "card-vertical":
      return (
        <div className={`card_vertical card_radius_${cardRadius}`}>
          {children}
        </div>
      );
    case "card-horizontal":
      return (
        <div className={`card_horizontal card_radius_${cardRadius}`}>
          {children}
        </div>
      );
    case "card-shadow":
      return (
        <div
          className={`card_shadow ${badgeType} card_size_${cardSize} card_radius_${cardRadius}`}
        >
          {cardImg && <img src={cardImg} alt="sample" className="card_img" />}
          <div>{children}</div>
          <div className="card_label">{cardLabel && <p>{cardLabel}</p>}</div>
        </div>
      );
    default:
      break;
  }
};

const CardPreview = () => {
  return (
    <div className="card">
      <div>
        <h2 className="card_heading_text">Card Size</h2>
        <div className="card_box">
          <div className="card_wrapper">
            <CardComponent type="card-size" cardSize="small">
              cardSize: small
            </CardComponent>
            <p>small</p>
          </div>
          <div className="card_wrapper">
            <CardComponent type="card-size" cardSize="medium">
              cardSize: medium
            </CardComponent>
            <p>medium</p>
          </div>
          <div className="card_wrapper">
            <CardComponent type="card-size" cardSize="large">
              cardSize: large
            </CardComponent>
            <p>large</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="card_heading_text">Card Radius</h2>
        <div className="card_box">
          <div className="card_wrapper">
            <CardComponent
              type="card-radius"
              cardSize="small"
              cardRadius="small"
            >
              cardRadius: small
            </CardComponent>
            <p>small</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-radius"
              cardSize="small"
              cardRadius="medium"
            >
              cardRadius: medium
            </CardComponent>
            <p>medium</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-radius"
              cardSize="small"
              cardRadius="large"
            >
              cardRadius: large
            </CardComponent>
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
              badgeText="On Sale"
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
              badgeText="On Sale"
              cardSize="large"
              cardRadius="large"
              cardImg={largeImg01}
              cardLabel="Product Name"
            ></CardComponent>
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
            <CardComponent
              type="card-text-only"
              cardSize="small"
              cardRadius="small"
              cardTheme="#30344C"
            >
              <h2>Card Title</h2>
              <div>Here are the details of the card.</div>
            </CardComponent>
            <p>small</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-text-only"
              cardSize="medium"
              cardRadius="medium"
              cardTheme="#A186FF"
            >
              <h2>Cookies.</h2>
              <div>
                By using this website you automatically accept that we use
                cookies.
              </div>
              <button onClick={() => {}}>Understood</button>
            </CardComponent>
            <p>medium</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-text-only"
              cardSize="large"
              cardRadius="large"
              cardTheme="#FFFFFF"
            >
              <GoAlert
                style={{ color: "red", height: "2rem", width: "2rem" }}
              />
              <div
                style={{
                  color: "#6B7280",
                  marginTop: "4px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div>
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </div>
                <button
                  style={{
                    padding: "10px 12px",
                    color: "white",
                    backgroundColor: "#DC2626",
                    borderRadius: "4px",
                  }}
                >
                  Deactivate
                </button>
                <button
                  style={{
                    padding: "10px 12px",
                    border: "1px solid gray",
                    borderRadius: "4px",
                  }}
                >
                  Cancel
                </button>
              </div>
            </CardComponent>
            <p>large</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="card_heading_text">Vertical/Horizontal Cards</h2>
        <div className="card_box">
          <div className="card_wrapper">
            <CardComponent type="card-vertical" cardRadius="small">
              <div className="card_vertical_sample">
                <img src={mediumImg05} alt="Sample" />
                <div className="details">
                  <h2>Skin Care Products Kit</h2>
                  <div className="price">
                    <span style={{ color: "navy" }}>Rs. 999</span>
                    <span style={{ textDecoration: "line-through" }}>
                      Rs. 1599
                    </span>
                    <span style={{ color: "gray" }}>Free Shipping</span>
                  </div>
                  <div className="rating">
                    <span>4.2</span>{" "}
                    <span style={{ color: "orange" }}>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </span>
                  </div>
                  <div className="buttons">
                    <button className="buynow">Buy Now</button>
                    <button className="cart">
                      <AiOutlineShoppingCart /> Add To Cart
                    </button>
                    <button className="wishlist">
                      <LiaHeartSolid />
                    </button>
                  </div>
                </div>
              </div>
            </CardComponent>
            <p>Vertical Card</p>
          </div>
          <div className="card_wrapper">
            <CardComponent type="card-horizontal" cardRadius="small">
              <div className="card_horizontal_sample">
                <div className="details">
                  <h2>Skin Care Products Kit</h2>
                  <div className="price">
                    <span style={{ color: "navy" }}>Rs. 999</span>
                    <span style={{ textDecoration: "line-through" }}>
                      Rs. 1599
                    </span>
                    <span style={{ color: "gray" }}>Free Shipping</span>
                  </div>
                  <div className="rating">
                    <span>4.2</span>{" "}
                    <span style={{ color: "orange" }}>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </span>
                  </div>
                  <div className="buttons">
                    <button className="buynow">Buy</button>
                    <button className="cart">
                      <AiOutlineShoppingCart /> Cart
                    </button>
                    <button className="wishlist">
                      <LiaHeartSolid />
                    </button>
                  </div>
                </div>
                <div className="img_rating">
                  <img src={mediumImg05} alt="Sample" />
                </div>
              </div>
            </CardComponent>
            <p>Horizontal Card</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="card_heading_text">Cards with shadow</h2>
        <div className="card_box">
          <div className="card_wrapper">
            <CardComponent
              type="card-shadow"
              badgeType="icon-badge"
              cardSize="small"
              cardRadius="small"
              cardImg={smallImg03}
              cardLabel="Product Name"
            >
              <LiaHeartSolid className="card_icon_style" />
            </CardComponent>
            <p>small</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-shadow"
              badgeType="icon-badge"
              cardSize="medium"
              cardRadius="medium"
              cardImg={mediumImg03}
              cardLabel="Product Name"
            >
              <LiaHeartSolid className="card_icon_style" />
            </CardComponent>
            <p>medium</p>
          </div>
          <div className="card_wrapper">
            <CardComponent
              type="card-shadow"
              badgeType="icon-badge"
              cardSize="large"
              cardRadius="large"
              cardImg={largeImg03}
              cardLabel="Product Name"
            >
              <LiaHeartSolid className="card_icon_style" />
            </CardComponent>
            <p>large</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodePreview = () => {
  const codeText = `  // Cards with Badges - type: [card-badge], badgeType: [icon-badge, label-badge], cardSize: [small, medium, large], cardRadius: [small, medium, large]
  <CardComponent type="card-badge" badgeType="icon-badge" cardSize="small" cardRadius="small" cardImg={...} cardLabel="">
      <LiaHeartSolid className="card_icon_style" />
  </CardComponent>
  <CardComponent type="card-badge" badgeType="label-badge" badgeText="On Sale" cardSize="medium" cardRadius="medium" cardImg={...} cardLabel="">
  </CardComponent>
  <CardComponent type="card-badge" badgeType="label-badge" badgeText="On Sale" cardSize="large" cardRadius="large" cardImg={...} cardLabel="">
  </CardComponent>

  // Cards with Dismiss - type: [card-dismiss]
  <CardComponent type="card-dismiss" cardSize="small" cardRadius="small" cardImg={...}>
      // Insert Content Here
  </CardComponent>
  <CardComponent type="card-dismiss" cardSize="medium" cardRadius="medium" cardImg={...}>
      // Insert Content Here
  </CardComponent>
  <CardComponent type="card-dismiss" cardSize="large" cardRadius="large" cardImg={...}>
      // Insert Content Here
  </CardComponent>

  // Cards with Text overlay - type: [card-text-overlay]
  <CardComponent type="card-text-overlay" cardSize="small" cardRadius="small" cardImg={...}>
      // Insert Content Here
  </CardComponent>
  <CardComponent type="card-text-overlay" cardSize="medium" cardRadius="medium" cardImg={...}>
      // Insert Content Here
  </CardComponent>
  <CardComponent type="card-text-overlay" cardSize="large" cardRadius="large" cardImg={...}>
      // Insert Content Here
  </CardComponent>

  // Text Only Cards - type: [card-text-only], cardTheme: [color]
  <CardComponent type="card-text-only" cardSize="small" cardRadius="small" cardTheme="">
      // Insert Content Here
  </CardComponent>
  <CardComponent type="card-text-only" cardSize="medium" cardRadius="medium" cardTheme="">
      // Insert Content Here
  </CardComponent>
  <CardComponent type="card-text-only" cardSize="large" cardRadius="large" cardTheme="">
      // Insert Content Here
  </CardComponent>

  // Vertical/Horizontal Cards - type: [card-vertical, card-horizontal]
  <CardComponent type="card-vertical" cardRadius="small">
      // Insert Content Here
  </CardComponent>
  <CardComponent type="card-horizontal" cardRadius="small">
      // Insert Content Here
  </CardComponent>

  // Cards with shadow - type: [card-shadow]
  <CardComponent type="card-shadow" badgeType="icon-badge" cardSize="small" cardRadius="small" cardImg={...} cardLabel="">
      <LiaHeartSolid className="card_icon_style" />
  </CardComponent>
  <CardComponent type="card-shadow" badgeType="icon-badge" cardSize="medium" cardRadius="medium" cardImg={...} cardLabel="">
      <LiaHeartSolid className="card_icon_style" />
  </CardComponent>
  <CardComponent type="card-shadow" badgeType="icon-badge" cardSize="large" cardRadius="large" cardImg={...} cardLabel="">
      <LiaHeartSolid className="card_icon_style" />
  </CardComponent>`;
  return <CodeBlock codeText={codeText} />;
};

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
      <p className="desc">
        Organize and present content in versatile containers, enhancing visual
        appeal and structuring information effectively.
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
      {!showCode ? <CardPreview /> : <CodePreview />}
    </div>
  );
}

export default Card;
