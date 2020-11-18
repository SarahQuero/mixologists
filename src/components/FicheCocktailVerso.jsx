import React from "react";
import "./Style/FicheCocktail.scss";
import PropTypes from "prop-types";

function FicheCocktailVerso({
  cocktailName,
  cocktailPicture,
  handleClick,
  isRotate,
  black,
}) {
  return (
    <div
      role="button"
      tabIndex="0"
      className={`fiche-cocktail ${!isRotate ? "verso" : "recto"}
      ${black ? "blackCard" : null}`}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div className="fiche-cocktail-title verso">
        <div
          className="fiche-cocktail-image"
          style={{ backgroundImage: `URL(${cocktailPicture})` }}
        />
        <div className="fiche-cocktail-name">
          <h1>{cocktailName}</h1>
        </div>
      </div>
    </div>
  );
}

FicheCocktailVerso.propTypes = {
  cocktailName: PropTypes.string.isRequired,
  cocktailPicture: PropTypes.string.isRequired,
  isRotate: PropTypes.bool,
  black: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};
FicheCocktailVerso.defaultProps = {
  isRotate: false,
  black: false,
};

export default FicheCocktailVerso;
