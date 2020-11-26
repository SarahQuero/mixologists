import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Style/BoxesCardHome.scss";

function BoxesCardHome({ titleCocktail, imgCocktail }) {
  return (
    <div className="presBoxesCard">
      <h3>{titleCocktail}</h3>
      <div
        style={{ backgroundImage: `url(${imgCocktail})` }}
        className="presBoxesImg"
      />
      <Link to="/Box">
        <button type="button" className="boxesButtonAcces">
          Buy
        </button>
      </Link>
    </div>
  );
}

BoxesCardHome.propTypes = {
  titleCocktail: PropTypes.string.isRequired,
  imgCocktail: PropTypes.string.isRequired,
};

export default BoxesCardHome;
