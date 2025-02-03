// this Code is for floating fixed icons of all the social media and they do work .
//This comp has it's own css file in same folder .

import React, { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaBars, // Import the hamburger icon
} from "react-icons/fa"; // Import necessary icons
import "./FixedIcons.css"; // Import the CSS file

const FixedIcons = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state on hamburger click
  };

  return (
    <div className="fixed-icons-container">
      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FaBars
          size={30}
          className={`hamburger-icon ${isOpen ? "rotate" : ""}`}
        />
      </div>

      {/* Icons container */}
      <div className={`fixed-icons ${isOpen ? "open" : ""}`}>
        <a
          href="https://api.whatsapp.com/send/?phone=919224448861&text=Hello%2C+I%27m+interested+in+the+property%3A+Lodha+Bellissimo+%40+Matunga+East&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="icon whatsapp"
        >
          <FaWhatsapp size={30} />
        </a>
        <a
          href="https://www.instagram.com/reflex_realty/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <FaInstagram size={30} />
        </a>
        <a href="#" className="icon email">
          <FaEnvelope size={30} />
        </a>
        <a
          href="https://in.linkedin.com/company/reflex-realty-&-financial-consultants-pvt-ltd-" // Replace with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://maps.app.goo.gl/h34Yg1p21PNAXg16A" // Replace with your desired location
          target="_blank"
          rel="noopener noreferrer"
          className="icon map"
        >
          <FaMapMarkerAlt size={30} />
        </a>
      </div>
    </div>
  );
};

export default FixedIcons;
