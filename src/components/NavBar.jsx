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
            <h2 id="titleNav">Experimental Cocktail Club</h2>
            <div
              role="button"
              tabIndex="0"
              className="menuBurger"
              onClick={this.handleClick}
              onKeyDown={this.handleClick}
            >
              <span className="bars" />
              <span className="bars" />
              <span className="bars" />
            </div>
            <h2 id="titleMenu">MENU</h2>
          </div>
        </nav>
        <div
          id="menu"
          className={menuOpen === false ? "menuClose" : "menuOpen"}
        >
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <span className="line"> </span>
            <li>
              <Link to="/Recipes">RECIPES</Link>
            </li>
            <span className="line"> </span>
            <li>
              <Link to="/Lab">LAB COCKTAIL</Link>
            </li>
            <span className="line"> </span>
            <li>
              <Link to="/World">AROUND THE WORLD</Link>
            </li>
            <span className="line"> </span>
            <li>
              <Link to="/Box">OUR BOXES</Link>
            </li>
            <span className="line"> </span>
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
