/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style/Box.scss";
import BoxCard from "./BoxCard";

function Box() {
  const [cocktailList, setCocktailList] = useState([]);
  const [selectedBox, setSelectedBox] = useState(null);

  useEffect(() => {
    if (selectedBox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    const array = [];
    const fetchData = async () => {
      const result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"
      );
      for (let i = 0; i < 12; i += 1) {
        array.push(result.data.drinks[i]);
      }
      setCocktailList(array);
    };
    fetchData();
  }, [selectedBox]);

  console.log(selectedBox);
  return (
    <div className="margin">
      <div className="backgroundBox">
        <div className="BoxTopImg" />
        <div className="BoxTop">
          <h1>Our boxes</h1>
          <p>
            In this section, you will be able to discover our box offer. Each
            box is dedicated to a special cocktail and contains all the material
            and ingredient to make your cocktails directly at home.
          </p>
        </div>
        {selectedBox && (
          <div className="popUpBox">
            <div className="popUpDescBox">
              <div
                className="crossClosing"
                onClick={() => setSelectedBox(null)}
              />
              <h2>{selectedBox.strDrink} Cocktail Box</h2>
              <div className="popUpDescMain">
                <div
                  className="popUpImg"
                  style={{
                    backgroundImage: `url(${selectedBox.strDrinkThumb})`,
                  }}
                />
                <div className="boxContent">
                  <h3>Box Content :</h3>
                  <div className="boxElement">
                    <div>
                      <h4>Ingredients :</h4>
                      <ul>
                        <li
                          style={{
                            display: selectedBox.strIngredient1
                              ? "block"
                              : "none",
                          }}
                        >
                          {selectedBox.strIngredient1}
                        </li>
                        <li
                          style={{
                            display: selectedBox.strIngredient2
                              ? "block"
                              : "none",
                          }}
                        >
                          {selectedBox.strIngredient2}
                        </li>
                        <li
                          style={{
                            display: selectedBox.strIngredient3
                              ? "block"
                              : "none",
                          }}
                        >
                          {selectedBox.strIngredient3}
                        </li>
                      </ul>
                    </div>
                    <div>
                      {" "}
                      <h4>Glass :</h4>
                      <p>{selectedBox.strGlass}</p>
                    </div>
                    <div>
                      <h4>Shaker :</h4>
                      <p>Shaker Pro 2000</p>
                    </div>
                  </div>
                </div>
                <div className="buy-box">
                  <p>60€</p>
                  <button type="button">Buy it</button>
                </div>
              </div>
            </div>
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
    </div>
  );
}
export default Box;
