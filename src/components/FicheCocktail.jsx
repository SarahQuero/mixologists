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
    const { cocktail, infoIng, infoMsr } = this.props;
    console.log(cocktail);
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
          ingredients={infoIng}
          strMeasures={infoMsr}
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
  }).isRequired,
  infoIng: PropTypes.shape.isRequired,
  infoMsr: PropTypes.shape.isRequired,
};

export default FicheCocktail;
