import React from "react";
import "./Style/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social-medias">
          <a href="https://wwww.google.com" className="icons">
            <img
              src="https://img.icons8.com/color/2x/facebook.png"
              alt="facebook"
            />
          </a>
          <a href="https://wwww.google.com" className="icons">
            <img
              src="https://img.icons8.com/color/2x/instagram-new.png"
              alt="instagram"
            />
          </a>
          <a href="https://wwww.google.com" className="icons">
            <img
              src="https://img.icons8.com/color/2x/twitter.png"
              alt="twitter"
            />
          </a>
          <a href="https://wwww.google.com" className="icons">
            <img
              src="https://img.icons8.com/nolan/2x/github.png"
              alt="Github"
            />
          </a>
        </div>
        <div className="contact-us">
          <a href="https://wwww.google.com">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
