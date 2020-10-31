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
  <div className={imgRight ? "PresCard" : "PresCard PresCard-white"}>
    <h2>{title}</h2>
    <div className="PresCard-desc-main">{descMain}</div>
    <div
      className={imgRight ? "PresCard-wrapper" : "PresCard-wrapper inversePres"}
    >
      <div
        className={
          imgRight
            ? "PresCard-card-txt"
            : "PresCard-card-txt PresCard-card-txt-white"
        }
      >
        <h3>{cardTitle}</h3>
        <div className="PresCard-card-desc" key={imgRight}>
          {descCard}
        </div>
        <button type="button"> {button} </button>
      </div>
      <div className="PresCard-imgCard">
        <img src={img} alt="cocktails" />
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
