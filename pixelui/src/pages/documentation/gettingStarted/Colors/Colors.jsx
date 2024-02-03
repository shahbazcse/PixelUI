import React from "react";
import "./Colors.css";

function Colors() {
  return (
    <div className="colors_main">
      <h1>Colors</h1>
      <p className="desc">
        Infuse vibrancy and meaning into design elements, creating a visually
        appealing and coherent user interface.
      </p>
      <div className="colors">
        <div>
          <h2 className="color_heading_text">Layout</h2>
          <div className="color_box">
            <div className="color_background color_card">
              <p>background</p>
              <p>#FFFFFF</p>
            </div>
            <div className="color_divider color_card">
              <p>divider</p>
              <p>rgba(17, 17, 17, 0.15)</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="color_heading_text">Content</h2>
          <div className="color_box">
            <div className="content1 color_card">
              <p>content1</p>
              <p>#FFFFFF</p>
            </div>
            <div className="content2 color_card">
              <p>content2</p>
              <p>#f4f4f5</p>
            </div>
            <div className="content3 color_card">
              <p>content3</p>
              <p>#e4e4e7</p>
            </div>
            <div className="content4 color_card">
              <p>content4</p>
              <p>#d4d4d8</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="color_heading_text">Base</h2>
          <div className="color_box">
            <div className="color_default color_card">
              <p>default</p>
              <p>#d4d4d8</p>
            </div>
            <div className="color_primary color_card">
              <p>primary</p>
              <p>#006FEE</p>
            </div>
            <div className="color_secondary color_card">
              <p>secondary</p>
              <p>#7828c8</p>
            </div>
            <div className="color_success color_card">
              <p>success</p>
              <p>#17c964</p>
            </div>
            <div className="color_warning color_card">
              <p>warning</p>
              <p>#f5a524</p>
            </div>
            <div className="color_danger color_card">
              <p>danger</p>
              <p>#f31260</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colors;
