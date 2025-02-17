// // animated footer working Properly .

// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
//   FaPhoneAlt, // Mobile Phone Icon
//   FaWhatsapp, // WhatsApp Icon
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./Footer.css";
// import logo from "../../assets/logo.png";

// const Footer = () => {
//   // Setting up the observer hooks
//   const { ref: leftRef, inView: leftInView } = useInView({
//     triggerOnce: true, // Trigger animation once when in view
//     threshold: 0.2, // Start animation when 20% of the section is in view
//   });

//   const { ref: middleRef, inView: middleInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const { ref: rightRef, inView: rightInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const { ref: disclaimerRef, inView: disclaimerInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const { ref: privacyPolicyRef, inView: privacyPolicyInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const { ref: bottomRef, inView: bottomInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <footer className="footer">
//       <div className="footer-container innerWidth paddings">
//         {/* Left Column */}
//         <motion.div
//           ref={leftRef}
//           className="footer-column "
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: leftInView ? 1 : 0, x: leftInView ? 0 : -50 }}
//           transition={{ duration: 0.5 }}
//         >
//           <img src={logo} alt="Reflex Logo" className="footer-logo" />
//           {/* <p className="footer-contact mt-4">
//             <strong>Head Office</strong>
//             <br />
//             Suite 301, Turf View,
//             <br />
//             63, Dadarkar Compound,
//             <br />
//             Opp. Tardeo Rd, Tardeo,
//             <br />
//             Mumbai, Maharashtra 400034
//             <br />
//             Tel: 022-23530606 / 022-23537474
//             <br />
//             Email:{" "}
//             <a href="mailto:reflexrealty.mumbai@gmail.com?subject=Inquiry&body=Hello, I would like more information about your Properties & Services .">
//               reflexrealty.mumbai@gmail.com
//             </a>
//           </p> */}
//         </motion.div>

//         {/* Middle Column */}
//         <motion.div
//           ref={middleRef}
//           className="footer-column"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: middleInView ? 1 : 0, x: middleInView ? 0 : 50 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3>Quick Links</h3>
//           <ul className="footer-links ">
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/services">Services</NavLink>
//             </li>
//             <li>
//               <NavLink to="/aboutus">About Us</NavLink>
//             </li>
//             <li>
//               <NavLink to="/projects">Projects</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact</NavLink>
//             </li>
//           </ul>
//         </motion.div>

//         {/* Right Column */}
//         <motion.div
//           ref={rightRef}
//           className="footer-column"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: rightInView ? 1 : 0, x: rightInView ? 0 : -50 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3>Contact Us</h3>
//           <p className="footer-contact">
//             <strong>Address</strong>
//             <br />
//             Suite 301, Turf View,
//             <br />
//             63, Dadarkar Compound,
//             <br />
//             Opp. Tardeo Rd, Tardeo,
//             <br />
//             Mumbai, Maharashtra 400034
//             <br />
//             Email:{" "}
//             <a href="mailto:reflexrealty.mumbai@gmail.com?subject=Inquiry&body=Hello, I would like more information about your Properties & Services .">
//               reflexrealty.mumbai@gmail.com
//             </a>
//           </p>

//           {/* Social Media Icons */}
//           <motion.div
//             className="footer-social-media"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: rightInView ? 1 : 0, y: rightInView ? 0 : 20 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <a
//               href="https://www.facebook.com/reflexrealty/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="https://in.linkedin.com/company/reflex-realty-&-financial-consultants-pvt-ltd-"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedinIn />
//             </a>
//             <a
//               href="https://www.instagram.com/reflex_realty/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="tel:+919224448861"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaPhoneAlt />
//             </a>
//             <a
//               href="https://wa.me/919224448861"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaWhatsapp />
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Disclaimer and Privacy Policy Section */}
//       <motion.div
//         ref={disclaimerRef}
//         className="footer-disclaimer-section"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: disclaimerInView ? 1 : 0 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//       >
//         <motion.div
//           className="footer-disclaimer"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{
//             opacity: disclaimerInView ? 1 : 0,
//             x: disclaimerInView ? 0 : -50,
//           }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3>Disclaimer</h3>
//           <p>
//             All plans, designs, visuals, images, and specifications are for
//             representation only and subject to necessary approvals. Prospective
//             buyers should verify details independently before making any
//             decisions.
//           </p>
//         </motion.div>
//         <motion.div
//           className="footer-privacy-policy"
//           ref={privacyPolicyRef}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{
//             opacity: privacyPolicyInView ? 1 : 0,
//             x: privacyPolicyInView ? 0 : 50,
//           }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3>Privacy Policy</h3>
//           <p>
//             We collect your name and phone number when you register or fill out
//             a form on our site. This information helps us understand your
//             preferences and personalize your experience. Your data is used
//             solely for the stated purpose and handled responsibly.
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* Bottom Section */}
//       <motion.div
//         ref={bottomRef}
//         className="footer-bottom"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: bottomInView ? 1 : 0 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//       >
//         <p>© {new Date().getFullYear()} Reflex Realty. All rights reserved.</p>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;

// // //new footer with proper aligbment ..

import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <ul className="footer-nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info & Social Icons */}
        <div className="footer-contact">
          <p className="footer-address ">
            Suite 301, Turf View, 63, Dadarkar Compound, Opp. Tardeo Rd, Tardeo,
            Mumbai, Maharashtra 400034
          </p>
          <p className="footer-email">
            Email:{" "}
            <a href="mailto:reflexrealty.mumbai@gmail.com">
              reflexrealty.mumbai@gmail.com
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="footer-social">
            <a
              href="https://www.facebook.com/reflexrealty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://in.linkedin.com/company/reflex-realty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/reflex_realty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="tel:+919224448861">
              <FaPhoneAlt />
            </a>
            <a
              href="https://wa.me/919224448861"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Reflex Realty. All rights reserved.</p>
        <p className="footer-disclaimer">
          Disclaimer: The information provided on this website is for general
          informational purposes only and is not intended as legal or
          professional advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
