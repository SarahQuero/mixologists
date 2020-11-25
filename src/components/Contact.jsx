import React, { useState } from "react";
import "./Style/Contact.scss";
import contactImage from "../../public/assets/contact-image.jpg";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [favCock, setFavCock] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={favCock}
            placeholder="My favourite cocktail"
            onChange={(e) => setFavCock(e.target.value)}
          />
          <textarea
            type="text"
            value={comment}
            placeholder="My Comments"
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="submit-form" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
