import React, { useState } from "react";
import "./Style/Contact.scss";
import contactImage from "../../public/assets/contact-image.jpg";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [radio, setRadio] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    console.log(
      `Dear ${firstName} ${lastName}, your form has been successfully submitted.`
    );
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setRadio("");
    setComment("");
  };

  return (
    <div
      className="contact-form margin"
      style={{
        backgroundImage: `url(${contactImage})`,
      }}
    >
      <form className="main-form" onSubmit={handleSubmit}>
        <div className="fields-form">
          <h1>Contact Us</h1>
          <input
            type="text"
            className="general-input"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="general-input"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            className="general-input"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="favourite-cock-choice">
            <div className="radio-buttom-field">
              <p>Please vote for your favourite Cocktail:</p>
            </div>
            <div className="radio-buttom-field">
              <label htmlFor="pisco">
                <input
                  type="radio"
                  className="radio-buttom"
                  checked={radio === "Pisco sour"}
                  value="Pisco sour"
                  id="pisco"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                Pisco sour
              </label>
            </div>
            <div className="radio-buttom-field">
              <label htmlFor="manhattan">
                <input
                  type="radio"
                  className="radio-buttom"
                  checked={radio === "Manhattan"}
                  value="Manhattan"
                  id="manhattan"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                Manhattan
              </label>
            </div>
            <div className="radio-buttom-field">
              <label htmlFor="caipirinha">
                <input
                  type="radio"
                  className="radio-buttom"
                  checked={radio === "Caipirinha"}
                  value="Caipirinha"
                  id="caipirinha"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                Caipirinha
              </label>
            </div>
          </div>
          <textarea
            type="text"
            value={comment}
            placeholder="Tell us what you think of our website and how we could improve your experience "
            onChange={(e) => setComment(e.target.value)}
          />
          <div>
            <button className="submit-form" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
