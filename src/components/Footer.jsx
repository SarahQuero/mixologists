import React from "react";
import "./Style/Footer.scss";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social-medias">
          <a href="https://www.facebook.com/TheDataDB/" className="icons">
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/explore/tags/cocktails/?hl=fr"
            className="icons"
          >
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/hashtag/cocktails" className="icons">
            <FaTwitter size={30} />
          </a>
          <a
            href="https://github.com/WildCodeSchool/092020-laloupe-p2-les_mixologistes"
            className="icons"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div className="contact-us">
          <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
