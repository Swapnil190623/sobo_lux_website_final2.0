import React from "react";

import ScrollableRow from "../../components/ScrollableRow/ScrollableRow";
import Data from "../../data/Data";
import DisplayLocationCard from "../../components/DisplayCard/DisplayLocationCard";

import Content from "../../components/Content/Content";
import Banner from "../../components/Banner/Banner";
import Video from "../../components/Video/Video.jsx"

import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";

import { motion } from "framer-motion";

import Banner2 from "../../components/Banner/Banner2.jsx";
import HeroSection from "../../components/Hero/HeroSection.jsx";
import PropertyCard from "../../components/PropertyCard/PropertyCard.jsx";
import PropertyTypes from "../../components/PropertyTypes/PropertyTypes.jsx";

function Home() {
  return (
    <>
      {/* <QRCodePopup /> */}
      <HeroSection />
      {/* DisplayCard */}
      <section
        className="p-6 mt-2 "
        style={{ maxWidth: "1200px", margin: "auto" }}
      >
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-200 tracking-wide
          ">
            Exclusive Homes. Iconic Views. Unmatched Luxury.
          </h2>
          <p className="text-gray-400 text-lg font-semibold">
            Discover exclusive residential and commercial properties in South
            Mumbai’s iconic neighborhoods
          </p>
        </motion.div>

        {Data.DisplayCardData1 && Data.DisplayCardData1.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ScrollableRow scrollAmount={300}>
              {Data.DisplayCardData1.map((ele, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <DisplayLocationCard
                    title={ele.title}
                    image={ele.image}
                    // Add other props as needed
                  />
                </motion.div>
              ))}
            </ScrollableRow>
          </motion.div>
        ) : (
          <div className="text-center text-gray-500">
            No properties available.
          </div>
        )}
      </section>

      {/* Featured Projects will be displayd Here . this will display the projects ,  passing projectsData2 data here */}
      <section className="p-6 " style={{ maxWidth: "1200px", margin: "auto" }}>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#ffd586] tracking-wider">
            Featured Luxury Homes
          </h2>
          <p className="text-gray-400 text-lg font-semibold">
            Browse exclusive properties with premium amenities and stunning
            views
          </p>
        </div>
        {Data.ReflexProjectData && Data.ReflexProjectData.length > 0 ? (
          <ScrollableRow scrollAmount={300}>
            {Data.ReflexProjectData.map((ele, index) => (
              <ProjectCard property={ele} />
            ))}
          </ScrollableRow>
        ) : (
          <div className="text-center text-gray-500">
            No properties available Here .
          </div>
        )}
      </section>

      {/* All Projects Are displayed here ... */}
      <section className="p-6 " style={{ maxWidth: "1200px", margin: "auto" }}>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#ffd586] tracking-wider ">
            Explore Sobo's Luxury Projects
          </h2>
          <p className="text-gray-400 text-lg font-semibold">
            Find your perfect property from our wide range of projects.
          </p>
        </div>
        {Data.ProjectData1 && Data.ProjectData1.length > 0 ? (
          <ScrollableRow scrollAmount={300}>
            {Data.ProjectData1.map((ele, index) => (
              <ProjectCard property={ele} />
            ))}
          </ScrollableRow>
        ) : (
          <div className="text-center text-gray-500">
            No properties available Here .
          </div>
        )}
      </section>
{/* 
      {/* All Properties Are displayed here ... */}
      {/* <section className="p-6 " style={{ maxWidth: "1200px", margin: "auto" }}>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#ffd586]">
            Discover Properties With Sobo Luxe
          </h2>
          <p className="text-gray-400 text-lg font-semibold">
            Find your perfect property from our wide range of projects.
          </p>
        </div>
        {Data.PropertyData2 && Data.PropertyData2.length > 0 ? (
          <ScrollableRow scrollAmount={300}>
            {Data.PropertyData2.map((ele, index) => (
              <PropertyCard property={ele} />
            ))}
          </ScrollableRow>
        ) : (
          <div className="text-center text-gray-500">
            No properties available Here .
          </div>
        )}
      </section> */} 


     {/* All Properties Are displayed here ... */}
<section className="p-6" style={{ maxWidth: "1200px", margin: "auto" }}>
  <div className="text-center mb-6">
    <h2 className="text-3xl font-bold text-[#ffd586] tracking-wider ">
      Discover Properties With Sobo Luxe
    </h2>
    <p className="text-gray-400 text-lg font-semibold">
      Find your perfect property from our wide range of projects.
    </p>
  </div>

  {Data.PropertyData2 && Data.PropertyData2.length > 0 ? (
    <ScrollableRow scrollAmount={300}>
      {Data.PropertyData2
        .slice() // Create a copy to avoid mutating original data
        .sort((a, b) => {
          const getPriceValue = (price) => {
            if (!price) return 0;
            const num = price.replace(/₹|,/g, "").trim().toLowerCase();
            if (num.includes("cr")) return parseFloat(num) * 10000000; // Convert Cr to numerical value
            if (num.includes("lakh")) return parseFloat(num) * 100000; // Convert Lakh to numerical value
            return parseFloat(num); // If it's already a number
          };

          return getPriceValue(b.price) - getPriceValue(a.price); // Sort in descending order
        })
        .map((ele, index) => (
          <PropertyCard key={index} property={ele} />
        ))}
    </ScrollableRow>
  ) : (
    <div className="text-center text-gray-500">
      No properties available here.
    </div>
  )}
</section>



      <Content />

      <PropertyTypes/>

      {/* <Banner /> */}

      {/* <Banner2 /> */}

      <Video/>
      

      <br />
    </>
  );
}

export default Home;
