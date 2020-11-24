import React from "react";
import PropTypes from "prop-types";
import "./Style/Box.scss";

function BoxCard({ boxImg, boxTitle, yes }) {
  return (
    <div className="BoxContainer">
      <h3>{boxTitle}</h3>
      <div className="BoxDescContainer">
        <div
          className="BoxImg"
          style={{
            backgroundImage: `url(${boxImg})`,
          }}
        />
        <div className="BoxDesc">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <button type="button" onClick={yes}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

BoxCard.propTypes = {
  boxImg: PropTypes.string.isRequired,
  boxTitle: PropTypes.string.isRequired,
  yes: PropTypes.func.isRequired,
};

export default BoxCard;
