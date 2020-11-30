import React from "react";
import "./Style/Home.scss";

function Intro() {
  return (
    <>
      <div className="imgHome">
        {/* <div className="logoIntro" /> */}
        <h1>Experimental Cocktail Club</h1>
      </div>
      <div className="introContainer">
        <p>
          As our habits has recently changed and as the idea of going in a bar
          and enjoying a fine cocktail is now submitted to restrictions, we have
          decided to offer you a Virtual Cocktail Bar that you can enjoy
          directly from home.
          <br /> <br />
          Within our website, you will be able to discover a list of all the
          most exquisite and delicious cocktails. We have also created a Lab
          Cocktail where you will learn to make your own cocktails. Also, we
          will make you travel with us by discovering cocktails from all around
          the world. Finally, if you found a cocktail you would like to try at
          home, you'll be able to purchase one of our cocktail boxes. <br />
        </p>
      </div>
    </>
  );
}

export default Intro;
