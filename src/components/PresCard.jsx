import React from "react";
import "./Style/PresCard.scss";
import PropTypes from "prop-types";

const PresCard = ({
  title,
  descMain,
  imgRight,
  cardTitle,
  descCard,
  button,
  img,
}) => (
  <div className="PresCard">
    <h2>{title}</h2>
    <div className="PresCard-desc-main">{descMain}</div>
    <div
      className={imgRight ? "PresCard-wrapper inversePres" : "PresCard-wrapper"}
    >
      <div className="PresCard-card-txt">
        <h3>{cardTitle}</h3>
        <div className="PresCard-card-desc" key={imgRight}>
          {descCard}
        </div>
        <button type="button"> {button} </button>
      </div>
      <div className="imgCard">
        <img src={img} alt="ouais ouais" />
      </div>
    </div>
  </div>
);

PresCard.propTypes = {
  title: PropTypes.string.isRequired,
  descMain: PropTypes.string.isRequired,
  imgRight: PropTypes.bool.isRequired,
  cardTitle: PropTypes.string.isRequired,
  descCard: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default PresCard;
