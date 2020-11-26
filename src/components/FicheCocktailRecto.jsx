import React from "react";
import "./Style/FicheCocktail.scss";
import PropTypes from "prop-types";

function FicheCocktailRecto({
  cocktailName,
  instructions,
  ingredients,
  handleClick,
  isRotate,
  black,
}) {
  return (
    <div
      role="button"
      tabIndex="0"
      className={`fiche-cocktail ${isRotate ? "verso" : "recto"}
      ${black ? "blackCard" : null}`}
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
          {ingredients.map((ingredient, index) => (
            <li key={`ing${index}`}>
              <input type="checkbox" />
              {ingredient.name}
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
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      good: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  isRotate: PropTypes.bool.isRequired,
  black: PropTypes.bool,
};

FicheCocktailRecto.defaultProps = {
  black: false,
};

export default FicheCocktailRecto;
