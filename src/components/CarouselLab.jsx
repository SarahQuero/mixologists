import React from "react";
import PropTypes from "prop-types";
import FicheCocktail from "./FicheCocktail";
import "./Style/CarouselLab.scss";

class CarouselLab extends React.Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0,
    };
    this.plusSlide = this.plusSlide.bind(this);
  }

  plusSlide = (u) => {
    const { slideIndex } = this.state;
    const { cocktailList } = this.props;
    let n = u;
    n += slideIndex;
    if (n > cocktailList.length - 1) {
      n = 0;
    } else if (n < 0) {
      n = cocktailList.length - 1;
    }
    this.setState({
      slideIndex: n,
    });
  };

  render() {
    const { slideIndex } = this.state;
    const { cocktailList, getCocktail, chooseCocktail } = this.props;
    return (
      <div className="carouselContainer">
        <button type="button" onClick={getCocktail} className="buttonRandom">
          Random Cocktail
        </button>
        <div className="carouselCocktailContainer">
          <span
            role="button"
            className="prev"
            tabIndex="0"
            onKeyDown={() => this.plusSlide(-1)}
            onClick={() => this.plusSlide(-1)}
          >
            &#10094;
          </span>
          {cocktailList.map((el, index) => (
            <div
              key={el.idDrink}
              style={{ display: index === slideIndex ? "block" : "none" }}
            >
              <div
                className="cocktailCardContainer"
                style={{ display: index === slideIndex ? "block" : "none" }}
              >
                <FicheCocktail cocktail={el} />
              </div>
              <button type="button" onClick={() => chooseCocktail(index)}>
                Choose this cocktail
              </button>
            </div>
          ))}
          <span
            className="next"
            role="button"
            tabIndex="0"
            onKeyDown={() => this.plusSlide(1)}
            onClick={() => this.plusSlide(1)}
          >
            &#10095;
          </span>
        </div>
      </div>
    );
  }
}

CarouselLab.propTypes = {
  cocktailList: PropTypes.array.isRequired,
  getCocktail: PropTypes.func.isRequired,
  chooseCocktail: PropTypes.func.isRequired,
};
export default CarouselLab;
