//Currently Using Version .

import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials/Testimonials.jsx"
import Video from "../../components/Video/Video.jsx"
import { useParams, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";
import Logo2 from "../../assets/Logo2.jpeg";





function AboutUs() {

  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Clipped Background Image */}
        <motion.div
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center brightness-50"
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)", // Unique diagonal cut shape
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        {/* Text Content */}
        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold text-gold font-playfair">
            Redefining Luxury Living
          </h1>
          <p className="text-lg text-gray-300 mt-4 font-inter">
            Where architecture meets art, and homes become masterpieces.
            Discover exclusivity beyond imagination.
          </p>
        </motion.div>
      </section>

      {/* Our Vision */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-[#ffd586] font-playfair"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Vision
        </motion.h2>
        <p className="text-lg text-gray-400 mt-4 font-inter max-w-3xl mx-auto">
          To curate a collection of extraordinary residences that exemplify
          sophistication, elegance, and exclusivity. Our passion for perfection
          ensures that every property we present is not just a home, but a
          legacy.
        </p>
      </section>

      {/* About Details */}
      <section className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto py-20 px-6">
        {/* Image Section */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gold opacity-20 blur-3xl"></div>
          <img
            // src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

            src= {Logo2}
            className="rounded-2xl w-full max-w-sm object-contain shadow-xl backdrop-blur-lg bg-opacity-10 border border-white/20"
            alt="Luxury Real Estate"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gold font-playfair">
            Experience Unparalleled Elegance
          </h2>
          <p className="text-lg text-gray-400 mt-4 font-inter leading-relaxed">
            At our core, we believe in offering nothing less than perfection.
            Every home we present tells a story of opulence, heritage, and
            world-class craftsmanship.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-12 mt-10">
            <div>
              <h3 className="text-5xl font-bold text-gold font-playfair">
                50+
              </h3>
              <p className="text-gray-400 text-lg">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-gold font-playfair">
                17,000
              </h3>
              <p className="text-gray-400 text-lg">Prestigious Estates</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-gold font-playfair">
                10,000+
              </h3>
              <p className="text-gray-400 text-lg">Exclusive Clients</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
       

        {/* Team Members */}

        
        <div className="bg-transparent">
          <Testimonials/>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24  text-white text-center">
        <h2 className="text-5xl font-bold font-playfair">
          Find Your Dream Property Today
        </h2>
        <p className="text-lg mt-4 font-inter">
          Get exclusive access to the most luxurious homes in the world.
        </p>
        <motion.button
          className="mt-8 px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-opacity-80 transition-all duration-500"
          onClick={() => navigate("/")}
          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Explore Listings
        </motion.button>

        <Video/>
      </section>
    </div>
  );
}

export default AboutUs;
