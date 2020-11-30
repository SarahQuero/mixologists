import React from "react";
import { Link } from "react-router-dom";
import "./Style/presWorld.scss";

function presWorld() {
  return (
    <>
      <div className="presWorldContainer">
        <h1>Around The World</h1>
        <p>
          Let's travel with us and discover the cocktails from all around the
          World. We have selected for you our best cocktails in countries where
          we've traveled and that we would like to share with you.
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
