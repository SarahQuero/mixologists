import React from "react";
import "./Style/Recipes.scss";
import axios from "axios";
import FicheCocktail from "./FicheCocktail";
import cocktailRecipe from "../../public/assets/cocktail-recipe.jpg";

class Recipes extends React.Component {
  state = {
    cocktails: [],
  };

  componentDidMount() {
    this.getCocktail();
  }

  getCocktail = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
      .then((res) => {
        console.log(res.data);
        this.setState({ cocktails: res.data.drinks });
      });
  };

  render() {
    const { cocktails } = this.state;
    return (
      <div className="recipe-page margin">
        <div
          className="cocktail-recipe"
          style={{
            backgroundImage: `url(${cocktailRecipe})`,
          }}
        />
        <div className="recipe-page-prez">
          <h1>Cocktail Recipes</h1>
          <p>
            Cocktails are known for their creative and unique names, many of
            which will draw you in and help you find a favorite new recipe.
            Whether you're searching for a new sipper to enjoy after work or
            that perfect recipe to match a party's theme, these cocktails,
            shots, and shooters should be all you need. Some things are classic
            for a reason. Don't get us wrong, we love and inventive, over the
            top cocktail as much as anyone, but the timeless flavors of
            cocktails like the margarita, the Manhattan, and the martini are the
            cocktail version of comfort food, and we can't imagine imbibing
            without them. Whether you're brushing up on your home mixology menu
            or looking for a go-to order for your next cocktail hour, these
            classics will never steer you wrong.
          </p>
          <p>
            We have selected for you a list of the most popular and delicious
            cocktails.{" "}
            <strong>Click on each cocktail card to discover its Recipe.</strong>
          </p>
        </div>
        {cocktails.length === 0 ? (
          <div> Loading ... </div>
        ) : (
          <div className="fichesCocktailAll">
            {cocktails.map((cocktail) => (
              <div className="ficheCocktailSimple" key={cocktail.idDrink}>
                <FicheCocktail cocktail={cocktail} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Recipes;
