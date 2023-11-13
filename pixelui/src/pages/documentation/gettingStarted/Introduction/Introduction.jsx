import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div>
      <h1>Introduction</h1>
      <p className="desc">
        Welcome to
        <span className="introduction_logo">
          Pixel<span>UI</span>
        </span>
      </p>
      <div className="introduction_content">
        <p>
          A toolkit designed to empower developers and designers in creating
          seamless and stunning user interfaces. Our library boasts an array of
          meticulously crafted components, each meticulously designed to enhance
          the visual appeal and functionality of your web projects. Dive into a
          world of possibilities with our diverse range of components.
        </p>
        <p>
          The <span className="para_style">Avatar component</span> allows you to
          personalize user profiles effortlessly, while our{" "}
          <span className="para_style">Alert</span> and{" "}
          <span className="para_style">Badge</span> components provide dynamic
          and attention-grabbing notifications. Elevate your user experience
          with Badge overlays on Icons and Avatars, ensuring your content stands
          out with flair.
        </p>
        <p>
          Crafting engaging interfaces is a breeze with our extensive collection
          of <span className="para_style">Buttons</span>. Whether you opt for
          the clean and classic Primary button, a stylish Link button, or the
          interactive Icon Button and Floating Action Button, you'll find the
          perfect match for your design needs.
        </p>
        <p>
          Take your UI to the next level with our{" "}
          <span className="para_style">Card components</span>. From Cards with
          Badges to those featuring dismiss functionality, text overlays, and
          shadow effects, our cards provide a canvas for creative expression.
          Choose from vertical or horizontal layouts, and explore options like
          Text-only Cards or Cards with responsive and round images.
        </p>
        <p>
          Emphasize content hierarchy with our finely tuned{" "}
          <span className="para_style">Headings</span> and{" "}
          <span className="para_style">Text components</span>. Integrate
          compelling <span className="para_style">Responsive Images</span>,
          ensuring responsiveness for a seamless viewing experience across
          devices. Our library is designed to give you the flexibility to
          implement unique and captivating design elements effortlessly.
        </p>
        <p>
          Explore the endless possibilities of{" "}
          <span style={{ fontWeight: "bold", letterSpacing: "0.5px" }}>PixelUI</span>, where innovation
          meets simplicity. Elevate your web development journey and bring your
          vision to life with our thoughtfully curated components.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
