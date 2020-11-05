import React from "react";
import "./Style/FicheCocktail.scss";
import PropTypes from "prop-types";

function FicheCocktailRecto({
  cocktailName,
  instructions,
  ingredient1,
  ingredient2,
  ingredient3,
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
      <div className="fiche-cocktail-description">
        <h2>Cocktail Description</h2>
        <p>
          {" "}
          A pisco sour is an alcoholic cocktail of Peruvian origin that is
          typical of the cuisines from Peru and Chile. The drink's name comes
          from pisco, which is its base liquor, and the cocktail term sour, in
          reference to sour citrus juice and sweetener components. The Peruvian
          pisco sour uses Peruvian pisco as the base liquor and adds freshly
          squeezed lime juice, simple syrup, ice, egg white, and Angostura
          bitters.
        </p>
      </div>
      <div className="fiche-cocktail-recipe">
        <h2>Recipe</h2>
        <p>{instructions}</p>
        <ul>
          <li>
            <input type="checkbox" />
            {ingredient1}
          </li>
          <li>
            <input type="checkbox" />
            {ingredient2}
          </li>
          <li>
            <input type="checkbox" />
            {ingredient3}
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
  handleClick: PropTypes.func.isRequired,
  isRotate: PropTypes.bool.isRequired,
};

export default FicheCocktailRecto;
