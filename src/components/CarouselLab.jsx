import React from "react";
import FicheCocktail from "./FicheCocktail";
import "./Style/CarouselLab.scss";

class CarouselLab extends React.Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0,
      cocktailList: [],
    };
    this.plusSlide = this.plusSlide.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  plusSlide = (u) => {
    const { slideIndex, cocktailList } = this.state;
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

  fetchApi() {
    const array = [];
    fetch(
      "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php"
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < 4; i += 1) {
          array.push(data.drinks[i]);
        }
        this.setState({ cocktailList: array });
      });
  }

  render() {
    const { cocktailList, slideIndex } = this.state;
    const { fetchApi, plusSlide } = this;
    // console.log(cocktailList[0].idDrink);
    return (
      <div className="carouselContainer">
        <button type="button" onClick={fetchApi} className="buttonRandom">
          Random Cocktail
        </button>
        <div className="carouselCocktailContainer">
          <span
            role="button"
            className="prev"
            tabIndex="0"
            onKeyDown={() => plusSlide(-1)}
            onClick={() => plusSlide(-1)}
          >
            &#10094;
          </span>
          {cocktailList.map((el, index) => (
            <div
              key={el.idDrink}
              className="cocktailCardContainer"
              style={{ display: index === slideIndex ? "block" : "none" }}
            >
              <FicheCocktail cocktail={el} />
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

export default CarouselLab;
