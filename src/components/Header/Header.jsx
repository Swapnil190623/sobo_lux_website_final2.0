// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   return (
//     <header className="fixed top-0 inset-x-0 z-50 w-full bg-neutral-800 text-white shadow-md">
//       <nav className="flex items-center justify-between max-w-6xl mx-auto p-4">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="Company Logo" className="h-10" />
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           className="block md:hidden p-2 rounded-md focus:outline-none"
//           onClick={toggleMobileMenu}
//         >
//           {isMobileMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex space-x-6 justify-end items-center flex-grow">
//           <NavLink
//             to="/"
//             className="text-sm hover:text-gray-400 transition"
//             activeClassName="text-indigo-500"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/projects"
//             className="text-sm hover:text-gray-400 transition"
//             activeClassName="text-indigo-500"
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/about"
//             className="text-sm hover:text-gray-400 transition"
//             activeClassName="text-indigo-500"
//           >
//             About
//           </NavLink>
//           <Link
//             to="/contact"
//             className="bg-white text-neutral-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-neutral-800 text-white flex flex-col items-center space-y-4 py-4">
//           <NavLink
//             to="/"
//             className="text-sm hover:text-gray-400 transition"
//             activeClassName="text-indigo-500"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/properties"
//             className="text-sm hover:text-gray-400 transition"
//             activeClassName="text-indigo-500"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Properties
//           </NavLink>
//           <NavLink
//             to="/about"
//             className="text-sm hover:text-gray-400 transition"
//             activeClassName="text-indigo-500"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             About
//           </NavLink>
//           <Link
//             to="/contact"
//             className="bg-white text-neutral-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", route: "/" },

    { name: "Projects", route: "/projects" },
    { name: "Services", route: "/services" },
    { name: "About", route: "/aboutus" },
    { name: "Contact", route: "/contact" },
  ];

  const handleNavigation = (route) => {
    navigate(route);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-white font-semibold shadow-md tracking-wide relative z-50 ">
      <motion.div
        className="flex flex-wrap items-center justify-between gap-4 px-4 md:px-10 py-3 sm:py-4 min-h-[60px] sm:min-h-[70px] relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.button
          onClick={() => handleNavigation("/")}
          className="flex justify-center lg:justify-start focus:outline-none"
          aria-label="Home"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={logo}
            alt="Reflex Logo"
            className="w-32 sm:w-36" // Adjust logo size for smaller screens
          />
        </motion.button>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden lg:flex ml-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <ul className="flex gap-x-5">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                className="relative group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              >
                <motion.button
                  onClick={() => handleNavigation(item.route)}
                  className="text-gray-300 block tracking-wider font-semibold text-base sm:text-lg transition-all duration-300 ease-in-out relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="z-10">{item.name}</span>
                </motion.button>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FFD586] to-[#FFCC33] transform transition-all duration-300 ease-in-out group-hover:w-full" />
              </motion.li>
            ))}
          </ul>
          <ul>
            <div className="flex items-center ml-6">
              <motion.a
                href="https://api.whatsapp.com/send/?phone=919224448861&text=Hello%2C+I%27m+interested+in+the+property%3A+Lodha+Bellissimo+%40+Matunga+East&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600"
                aria-label="Chat with us on WhatsApp"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                />
              </motion.a>
            </div>
          </ul>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          {!isMenuOpen && (
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white focus:outline-none"
              aria-label="Open Menu"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          )}

          {isMenuOpen && (
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-[#ffd586] focus:outline-none absolute top-4 right-4 z-50"
              aria-label="Close Menu"
              style={{ zIndex: 60 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <motion.div
            className="fixed top-0 left-0 w-1/2 min-w-[280px] bg-gray-950 h-full p-4 sm:p-6 shadow-md overflow-auto"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ type: "spring", stiffness: 300, ease: "easeIn" }}
          >
            <div className="mb-6">
              <button
                onClick={() => handleNavigation("/")}
                className="flex justify-start focus:outline-none"
                aria-label="Home"
              >
                <img src={logo} alt="Logo" className="w-24 sm:w-32" />
              </button>
            </div>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <motion.button
                    onClick={() => handleNavigation(item.route)}
                    className="w-full text-left text-[#ffd586] hover:text-gray-200 font-medium text-base sm:text-lg transition-all duration-300 ease-in-out"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
