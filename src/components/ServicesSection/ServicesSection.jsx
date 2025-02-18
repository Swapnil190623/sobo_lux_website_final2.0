// Currently Using Service Page Code ...

// import React, { useEffect, useState } from "react";
// import Image1 from "./Consultation.svg";
// import Image2 from "./buySell.svg";
// import Image3 from "./Leasing.svg";
// import Image4 from "./Investment.svg";
// import Image5 from "./Marketing1.svg";
// import Image6 from "./ProjectManagement.svg";

// // Service Card Component
// const ServiceCard = ({ image, title, description, index, visible }) => {
//   return (
//     <div
//       className={`transform transition duration-700 ease-out ${
//         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       } flex flex-col items-center space-y-4
//         p-4 sm:p-6 bg-black bg-opacity-20 backdrop-blur-2xl
//         rounded-xl border border-white/10
//         shadow-lg shadow-black/20
//         hover:border-gold hover:shadow-[#ffd586]`}
//       style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
//     >
//       <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gold rounded-full flex items-center justify-center">
//         <img src={image} alt={title} className="w-12 h-12 sm:w-16 sm:h-16" />
//       </div>
//       <h3 className="text-xl sm:text-2xl font-semibold text-white">{title}</h3>
//       <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
//     </div>
//   );
// };

// // Main Service Component
// const Service = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setVisible(true);
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className="relative bg-transparent py-20 px-8">
//       {/* Background Blur with Gradient Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-xl"></div>
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

//       <div className="max-w-screen-xl mx-auto text-center relative z-10">
//         {/* Animated Heading */}
//         <h2
//           className={`text-4xl sm:text-5xl font-bold text-white mb-16 transition-opacity duration-700 ease-out ${
//             visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           Luxury Real Estate Services
//         </h2>

//         {/* Service Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
//           {services.map((service, index) => (
//             <ServiceCard
//               key={index}
//               index={index}
//               image={service.image}
//               title={service.title}
//               description={service.description}
//               visible={visible}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Services Data
// const services = [
//   {
//     image: Image1,
//     title: "Property Consultation",
//     description:
//       "Explore exclusive properties in prime locations with top-tier amenities and unmatched quality.",
//   },
//   {
//     image: Image2,
//     title: "Buying and Selling Assistance",
//     description:
//       "Get personalized advice on luxury real estate investments with our experienced consultants.",
//   },
//   {
//     image: Image3,
//     title: "Leasing and Renting Services",
//     description:
//       "Discover luxury rentals offering comfort, elegance, and all-inclusive services for your convenience.",
//   },
//   {
//     image: Image4,
//     title: "Investment Advisory",
//     description:
//       "We handle all aspects of property management, ensuring maximum ROI and hassle-free experience.",
//   },
//   {
//     image: Image5,
//     title: "Marketing & Promotion",
//     description:
//       "Experience 360° virtual tours of properties, offering you a detailed and immersive viewing experience.",
//   },
//   {
//     image: Image6,
//     title: "Project Management",
//     description:
//       "Stay ahead with real-time market data, property trends, and analysis to make informed decisions.",
//   },
// ];

// export default Service;

// new code testing here ..

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image1 from "./property_consultation.svg";
import Image2 from "./buy_sell.svg";
import Image3 from "./leasing_services.svg";
import Image4 from "./investment.svg";
import Image5 from "./Markenting_Sobo.svg";
import Image6 from "./Project_Management.svg";

// Service Card Component
const ServiceCard = ({ image, title, description, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center space-y-4 p-6 bg-black bg-opacity-20 backdrop-blur-2xl 
        rounded-xl border border-white/10 shadow-lg shadow-black/20 
        hover:border-gold hover:shadow-[#ffd586]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
        <img src={image} alt={title} className="w-16 h-16" />
      </div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      {/* <p className="text-gray-300 text-sm text-center">{description}</p> */}
    </motion.div>
  );
};

// Main Service Component
const Service = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center brightness-50"
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        {/* Hero Text */}
        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold text-gold font-playfair">
            Luxury Real Estate Services
          </h1>
          <p className="text-lg text-gray-300 mt-4 font-inter">
            Elevating property experiences with exclusivity, sophistication, and
            expertise.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-[#ffd586] font-playfair"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Premium Services
        </motion.h2>
        <p className="text-lg text-gray-400 mt-4 font-inter max-w-3xl mx-auto">
          From consultation to investment advisory, experience unparalleled
          luxury service in real estate.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

// Services Data
const services = [
  {
    image: Image1,
    title: "Property Consultation",
    description:
      "Explore exclusive properties in prime locations with top-tier amenities and unmatched quality.",
  },
  {
    image: Image2,
    title: "Buying and Selling Assistance",
    description:
      "Get personalized advice on luxury real estate investments with our experienced consultants.",
  },
  {
    image: Image3,
    title: "Leasing and Renting Services",
    description:
      "Discover luxury rentals offering comfort, elegance, and all-inclusive services for your convenience.",
  },
  {
    image: Image4,
    title: "Investment Advisory",
    description:
      "We handle all aspects of property management, ensuring maximum ROI and hassle-free experience.",
  },
  {
    image: Image5,
    title: "Marketing & Promotion",
    description:
      "Experience 360° virtual tours of properties, offering you a detailed and immersive viewing experience.",
  },
  {
    image: Image6,
    title: "Project Management",
    description:
      "Stay ahead with real-time market data, property trends, and analysis to make informed decisions.",
  },
];

export default Service;
