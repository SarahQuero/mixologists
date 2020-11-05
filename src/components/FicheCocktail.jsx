import React from "react";
import PropTypes from "prop-types";
import FicheCocktailVerso from "./FicheCocktailVerso";
import FicheCocktailRecto from "./FicheCocktailRecto";
import "./Style/FicheCocktail.scss";

class FicheCocktail extends React.Component {
  state = {
    isRotate: false,
  };

  handleClick = () => {
    const { isRotate } = this.state;
    this.setState({ isRotate: !isRotate });
  };

  render() {
    const { cocktail } = this.props;
    const { isRotate } = this.state;
    const { handleClick } = this;
    return (
      <div className="fiche-cocktail-container">
        <div className="fiche-cocktail-main">
          <FicheCocktailVerso
            cocktailName={cocktail.strDrink}
            cocktailPicture={cocktail.strDrinkThumb}
            handleClick={handleClick}
            isRotate={isRotate}
          />
          <FicheCocktailRecto
            cocktailName={cocktail.strDrink}
            instructions={cocktail.strInstructions}
            ingredient1={cocktail.strIngredient1}
            ingredient2={cocktail.strIngredient2}
            ingredient3={cocktail.strIngredient3}
            handleClick={handleClick}
            isRotate={isRotate}
          />
        </div>
      </div>
    );
  }
}

FicheCocktail.propTypes = {
  cocktail: PropTypes.string.isRequired,
};

export default FicheCocktail;
