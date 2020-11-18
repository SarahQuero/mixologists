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
    const { cocktail, infoIng, black } = this.props;
    const { isRotate } = this.state;
    const { handleClick } = this;
    return (
      <>
        <FicheCocktailVerso
          cocktailName={cocktail.strDrink}
          cocktailPicture={cocktail.strDrinkThumb}
          handleClick={handleClick}
          isRotate={isRotate}
          black={black}
        />
        <FicheCocktailRecto
          cocktailName={cocktail.strDrink}
          instructions={cocktail.strInstructions}
          ingredients={infoIng}
          handleClick={handleClick}
          isRotate={isRotate}
          black={black}
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
  }).isRequired,
  infoIng: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      good: PropTypes.bool.isRequired,
    })
  ).isRequired,
  black: PropTypes.bool,
};

FicheCocktail.defaultProps = {
  black: false,
};

export default FicheCocktail;
