import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Style/NavBar.scss";
import PropTypes from "prop-types";

function NavBar({ short }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [menuOpen]);

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
                onClick={() => setMenuOpen(!menuOpen)}
                onKeyDown={() => setMenuOpen(!menuOpen)}
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
            <Link to="/" onClick={() => setMenuOpen(!menuOpen)}>
              HOME
            </Link>
          </li>
          <span className="lineMenu" />
          <li>
            <Link to="/Recipes" onClick={() => setMenuOpen(!menuOpen)}>
              RECIPES
            </Link>
          </li>
          <span className="lineMenu" />
          <li>
            <Link to="/Lab" onClick={() => setMenuOpen(!menuOpen)}>
              LAB COCKTAIL
            </Link>
          </li>
          <span className="lineMenu" />
          <li>
            <Link to="/World" onClick={() => setMenuOpen(!menuOpen)}>
              AROUND THE WORLD
            </Link>
          </li>
          <span className="lineMenu" />
          <li>
            <Link to="/Box" onClick={() => setMenuOpen(!menuOpen)}>
              OUR BOXES
            </Link>
          </li>
          <span className="lineMenu" />
          <li>
            <Link to="/Contact" onClick={() => setMenuOpen(!menuOpen)}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  short: PropTypes.bool,
};

NavBar.defaultProps = {
  short: false,
};

export default NavBar;
