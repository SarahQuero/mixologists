import React from "react";
import { Link } from "react-router-dom";
import "./Style/NavBar.scss";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <div>
        <nav>
          <div className="navElements">
            <img
              className="logoNavBar"
              src="https://i.ibb.co/zbPyQZW/logo-experimentalcocktail.png"
              alt="logo"
            />
            <h2 id="titleNav">Experimental Cocktail Club</h2>
            <div className="menuBurgerContainer">
              <div
                role="button"
                tabIndex="0"
                className={menuOpen ? "menuBurger open" : "menuBurger"}
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
              >
                <span className="menuBars" />
              </div>
              <h2 id="titleMenu">MENU</h2>
            </div>
          </div>
        </nav>
        <div id="menu" className={menuOpen ? "menuOpen" : "menuClose"}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <span className="lineMenu" />
            <li>
              <Link to="/Recipes">RECIPES</Link>
            </li>
            <span className="lineMenu" />
            <li>
              <Link to="/Lab">LAB COCKTAIL</Link>
            </li>
            <span className="lineMenu" />
            <li>
              <Link to="/World">AROUND THE WORLD</Link>
            </li>
            <span className="lineMenu" />
            <li>
              <Link to="/Box">OUR BOXES</Link>
            </li>
            <span className="lineMenu" />
            <li>
              <Link to="/Contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default NavBar;
