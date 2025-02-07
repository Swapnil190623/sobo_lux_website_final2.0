//Animated + Fixed Image Issue .

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Image1 from "./Luxury_Property.svg";
import Image2 from "./Legacy.svg";
import Image3 from "./Client.svg";
import Image4 from "./EndToEnd.svg";

function Content() {
  // Ref for the section
  const sectionRef = useRef(null);

  // Use useInView to detect when the section is visible
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section ref={sectionRef} className="text-gray-600 body-font">
      <motion.div
        className="container px-5 py-24 mx-auto max-w-[1200px]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div
          className="flex flex-col text-center w-full mb-16"
          variants={cardVariants}
        >
          <h2 className="text-2xl text-[#ffd586] tracking-widest font-bold uppercase mb-2">
            Why Choose Sobo Luxe ?
          </h2>
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-gray-300">
            Explore Premium Properties in South Bombay
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-semibold text-gray-400">
            "Your Trusted Partner in Finding Exclusive Properties in South
            Mumbai"
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div className="flex flex-wrap -m-4 text-center rounded-lg">
          {/* Service 1 */}
          {/* <motion.div className="xl:w-1/4 md:w-1/2 p-4" variants={cardVariants}>
            <div className="bg-white/20 backdrop-blur-lg border border-white/20 p-6 rounded-3xl hover:scale-105 transform transition duration-300 h-[200px]">
              <div className="w-16 h-16 inline-flex items-center justify-center text-white mb-4">
                <img
                  src={Image1}
                  alt="Service"
                  className="w-16 h-16 rounded-full object-contain"
                />
              </div>
              <h2 className="text-lg text-white font-bold title-font mb-3">
                Exclusive Luxury Listings
              </h2>
            </div>
          </motion.div> */}

          <motion.div className="xl:w-1/4 md:w-1/2 p-4" variants={cardVariants}>
            <div className="bg-white/20 backdrop-blur-lg border border-[#ffd586] p-6 rounded-3xl hover:scale-105 transform transition duration-300 h-[200px]">
              <div className="w-16 h-16 inline-flex items-center justify-center text-white mb-4">
                <img
                  src={Image1}
                  alt="Service"
                  className="w-16 h-16 rounded-full object-contain"
                />
              </div>
              <h2 className="text-lg text-white font-bold title-font mb-3">
                Exclusive Luxury Listings
              </h2>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div className="xl:w-1/4 md:w-1/2 p-4" variants={cardVariants}>
            <div className="bg-white/20 backdrop-blur-lg border border-[#ffd586]  p-6 rounded-3xl hover:scale-105 transform transition duration-300 h-[200px]">
              <div className="w-16 h-16 inline-flex items-center justify-center text-white mb-4">
                <img
                  src={Image2}
                  alt="Service"
                  className="w-16 h-16 rounded-full object-contain "
                />
              </div>
              <h2 className="text-lg text-white font-bold title-font mb-3">
                50+ Years of Legacy
              </h2>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div className="xl:w-1/4 md:w-1/2 p-4" variants={cardVariants}>
            <div className="bg-white/20 backdrop-blur-lg border border-[#ffd586]  p-6 rounded-3xl hover:scale-105 transform transition duration-300 h-[200px]">
              <div className="w-16 h-16 inline-flex items-center justify-center text-white mb-4">
                <img
                  src={Image3}
                  alt="Service"
                  className="w-16 h-16 rounded-full object-contain"
                />
              </div>
              <h2 className="text-lg text-white font-bold title-font mb-3">
                Client-Centric Approach
              </h2>
            </div>
          </motion.div>

          {/* Service 4 */}
          <motion.div className="xl:w-1/4 md:w-1/2 p-4" variants={cardVariants}>
            <div className="bg-white/20 backdrop-blur-lg border border-[#ffd586]  p-6 rounded-3xl hover:scale-105 transform transition duration-300 h-[200px]">
              <div className="w-16 h-16 inline-flex items-center justify-center text-white mb-4">
                <img
                  src={Image4}
                  alt="Service"
                  className="w-16 h-16 rounded-full object-contain"
                />
              </div>
              <h2 className="text-lg text-white font-bold title-font mb-3">
                End-to-End Services
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Content;
