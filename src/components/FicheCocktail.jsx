import React from "react";
import "./Style/FicheCocktail.scss";
import PropTypes from "prop-types";

function FicheCocktail({
  cocktailName,
  instructions,
  ingredient1,
  ingredient2,
  ingredient3,
}) {
  return (
    <div className="fiche-cocktail">
      <div className="fiche-cocktail-title">
        <h1>{cocktailName}</h1>
        <img
          src="https://cdn.discordapp.com/attachments/771314582396207117/773195918655881226/Sans_titre.png"
          alt="icone cocktail"
        />
      </div>
      <div className="fiche-cocktail-description">
        <p>
          {" "}
          Le pisco sour est un cocktail typique de la cuisine sud-américaine à
          base de pisco et de jus de citron vert. Le nom de cette boisson
          provient à la fois du pisco, lalcool utilisé et sour, mot anglais en
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

FicheCocktail.propTypes = {
  cocktailName: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  ingredient1: PropTypes.string.isRequired,
  ingredient2: PropTypes.string.isRequired,
  ingredient3: PropTypes.string.isRequired,
};

export default FicheCocktail;
