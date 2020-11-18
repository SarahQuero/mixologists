import React, { useState } from "react";
import "./Style/World.scss";
import ReactGlobe from "react-globe";
import FicheCocktail from "./FicheCocktail";
// import defaultMarkers from "./markers";

function World() {
  const markers = [
    {
      id: "marker1",
      city: "Singapore",
      color: "red",
      coordinates: [1.3521, 103.8198],
      value: 50,
      cock: "margarita",
    },
    {
      id: "marker2",
      city: "New York",
      color: "blue",
      coordinates: [40.73061, -73.935242],
      value: 25,
      cock: "Mother's Milk",
    },
    {
      id: "marker3",
      city: "San Francisco",
      color: "orange",
      coordinates: [37.773972, -122.431297],
      value: 35,
      cock: "Chocolate Black Russian",
    },
    {
      id: "marker4",
      city: "Beijing",
      color: "gold",
      coordinates: [39.9042, 116.4074],
      value: 135,
      cock: "Black & Tan",
    },
    {
      id: "marker5",
      city: "London",
      color: "green",
      coordinates: [51.5074, 0.1278],
      value: 80,
      cock: "Adam & Eve",
    },
    {
      id: "marker6",
      city: "Los Angeles",
      color: "gold",
      coordinates: [29.7604, -95.3698],
      value: 54,
      cock: "New York Lemonade",
    },
  ];
  const [cock, setCock] = useState([]);
  const [cardVisible, setCard] = useState(false);
  const getAllIngre = (array) => {
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

  function markerTooltipRenderer() {
    return !cardVisible ? "Click for more information" : "";
  }

  function onClickMarker(marker) {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${marker.cock}`
    )
      .then((data) => data.json())
      .then((cocktail) => {
        setCock(cocktail.drinks[0]);
        setCard(true);
      });
  }
  function onDefocus() {
    setCard(false);
    setCock([]);
  }

  return (
    <div>
      {cardVisible && (
        <div
          style={{
            background: "white",
            fontSize: 20,
            bottom: 0,
            padding: 12,
          }}
        >
          <FicheCocktail cocktail={cock} infoIng={getAllIngre(cock)} />
        </div>
      )}
      <ReactGlobe
        height="100vh"
        markers={markers}
        options={{ markerTooltipRenderer }}
        width="100vw"
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
    </div>
  );
}

export default World;
