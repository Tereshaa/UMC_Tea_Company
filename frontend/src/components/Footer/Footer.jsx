import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets.js";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.umcwithoutname} />
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} />
            <img src={assets.linkedin_icon} />
            <img src={assets.twitter_icon} />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
          <li><a href="/" id="home">Home</a></li>
    <li><a href="/about" id="about">About</a></li>
    <li><a  id="explore-menu">Menu</a></li>
    <li><a href="/privacy-policy" id="privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 9036336655</li>
            <li>umcteacompany@gmail.com</li>
            <li>12-4-427/A, Bandla St, Mallaiah Gunta Katta, Tata Nagar, Tirupati, Andhra Pradesh 517501</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2024 UMC Tea Company. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
