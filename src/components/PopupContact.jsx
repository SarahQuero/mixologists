import React, { useState } from "react";
import "./Style/Contact.scss";
import PropTypes from "prop-types";

const PopupContact = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);
  console.log(typeof toggle);
  console.log(typeof content);

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

PopupContact.propTypes = {
  toggle: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
};

export default PopupContact;
