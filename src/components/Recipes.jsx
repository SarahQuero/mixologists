import React from "react";
import "./Style/Recipes.scss";
import axios from "axios";
import FicheCocktail from "./FicheCocktail";
import cocktailRecipe from "../../public/assets/cocktail-recipe.jpg";

class Recipes extends React.Component {
  state = {
    cocktails: [],
    popular: true,
    reseach: [],
  };

  componentDidMount() {
    this.getCocktail();
  }

  getAllIngre = (array) => {
    const newAray = [];
    for (let i = 1; i < 16; i += 1) {
      if (
        array[`strIngredient${i}`] === null ||
        array[`strIngredient${i}`] === ""
      ) {
        break;
      }
      newAray.push({
        name: array[`strIngredient${i}`],
        good: true,
      });
    }
    return newAray;
  };

  getAllMeasures = (array) => {
    const newAray = [];
    for (let i = 1; i < 16; i += 1) {
      if (array[`strMeasure${i}`] === null || array[`strMeasure${i}`] === "") {
        break;
      }
      newAray.push({
        name: array[`strMeasure${i}`],
        good: true,
      });
    }
    return newAray;
  };

  getCocktail = () => {
    let ingInfoCock = [];
    axios
      .get("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
      .then((res) => {
        ingInfoCock = res.data.drinks.map((drink) => {
          const ing = this.getAllIngre(drink);
          return {
            infoIng: ing,
            infoCock: drink,
          };
        });
        this.setState({ cocktails: ingInfoCock });
      });
  };

  search = (e) => {
    if (e.target.value.trim() === "") {
      this.setState({ popular: true });
      return;
    }
    this.setState({ popular: false });
    const tabtemp = [];
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value.trim()}`
      )
      .then((res) => res.data)
      .then((data) => {
        data.drinks.forEach((el) => {
          console.log(el);
          const ing = this.getAllIngre(el);
          tabtemp.push({ infoCock: el, infoIng: ing });
        });
        this.setState({ reseach: tabtemp });
      });
  };

  render() {
    const { cocktails, popular, reseach } = this.state;
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
        <div className="searchBarWrapper">
          <input type="text" onChange={this.search} />
        </div>
        {cocktails.length === 0 && popular ? (
          <div> Loading ... </div>
        ) : (
          <div className="fichesCocktailAll">
            {popular
              ? cocktails.map((cocktail) => (
                  <div
                    className="ficheCocktailSimple"
                    key={cocktail.infoCock.idDrink}
                  >
                    <FicheCocktail
                      cocktail={cocktail.infoCock}
                      infoIng={cocktail.infoIng}
                    />
                  </div>
                ))
              : reseach.map((cocktail) => (
                  <div
                    className="ficheCocktailSimple"
                    key={cocktail.infoCock.idDrink}
                  >
                    <FicheCocktail
                      cocktail={cocktail.infoCock}
                      infoIng={cocktail.infoIng}
                    />
                  </div>
                ))}
          </div>
        )}
      </div>
    );
  }
}

export default Recipes;
