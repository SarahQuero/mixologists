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
  strIngredient1: "Pisco",
  strIngredient2: "Lemon juice",
  strIngredient3: "Sugar",
  strIngredient4: "Ice",
  strMeasure1: "2 oz ",
  strMeasure2: "1 oz ",
  strMeasure3: "1-2 tblsp ",
  strMeasure4: null,
};

function Recipes() {
  return (
    <div className="margin">
      <FicheCocktail
        cocktailName={piscoSour.strDrink}
        instructions={piscoSour.strInstructions}
        ingredient1={piscoSour.strIngredient1}
        ingredient2={piscoSour.strIngredient2}
      />
    </div>
  );
}
export default Recipes;
