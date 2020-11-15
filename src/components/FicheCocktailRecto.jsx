import React from "react";
import "./Style/FicheCocktail.scss";
import PropTypes from "prop-types";

function FicheCocktailRecto({
  cocktailName,
  instructions,
  cocktail,
  handleClick,
  isRotate,
}) {
  return (
    <div
      role="button"
      tabIndex="0"
      className={`fiche-cocktail ${isRotate ? "verso" : "recto"}`}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div className="fiche-cocktail-title recto">
        <h1>{cocktailName}</h1>
        <img
          className="fiche-cocktail-icone"
          src="https://cdn.discordapp.com/attachments/771314582396207117/773195918655881226/Sans_titre.png"
          alt="icone cocktail"
        />
      </div>
      <div className="fiche-cocktail-recipe">
        <h2>Recipe</h2>
        <p>{instructions}</p>
      </div>
      <div className="fiche-cocktail-ingredient">
        <h2>Ingredients</h2>
        <ul>
          {cocktail.ingCock.map((ingredient) => (
            <li key={ingredient.name}>
              <input type="checkbox" />
              {ingredient.name}
            </li>
          ))}
        </ul>
        <ul>
          {cocktail.infoMsr.map((strMeasure) => (
            <li key={strMeasure.name}>
              <input type="checkbox" />
              {strMeasure.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

FicheCocktailRecto.propTypes = {
  cocktailName: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  cocktail: PropTypes.shape({
    ingCock: PropTypes.shape.isRequired,
    infoMsr: PropTypes.shape.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  isRotate: PropTypes.bool.isRequired,
};

export default FicheCocktailRecto;
