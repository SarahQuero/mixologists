import React, { useState } from "react";
import "./Style/World.scss";
import ReactGlobe from "react-globe";
import FicheCocktail from "./FicheCocktail";

function World() {
  const markers = [
    {
      id: "marker1",
      city: "Pérou",
      color: "red",
      coordinates: [-9.757481, -74.455289],
      value: 175,
      cock: "pisco sour",
    },
    {
      id: "marker2",
      city: "Italie",
      color: "red",
      coordinates: [42.172296, 12.740834],
      value: 175,
      cock: "Negroni",
    },
    {
      id: "marker3",
      city: "Singapour",
      color: "red",
      coordinates: [1.32625, 103.822469],
      value: 175,
      cock: "Singapore sling",
    },
    {
      id: "marker4",
      city: "New York [Etat Unis]",
      color: "red",
      coordinates: [40.77462, -74.12756],
      value: 175,
      cock: "Manhattan",
    },
    {
      id: "marker5",
      city: "Brésil",
      color: "red",
      coordinates: [-9.464056, -49.07386],
      value: 175,
      cock: "caipirinha",
    },
    {
      id: "marker6",
      city: "Russie",
      color: "red",
      coordinates: [59.983591, 93.037789],
      value: 175,
      cock: "Moscow mule",
    },
    {
      id: "marker7",
      city: "Irlande",
      color: "red",
      coordinates: [53.316386, -7.902582],
      value: 175,
      cock: "Irish coffee",
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
  function onDefocus(e) {
    if (
      e !== undefined &&
      e.target !== undefined &&
      e.target.id !== "wrapperCard"
    ) {
      return;
    }
    setCard(false);
    setCock([]);
  }

  return (
    <div className="margin">
      {cardVisible && (
        <div
          onClick={onDefocus}
          role="treeitem"
          tabIndex="-1"
          onKeyDown={onDefocus}
          id="wrapperCard"
          style={{
            padding: 12,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FicheCocktail cocktail={cock} infoIng={getAllIngre(cock)} black />
        </div>
      )}
      <ReactGlobe
        height="82vh"
        markers={markers}
        options={{ markerTooltipRenderer }}
        width="100%"
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
    </div>
  );
}

export default World;
