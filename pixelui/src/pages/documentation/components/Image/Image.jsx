import React, { useState } from "react";
import "./Image.css";
import CodeBlock from "../../../../components/CodeBlock/CodeBlock";

import img01 from "../../../../assets/imageType01.jpg";
import img02 from "../../../../assets/imageType02.jpg";

const ImageComponent = ({ imageType, img }) => {
  switch (imageType) {
    case "img-responsive":
      return <img className="img_responsive" src={img} alt="Sample" />;
    case "img-square":
      return <img className="img_square" src={img} alt="Sample" />;
    case "img-round":
      return <img className="img_round" src={img} alt="Sample" />;
    case "img-squircle":
      return <img className="img_squircle" src={img} alt="Sample" />;
  }
};

const ImagesPreview = () => {
  return (
    <div className="images">
      <div>
        <h2 className="image_heading_text">Responsive Image</h2>
        <div className="image_box">
          <div className="image_wrapper">
            <ImageComponent imageType="img-responsive" img={img01} />
            <p>Responsive Image</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="image_heading_text">Image Radius</h2>
        <div className="image_box">
          <div className="image_wrapper">
            <ImageComponent imageType="img-square" img={img02} />
            <p>Square</p>
          </div>
          <div className="image_wrapper">
            <ImageComponent imageType="img-squircle" img={img02} />
            <p>Squircle</p>
          </div>
          <div className="image_wrapper">
            <ImageComponent imageType="img-round" img={img02} />
            <p>Round</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodePreview = () => {
  const codeText = `  // Responsive Image
  <ImageComponent imageType="img-responsive" img={...} />

  // Image Radius - imageType: [img-square, img-squircle, img-round]
  <ImageComponent imageType="img-square" img={...} />
  <ImageComponent imageType="img-squircle" img={...} />
  <ImageComponent imageType="img-round" img={...} />`;
  return <CodeBlock codeText={codeText} />;
};

function Image() {
  const [showCode, setShowCode] = useState(false);

  const makeActive = {
    color: "black",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };

  return (
    <div>
      <h1>Image</h1>
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
      {!showCode ? <ImagesPreview /> : <CodePreview />}
    </div>
  );
}

export default Image;
