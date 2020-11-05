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
        <p>
          {" "}
          Le pisco sour est un cocktail t'ypique de la cuisine sud-américaine à
          base de pisco et de jus de citron vert. Le nom de cette boisson
          provient à la fois du pisco, l'alcool utilisé et sour, mot anglais en
          référence à lacidité du jus de citron.
        </p>
      </div>
      <div className="fiche-cocktail-recipe">
        <p>
          Recipe : <br /> {instructions}
        </p>
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
