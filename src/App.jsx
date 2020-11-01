import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Lab from "./components/Lab";
import World from "./components/World";
import Box from "./components/Box";
import Contact from "./components/Contact";
import FicheCocktail from "./components/FicheCocktail";
import "./App.scss";

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

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Recipes" component={Recipes} />
        <Route path="/Lab" component={Lab} />
        <Route path="/World" component={World} />
        <Route path="/Box" component={Box} />
        <Route path="/Contact" component={Contact} />
      </Switch>

      <FicheCocktail
        cocktailName={piscoSour.strDrink}
        instructions={piscoSour.strInstructions}
        ingredient1={piscoSour.strIngredient1}
        ingredient2={piscoSour.strIngredient2}
      />
    </div>
  );
}

export default App;
