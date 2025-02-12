// import React, { useEffect, useState } from "react";
// import Image1 from "./Consultation.svg";
// import Image2 from "./buySell.svg";
// import Image3 from "./Leasing.svg";
// import Image4 from "./Investment.svg";
// import Image5 from "./Marketing1.svg";
// import Image6 from "./ProjectManagement.svg";

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
//         {/* <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
//           Luxury Real Estate Services
//         </h2> */}

//         {/* Animated Heading */}
//         <h2
//           className={`text-4xl sm:text-5xl font-bold text-white mb-16 transition-opacity duration-700 ease-out ${
//             visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           Luxury Real Estate Services
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
//           {/* Service Cards */}
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`transform transition duration-700 ease-out ${
//                 visible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-10"
//               } flex flex-col items-center space-y-4
//                 p-4 sm:p-6 bg-black bg-opacity-20 backdrop-blur-2xl
//                 rounded-xl border border-white/10
//                 shadow-lg shadow-black/20
//                 hover:border-gold hover:shadow-[#ffd586]`}
//               style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
//             >
//               <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gold rounded-full flex items-center justify-center">
//                 <i className={`fas ${service.icon} text-3xl text-white`}></i>
//               </div>
//               <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                 {service.title}
//               </h3>
//               <p className="text-gray-300 text-xs sm:text-sm">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Services Data
// const services = [
//   {
//     icon: "fa-home",
//     title: "Property Consultation",
//     description:
//       "Explore exclusive properties in prime locations with top-tier amenities and unmatched quality.",
//   },
//   {
//     icon: "fa-headset",
//     title: "Buying and Selling Assistance",
//     description:
//       "Get personalized advice on luxury real estate investments with our experienced consultants.",
//   },
//   {
//     icon: "fa-key",
//     title: "Leasing and Renting Services",
//     description:
//       "Discover luxury rentals offering comfort, elegance, and all-inclusive services for your convenience.",
//   },
//   {
//     icon: "fa-cogs",
//     title: "Investment Advisory",
//     description:
//       "We handle all aspects of property management, ensuring maximum ROI and hassle-free experience.",
//   },
//   {
//     icon: "fa-eye",
//     title: "Marketing & Promotion",
//     description:
//       "Experience 360° virtual tours of properties, offering you a detailed and immersive viewing experience.",
//   },
//   {
//     icon: "fa-chart-line",
//     title: "Project Management",
//     description:
//       "Stay ahead with real-time market data, property trends, and analysis to make informed decisions.",
//   },
//   {
//     icon: "fa-dollar-sign",
//     title: "Investment Opportunities",
//     description:
//       "Explore premium investment opportunities that ensure maximum returns and long-term growth.",
//   },
//   {
//     icon: "fa-paint-brush",
//     title: "Home Staging",
//     description:
//       "Enhance the appeal of your property with professional staging services to attract premium buyers.",
//   },
// ];

// export default Service;

//new




import React, { useEffect, useState } from "react";
import Image1 from "./Consultation.svg";
import Image2 from "./buySell.svg";
import Image3 from "./Leasing.svg";
import Image4 from "./Investment.svg";
import Image5 from "./Marketing1.svg";
import Image6 from "./ProjectManagement.svg";

// Service Card Component
const ServiceCard = ({ image, title, description, index, visible }) => {
  return (
    <div
      className={`transform transition duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex flex-col items-center space-y-4 
        p-4 sm:p-6 bg-black bg-opacity-20 backdrop-blur-2xl 
        rounded-xl border border-white/10 
        shadow-lg shadow-black/20
        hover:border-gold hover:shadow-[#ffd586]`}
      style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gold rounded-full flex items-center justify-center">
        <img src={image} alt={title} className="w-12 h-12 sm:w-16 sm:h-16" />
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
    </div>
  );
};

// Main Service Component
const Service = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative bg-transparent py-20 px-8">
      {/* Background Blur with Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        {/* Animated Heading */}
        <h2
          className={`text-4xl sm:text-5xl font-bold text-white mb-16 transition-opacity duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Luxury Real Estate Services
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              image={service.image}
              title={service.title}
              description={service.description}
              visible={visible}
            />
          ))}
        </div>
      </div>
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


