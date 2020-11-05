import React from "react";
import "./Style/Team.scss";

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
            <div className="memberImg" />
            <div className="memberImg" />
            <div className="memberImg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
