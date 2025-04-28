import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Footer.css";
const Footer = () => {
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="footer">
      <div className="footer-part" id="footer-first">
        <div className="footer-logo-container">
          <img src={logo} className="logo" alt="logo" />
          <Link to="/" className="link-logo">
            <h2>OralEase</h2>
          </Link>
        </div>
        <div className="footer-logo-description">
          <h3>Subscribe to our Newsletter</h3>
          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit<br></br>
            Consequuntur dolorem aperiam, commodi corrupti sint at cumque?
          </p>
        </div>
        <div className="footer-email">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom-row">
        <div className="footer-part">
          <h3>Menu</h3>
          <ul className="footer-part-list">
            <li>
              <Link
                to="/"
                className="footer-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="footer-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                className="footer-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-part">
          <h3>Utility Pages</h3>
          <ul className="footer-part-list">
            <li>
              <Link
                className="footer-link"
                onClick={() => handleScrollTo("projects")}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-part">
          <h3>Contact</h3>
          <div className="footer-part-list">
            <div className="footer-detail">
              <BsFillTelephoneFill className="footer-icon" />
              <a href="mailto:contact@dentalic.com" className="footer-link">
                contact@dentalic.com
              </a>
            </div>
            <div className="footer-detail">
              <FaEnvelope className="footer-icon" />
              <a href="tel:012 564 47 65" className="footer-link">
                012 564 47 65
              </a>
            </div>
            <div className="footer-detail">
              <FaLocationDot className="footer-icon" />
              <p>BroadCast Drive Charlotte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
