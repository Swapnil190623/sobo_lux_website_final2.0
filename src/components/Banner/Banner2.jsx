//animated

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Banner2 = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleExploreClick = () => {
    navigate("/properties"); // Navigate to the /properties route
  };

  return (
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 rounded-3xl overflow-hidden mx-4 sm:mx-auto sm:max-w-4xl lg:max-w-6xl">
      {/* Background Image */}
      <img
        src="https://cdn.pixabay.com/photo/2021/02/09/20/45/architecture-5999913_1280.jpg"
        alt="Banner Image 2"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // Start position (invisible and slightly down)
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 50,
            }} // Animate to full opacity and move up when in view
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-50 h-full flex flex-col justify-center items-center text-center text-white px-6 py-8 sm:py-12 lg:py-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 20,
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
            >
              Explore With Reflex Realty
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 20,
              }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-md sm:max-w-lg mx-auto"
            >
              Start your journey. Discover your dream property today!
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{
                opacity: inView ? 1 : 0,
              }}
              transition={{ duration: 0.6, delay: 0.7 }}
              type="button"
              onClick={handleExploreClick}
              className="mt-6 sm:mt-8 bg-transparent text-white text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Explore
            </motion.button>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default Banner2;
