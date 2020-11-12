import React from "react";
import { Link } from "react-router-dom";
import "./Style/presWorld.scss";

function presWorld() {
  return (
    <>
      <div className="presWorldContainer">
        <h1>Around The World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          libero optio harum voluptatem a dolorem, reprehenderit odio neque
          consequuntur eum possimus impedit voluptatum soluta deleniti nemo
          labore obcaecati vitae atque!
        </p>
        <div className="presWorldImgContainer">
          <div className="presWorldImg" />
        </div>
        <div className="presWorldButtonContainer">
          <Link to="/World">
            <button type="button" className="presWorldButton">
              Discover now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default presWorld;
