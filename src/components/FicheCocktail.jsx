import React from "react";
import "./Style/FicheCocktail.scss";
import PropTypes from "prop-types";

function FicheCocktail({
  cocktailName,
  instructions,
  ingredient1,
  ingredient2,
}) {
  return (
    <div className="fiche-cocktail">
      <h1>{cocktailName}</h1>
      <p>
        Recipe : <br /> {instructions}
      </p>
      <ul>
        <li>{ingredient1}</li>
        <li>{ingredient2}</li>
      </ul>
    </div>
  );
}

FicheCocktail.propTypes = {
  cocktailName: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  ingredient1: PropTypes.string.isRequired,
  ingredient2: PropTypes.string.isRequired,
};

export default FicheCocktail;
