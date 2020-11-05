import React from "react";
import "./Style/Team.scss";
import Jeremy from "../../public/assets/Jérémy.jpg";
import Sarah from "../../public/assets/Sarah.jpg";
import Florent from "../../public/assets/Florent.jpg";

function Team() {
  return (
    <>
      <section>
        <div className="teamContainer">
          <h1>The Crew</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi
            mollitia, aut cum eaque praesentium assumenda voluptatem,
            voluptatibus sint possimus aperiam amet minima sunt provident iure,
            deserunt rerum quos a.
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
      </section>
    </>
  );
}

export default Team;
