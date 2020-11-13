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
      <>
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
          ingredient4={cocktail.strIngredient4}
          strMeasure1={cocktail.strMeasure1}
          strMeasure2={cocktail.strMeasure2}
          strMeasure3={cocktail.strMeasure3}
          strMeasure4={cocktail.strMeasure4}
          handleClick={handleClick}
          isRotate={isRotate}
        />
      </>
    );
  }
}

FicheCocktail.propTypes = {
  cocktail: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strIngredient1: PropTypes.string.isRequired,
    strIngredient2: PropTypes.string.isRequired,
    strIngredient3: PropTypes.string.isRequired,
    strIngredient4: PropTypes.string.isRequired,
    strMeasure1: PropTypes.string.isRequired,
    strMeasure2: PropTypes.string.isRequired,
    strMeasure3: PropTypes.string.isRequired,
    strMeasure4: PropTypes.string.isRequired,
  }).isRequired,
};

export default FicheCocktail;
