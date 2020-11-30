import React from "react";
import "./Style/PresBoxes.scss";
import BoxesCardHome from "./BoxesCardHome";

class PresBoxes extends React.Component {
  constructor() {
    super();
    this.state = {
      cocktailBox: [],
    };
  }

  componentDidMount() {
    this.fetchCall();
  }

  fetchCall() {
    const arrayCocktail = [];
    fetch(
      "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita"
    )
      .then((response) => response.json())
      .then((data) => {
        arrayCocktail.push(data.drinks[0]);
        fetch("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
          .then((response) => response.json())
          .then((data2) => {
            for (let i = 0; i < 2; i += 1) {
              arrayCocktail.push(data2.drinks[i]);
            }
            this.setState({ cocktailBox: arrayCocktail });
          });
      });
  }

  render() {
    const { cocktailBox } = this.state;
    return (
      <>
        <div className="presBoxesContainer">
          <h1>Our Boxes</h1>
          <p>
            In this section, you will be able to discover our box offer. Each
            box is dedicated to a special cocktail and contains all the material
            and ingredient to make your cocktails directly at home
          </p>
          <div className="presBoxesCardContainer">
            {cocktailBox.map((el) => (
              <div className="presBoxCardMain" key={el.idDrink}>
                <BoxesCardHome
                  titleCocktail={el.strDrink}
                  imgCocktail={el.strDrinkThumb}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default PresBoxes;
