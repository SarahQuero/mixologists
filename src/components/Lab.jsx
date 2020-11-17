import React from "react";
import "./Style/Lab.scss";
import CarouselLab from "./CarouselLab";
import verreVide from "../../public/images/verre_vide.png";
import labCocktail from "../../public/assets/labcocktail.jpg";
import LabResult from "./LabResult";

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
      result: null,
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

  getAllIngredients = (array) => {
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

  getCocktail = () => {
    const array = [];
    fetch(
      `https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php`
    )
      .then((data) => data.json())
      .then((cocktailReturn) => {
        const cocktail = cocktailReturn.drinks[0];
        for (let i = 0; i < 4; i += 1) {
          // array.push(cocktailReturn.drinks[i]);
          const ing = this.getAllIngredients(cocktailReturn.drinks[i]);
          array.push({
            infoIng: ing,
            infoCock: cocktailReturn.drinks[i],
          });
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
    console.log(cocktail);
    this.setState({
      cocktailIng: this.getAllIngre(cocktail.infoCock),
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
    this.setState({ result: correct });
  };

  displayResult = () => {
    console.log("1");
    this.setState({ result: null });
    const { cocktailIng } = this.state;
    const resCocktailIng = [];
    for (let i = 0; i < cocktailIng.length; i += 1) {
      resCocktailIng[i] = cocktailIng[i];
      resCocktailIng[i].checked = false;
    }

    this.setState({ cocktailIng: resCocktailIng });
  };

  randomColor = () => {
    const { randomColorList } = this;
    const random = Math.floor(Math.random() * randomColorList.length);
    return {
      backgroundColor: randomColorList[random],
    };
  };

  render() {
    const {
      state,
      setClickIng,
      checkMix,
      getCocktail,
      changeCocktail,
      displayResult,
    } = this;
    const { cocktailIng, cocktailList, result } = state;
    return (
      <div className="margin">
        <div
          className="labcocktail-banner"
          style={{
            backgroundImage: `url(${labCocktail})`,
          }}
        />
        <div className="labcocktail-page-prez">
          <h1>Lab Cocktail</h1>
          <p>
            {" "}
            <strong>Welcome to the Lab Cocktail</strong>, a virtual cocktail bar
            where you will{" "}
            <strong>
              learn how to prepare your own cocktail and become a Cocktail
              Master.
            </strong>
          </p>
          <h2>Game Initialization</h2>
          <p>
            {" "}
            Step 1 : <strong>Click on Generate Cocktails</strong> to generate 4
            new cocktails to learn.{" "}
          </p>
          <p>
            The left and right arrows will allow you to select the cocktail you
            want to choose.{" "}
          </p>
          <p>
            You can access the Cocktail Recipe{" "}
            <strong>by clicking on the Cocktail Card.</strong>
          </p>
          <p>
            Step 2 : Then, <strong>click on Choose Cocktail</strong> to select
            the cocktail and start the game.
          </p>
        </div>
        <div>
          <CarouselLab
            cocktailList={cocktailList}
            getCocktail={getCocktail}
            chooseCocktail={changeCocktail}
          />
        </div>
        <div className="labcocktail-page-prez">
          <h2>Ready to play !</h2>
          <p>
            Step 3 : Follow the Cocktail recipe and{" "}
            <strong>
              select below the right ingredients to make your own cocktail.
            </strong>
          </p>
          <p>
            Everytime you add a new ingredient, you can see the glass filling up
            with the selected ingredients.
          </p>
          <p>
            Step 4: When you're ready to mix your cocktail,{" "}
            <strong>click on Mix</strong>.
          </p>
          <p>
            Step 5: <strong>Discover the result !</strong>
          </p>
        </div>
        <div className="labWrapper">
          <div className="labIngWrapper">
            <h1> Select the right ingredients</h1>
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
        {result === true ? (
          <div>
            <LabResult
              message="Congratulations! You are now ready to make your own cocktail! "
              displayResult={displayResult}
            />
          </div>
        ) : null}
        {result === false ? (
          <div>
            <LabResult
              message="You almost had the solution... Let's try again !"
              displayResult={displayResult}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Lab;
