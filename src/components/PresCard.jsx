import React from "react";
import "./Style/PresCard.scss";
import cockImg from "../../public/images/cock_presCard.png";

const PresCard = () => (
  <div className="PresCard">
    <h2>Recipes</h2>
    <div className="PresCard-desc-main">
      Deserunt ad ea fugiat officia consectetur exercitation excepteur dolore
      excepteur cillum labore quis. Excepteur est sit voluptate laboris. Laborum
      commodo laborum voluptate eiusmod officia sunt. Nisi anim deserunt dolore
      magna reprehenderit commodo Lorem cupidatat mollit esse non. Esse velit
      ipsum anim ad deserunt elit. Officia exercitation aliquip et mollit
      consectetur ipsum aute ullamco non voluptate reprehenderit quis. Consequat
      do voluptate eiusmod commodo aliquip exercitation pariatur veniam sint
      nisi cillum anim deserunt.
    </div>
    <div className="PresCard-wrapper">
      <div className="PresCard-card-txt">
        <h3>Discover our cocktails</h3>
        <div className="PresCard-card-desc">
          Sint ullamco culpa nisi amet enim ut deserunt irure occaecat Lorem
          dolore eiusmod tempor. Ea adipisicing nostrud proident adipisicing eu
          occaecat tempor elit mollit tempor mollit occaecat. Occaecat enim
          adipisicing ex eiusmod nisi nisi
        </div>
        <button type="button"> Discover now </button>
      </div>
      <img src={cockImg} alt="Ouais ouais c'est bien" />
    </div>
  </div>
);

export default PresCard;
