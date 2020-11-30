import React from "react";
import "./Style/Home.scss";
import Jeremy from "../../public/assets/Jérémy.jpg";
import Sarah from "../../public/assets/Sarah.jpg";
import Florent from "../../public/assets/Florent.jpg";

function Team() {
  return (
    <>
      <div className="teamContainer">
        <h1>The Crew</h1>
        <p>
          We are three tech-adventurers passionated about mixology: the art of
          making cocktails. We've also travelled in many countries and
          discovered the cocktail recipes on each country we've visited. Today,
          we would like to share this passion with you to let you discover the
          most exquisite cocktails that we've selected for you all around the
          world.
        </p>
        <div className="memberContainer">
          <div
            className="memberImg"
            style={{
              backgroundImage: `url(${Jeremy})`,
            }}
          />
          <div
            className="memberImg"
            style={{
              backgroundImage: `url(${Sarah})`,
            }}
          />
          <div
            className="memberImg"
            style={{
              backgroundImage: `url(${Florent})`,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Team;
