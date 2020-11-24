import React from "react";
import { Link } from "react-router-dom";
import "./Style/NavBar.scss";
import PropTypes from "prop-types";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
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
    const { short } = this.props;
    return (
      <div>
        <nav>
          <div className="navElements">
            <img
              className="logoNavBar"
              src="https://i.ibb.co/zbPyQZW/logo-experimentalcocktail.png"
              alt="logo"
            />
            {!short && (
              <div className="menuBurgerContainer">
                <div
                  role="button"
                  tabIndex="-1"
                  className={menuOpen ? "menuBurger open" : "menuBurger"}
                  onClick={this.handleClick}
                  onKeyDown={this.handleClick}
                >
                  <span className="menuBars" />
                </div>
                <h2 id="titleMenu">MENU</h2>
              </div>
            )}
          </div>
        </nav>
        <div id="menu" className={menuOpen ? "menuOpen" : "menuClose"}>
          <ul>
            <li>
              <Link to="/" onClick={this.handleClick}>
                HOME
              </Link>
            </li>
            <span className="lineMenu" />
            <li>
              <Link to="/Recipes" onClick={this.handleClick}>
                RECIPES
              </Link>
            </li>
            <span className="lineMenu" />
            <li>
              <Link to="/Lab" onClick={this.handleClick}>
                LAB COCKTAIL
              </Link>
            </li>
            <span className="lineMenu" />
            <li>
              <Link to="/World" onClick={this.handleClick}>
                AROUND THE WORLD
              </Link>
            </li>
            <span className="lineMenu" />
            <li>
              <Link to="/Box" onClick={this.handleClick}>
                OUR BOXES
              </Link>
            </li>
            <span className="lineMenu" />
            <li>
              <Link to="/Contact" onClick={this.handleClick}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  short: PropTypes.bool,
};

NavBar.defaultProps = {
  short: false,
};

export default NavBar;
