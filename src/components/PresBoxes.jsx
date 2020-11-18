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
            for (let i = 0; i < 5; i += 1) {
              arrayCocktail.push(data2.drinks[i]);
            }
            this.setState({ cocktailBox: arrayCocktail });
          });
      });
  }

  render() {
    const { cocktailBox } = this.state;
    console.log(cocktailBox);
    return (
      <>
        <div className="presBoxesContainer">
          <h1>Our Boxes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            deleniti ducimus possimus ad dolore iusto! Repudiandae atque eius
            quaerat neque itaque voluptatum reiciendis qui rem, repellat vero
            totam. Ab, adipisci!
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
