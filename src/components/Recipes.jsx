import React from "react";
import "./Style/Recipes.scss";
import FicheCocktail from "./FicheCocktail";

const piscoSour = {
  idDrink: "13214",
  strDrink: "Pisco Sour",
  strCategory: "Cocktail",
  strAlcoholic: "Alcoholic",
  strGlass: "Cocktail glass",
  strInstructions:
    "Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.[1]",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg",
  strIngredient1: "Pisco",
  strIngredient2: "Lemon juice",
  strIngredient3: "Sugar",
  strIngredient4: "Ice",
  strMeasure1: "2 oz ",
  strMeasure2: "1 oz ",
  strMeasure3: "1-2 tblsp ",
  strMeasure4: null,
};
const blackRussian = {
  idDrink: "11102",
  strDrink: "Black Russian",
  strInstructions:
    "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/2k5gbb1504367689.jpg",
  strIngredient1: "Coffee liqueur",
  strIngredient2: "Vodka",
  strIngredient3: null,
  strIngredient4: null,
  strIngredient5: null,
  strMeasure1: "3/4 oz",
  strMeasure2: "1 1/2 oz ",
  strMeasure3: null,
};

const manhattan = {
  idDrink: "11008",
  strDrink: "Manhattan",
  strInstructions:
    "Stirred over ice, strained into a chilled glass, garnished, and served up.",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/hz7p4t1589575281.jpg",
  strIngredient1: "Sweet Vermouth",
  strIngredient2: "Bourbon",
  strIngredient3: "Angostura bitters",
  strIngredient4: "Ice",
  strIngredient5: "Maraschino cherry",
  strIngredient6: "Orange peel",
  strMeasure1: "3/4 oz ",
  strMeasure2: "2 1/2 oz Blended ",
  strMeasure3: "dash ",
  strMeasure4: "2 or 3 ",
  strMeasure5: "1 ",
  strMeasure6: "1 twist of ",
};

const mojito = {
  idDrink: "11000",
  strDrink: "Mojito",
  strInstructions:
    "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg",
  strIngredient1: "Light rum",
  strIngredient2: "Lime",
  strIngredient3: "Sugar",
  strIngredient4: "Mint",
  strIngredient5: "Soda water",
  strMeasure1: "2-3 oz ",
  strMeasure2: "Juice of 1 ",
  strMeasure3: "2 tsp ",
  strMeasure4: "2-4 ",
};

function Recipes() {
  return (
    <div className="recipe-page margin">
      <div className="recipe-page-prez">
        <h1>Cocktail Recipes</h1>
        <p>
          Cocktails are known for their creative and unique names, many of which
          will draw you in and help you find a favorite new recipe. Whether
          you're searching for a new sipper to enjoy after work or that perfect
          recipe to match a party's theme, these cocktails, shots, and shooters
          should be all you need.
        </p>
        <p>
          Some things are classic for a reason. Don't get us wrong, we love and
          inventive, over the top cocktail as much as anyone, but the timeless
          flavors of cocktails like the margarita, the Manhattan, and the
          martini are the cocktail version of comfort food, and we can't imagine
          imbibing without them. Whether you're brushing up on your home
          mixology menu or looking for a go-to order for your next cocktail
          hour, these classics will never steer you wrong.
        </p>
      </div>
      <div className="fichesCocktailAll">
        <div className="ficheCocktailSimple">
          <FicheCocktail cocktail={piscoSour} />
        </div>
        <div className="ficheCocktailSimple">
          <FicheCocktail cocktail={piscoSour} />
        </div>
        <div className="ficheCocktailSimple">
          <FicheCocktail cocktail={blackRussian} />
        </div>
        <div className="ficheCocktailSimple">
          <FicheCocktail cocktail={manhattan} />
        </div>
        <div className="ficheCocktailSimple">
          <FicheCocktail cocktail={mojito} />
        </div>
        <div className="ficheCocktailSimple">
          <FicheCocktail cocktail={piscoSour} />
        </div>
        <div className="ficheCocktailSimple">
          <FicheCocktail cocktail={blackRussian} />
        </div>
        <div className="ficheCocktailSimple">
          <FicheCocktail cocktail={manhattan} />
        </div>
        <div className="ficheCocktailSimple">
          <FicheCocktail cocktail={mojito} />
        </div>
      </div>
    </div>
  );
}
export default Recipes;
