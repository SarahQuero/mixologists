import React from "react";
import "./Style/FicheCocktail.scss";
import PropTypes from "prop-types";

function FicheCocktailVerso({ cocktailName, handleClick, isRotate }) {
  return (
    <div
      role="button"
      tabIndex="0"
      className={`fiche-cocktail ${!isRotate ? "verso" : "recto"}`}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div className="fiche-cocktail-title">
        <h1>{cocktailName}</h1>
        <img
          src="https://cdn.discordapp.com/attachments/771314582396207117/773195918655881226/Sans_titre.png"
          alt="icone cocktail"
        />
      </div>
    </div>
  );
}

FicheCocktailVerso.propTypes = {
  cocktailName: PropTypes.string.isRequired,
  isRotate: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};
FicheCocktailVerso.defaultProps = {
  isRotate: false,
};

export default FicheCocktailVerso;
