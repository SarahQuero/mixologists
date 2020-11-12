import React from "react";
import "./Style/Lab.scss";
import CarouselLab from "./CarouselLab";
import verreVide from "../../public/images/verre_vide.png";

class Lab extends React.Component {
  randomColorList = [
    "#27ae60",
    "#3498db",
    "#9b59b6",
    "#f1c40f",
    "#e74c3c",
    "#e67e22",
  ];

  constructor() {
    super();
    this.state = {
      cocktailList: [],
      cocktailIng: [],
    };
  }

  componentDidMount() {
    this.getCocktail();
  }

  myIncludes = (array, string) => {
    let found = false;
    array.forEach((el) => {
      if (el.name.toUpperCase() === string.toUpperCase()) {
        found = true;
      }
    });
    return found;
  };

  insertRandomIng = (array) => {
    const randomIng = [
      "Aperol",
      "Prosecco",
      "Soda Water",
      "Kummel",
      "Gin",
      "Olive",
      "Vermouth",
      "Orange Peel",
      "Lemon Juice",
      "Campari",
      "Sweet Vermouth",
      "Light Rum",
      "Apple juice",
      "Kahlua",
      "Sambuca",
      "Baileys irish cream",
      "Amaretto",
      "Light cream",
      "Apricot brandy",
      "Red wine",
      "Cinnamon",
      "Cloves",
      "Sugar",
      "Absolut Citron",
      "Maraschino cherry",
      "Ice",
      "Bourbon",
    ];
    while (array.length < 17) {
      const random = Math.floor(Math.random() * randomIng.length);
      if (!this.myIncludes(array, randomIng[random])) {
        array.splice(Math.floor(Math.random() * array.length), 0, {
          name: randomIng[random],
          good: false,
        });
      }
    }
    return array;
  };

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
    return this.insertRandomIng(newAray);
  };

  getCocktail = () => {
    const array = [];
    fetch(
      `https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php`
    )
      .then((data) => data.json())
      .then((cocktailReturn) => {
        const cocktail = cocktailReturn.drinks[0];
        for (let i = 0; i < 4; i += 1) {
          array.push(cocktailReturn.drinks[i]);
        }
        this.setState({
          cocktailList: array,
          cocktailIng: this.getAllIngre(cocktail),
        });
      });
  };

  changeCocktail = (n) => {
    const { cocktailList } = this.state;
    const cocktail = cocktailList[n];
    this.setState({
      cocktailIng: this.getAllIngre(cocktail),
    });
  };

  setClickIng = (id) => {
    const { cocktailIng } = this.state;
    const copyState = cocktailIng;
    copyState[id].checked = !copyState[id].checked;
    copyState[id].color = this.randomColor();
    this.setState({ cocktailIng: copyState });
  };

  checkMix = () => {
    const { cocktailIng } = this.state;
    let correct = true;
    cocktailIng
      .filter((el) => el.good)
      .forEach((el) => {
        if (!el.checked) {
          correct = false;
        }
      });
    console.log(correct);
  };

  randomColor = () => {
    const { randomColorList } = this;
    const random = Math.floor(Math.random() * randomColorList.length);
    return {
      backgroundColor: randomColorList[random],
    };
  };

  render() {
    const { state, setClickIng, checkMix, getCocktail, changeCocktail } = this;
    const { cocktailIng, cocktailList } = state;
    return (
      <div className="margin">
        <CarouselLab
          cocktailList={cocktailList}
          getCocktail={getCocktail}
          chooseCocktail={changeCocktail}
        />
        <div className="labWrapper">
          <div className="labIngWrapper">
            <h1> Follow the recipes</h1>
            <h2>Ingredients</h2>
            <ul>
              {cocktailIng.map((el, id) => (
                <li
                  className={el.checked ? "liclicked" : null}
                  key={`ingId${el.name}`}
                  onClick={() => setClickIng(id)}
                  role="treeitem"
                  tabIndex="-1"
                  onKeyDown={() => setClickIng(id)}
                >
                  {el.name}
                </li>
              ))}
            </ul>
            <button type="button" onClick={checkMix}>
              Mix
            </button>
          </div>
          <div className="verreSpacer" />
          <div className="verreWrapper">
            <img src={verreVide} alt="Verre vide" />
            <div className="verreColorWrapper">
              {cocktailIng
                .filter((el) => el.checked)
                .map((el) => (
                  <div key={`remplirCok${el.name}`} style={el.color}>
                    {el.name}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lab;
