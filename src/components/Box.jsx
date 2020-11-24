import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style/Box.scss";
import BoxCard from "./BoxCard";

function Box() {
  const [cocktailList, setCocktailList] = useState([]);
  const [selectedBox, setSelectedBox] = useState(null);

  useEffect(() => {
    const array = [];
    const fetchData = async () => {
      const result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"
      );
      for (let i = 0; i < 10; i += 1) {
        array.push(result.data.drinks[i]);
      }
      setCocktailList(array);
    };
    fetchData();
  }, []);

  console.log(selectedBox);
  return (
    <div className="margin">
      <div className="BoxTopImg" />
      <div className="BoxTop">
        <h1>Our boxes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore magni
          velit atque sit architecto quisquam, ipsam error et earum deleniti.
          Animi pariatur laudantium dolorem mollitia eligendi ea tenetur ut
          libero.
        </p>
      </div>
      {selectedBox && (
        <div className="popUpBox">
          <p>Yes</p>
        </div>
      )}
      <div className="BoxMain">
        {cocktailList.map((cocktail, index) => (
          <BoxCard
            boxImg={cocktail.strDrinkThumb}
            boxTitle={cocktail.strDrink}
            yes={() => setSelectedBox(cocktailList[index])}
            key={cocktail.idDrink}
          />
        ))}
      </div>
    </div>
  );
}
export default Box;
