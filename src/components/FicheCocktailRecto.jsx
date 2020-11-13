import React from "react";
import "./Style/FicheCocktail.scss";
import PropTypes from "prop-types";

function FicheCocktailRecto({
  cocktailName,
  instructions,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
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
          <li>
            <input type="checkbox" />
            {strMeasure1} {ingredient1}
          </li>
          <li>
            <input type="checkbox" />
            {strMeasure2} {ingredient2}
          </li>
          <li>
            <input type="checkbox" />
            {strMeasure3} {ingredient3}
          </li>
          <li>
            <input type="checkbox" />
            {strMeasure4} {ingredient4}
          </li>
        </ul>
      </div>
    </div>
  );
}

FicheCocktailRecto.propTypes = {
  cocktailName: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  ingredient1: PropTypes.string.isRequired,
  ingredient2: PropTypes.string.isRequired,
  ingredient3: PropTypes.string.isRequired,
  ingredient4: PropTypes.string.isRequired,
  strMeasure1: PropTypes.string.isRequired,
  strMeasure2: PropTypes.string.isRequired,
  strMeasure3: PropTypes.string.isRequired,
  strMeasure4: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isRotate: PropTypes.bool.isRequired,
};

export default FicheCocktailRecto;
