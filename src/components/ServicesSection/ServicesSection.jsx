// currenly using ..

// import React, { useEffect, useState } from "react";

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
//       {/* Background Blur */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-xl z-0"></div>

//       <div className="max-w-screen-xl mx-auto text-center relative z-10">
//         <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
//           Luxury Real Estate Services
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
//           {/* Service 1 */}
//           <div
//             className={`transform transition duration-700 ease-out ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             } flex flex-col items-center space-y-6`}
//             style={{ transitionDelay: "0.2s" }}
//           >
//             <div className="w-24 h-24 bg-gold rounded-full flex items-center  justify-center">
//               <i className="fas fa-home text-3xl text-white"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-white">
//               Luxury Property Listings
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Explore exclusive properties in prime locations with top-tier
//               amenities and unmatched quality.
//             </p>
//           </div>

//           {/* Service 2 */}
//           <div
//             className={`transform transition duration-700 ease-out ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             } flex flex-col items-center space-y-6`}
//             style={{ transitionDelay: "0.4s" }}
//           >
//             <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
//               <i className="fas fa-headset text-3xl text-white"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-white">
//               Consulting Services
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Get personalized advice on luxury real estate investments with our
//               experienced consultants.
//             </p>
//           </div>

//           {/* Service 3 */}
//           <div
//             className={`transform transition duration-700 ease-out ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             } flex flex-col items-center space-y-6`}
//             style={{ transitionDelay: "0.6s" }}
//           >
//             <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
//               <i className="fas fa-key text-3xl text-white"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-white">
//               Exclusive Rentals
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Discover luxury rentals offering comfort, elegance, and
//               all-inclusive services for your convenience.
//             </p>
//           </div>

//           {/* Service 4 */}
//           <div
//             className={`transform transition duration-700 ease-out ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             } flex flex-col items-center space-y-6`}
//             style={{ transitionDelay: "0.8s" }}
//           >
//             <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
//               <i className="fas fa-cogs text-3xl text-white"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-white">
//               Property Management
//             </h3>
//             <p className="text-gray-300 text-sm">
//               We handle all aspects of property management, ensuring maximum ROI
//               and hassle-free experience.
//             </p>
//           </div>

//           {/* Service 5 */}
//           <div
//             className={`transform transition duration-700 ease-out ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             } flex flex-col items-center space-y-6`}
//             style={{ transitionDelay: "1s" }}
//           >
//             <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
//               <i className="fas fa-eye text-3xl text-white"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-white">Virtual Tours</h3>
//             <p className="text-gray-300 text-sm">
//               Experience 360° virtual tours of properties, offering you a
//               detailed and immersive viewing experience.
//             </p>
//           </div>

//           {/* Service 6 */}
//           <div
//             className={`transform transition duration-700 ease-out ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             } flex flex-col items-center space-y-6`}
//             style={{ transitionDelay: "1.2s" }}
//           >
//             <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
//               <i className="fas fa-chart-line text-3xl text-white"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-white">
//               Market Insights
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Stay ahead with real-time market data, property trends, and
//               analysis to make informed decisions.
//             </p>
//           </div>

//           {/* Service 7 */}
//           <div
//             className={`transform transition duration-700 ease-out ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             } flex flex-col items-center space-y-6`}
//             style={{ transitionDelay: "1.4s" }}
//           >
//             <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
//               <i className="fas fa-dollar-sign text-3xl text-white"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-white">
//               Investment Opportunities
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Explore premium investment opportunities that ensure maximum
//               returns and long-term growth.
//             </p>
//           </div>

//           {/* Service 8 */}
//           <div
//             className={`transform transition duration-700 ease-out ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             } flex flex-col items-center space-y-6`}
//             style={{ transitionDelay: "1.6s" }}
//           >
//             <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
//               <i className="fas fa-paint-brush text-3xl text-white"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-white">Home Staging</h3>
//             <p className="text-gray-300 text-sm">
//               Enhance the appeal of your property with professional staging
//               services to attract premium buyers.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;

//test

// import React, { useEffect, useState } from "react";

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
//       {/* Background Blur */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-xl z-0"></div>

//       <div className="max-w-screen-xl mx-auto text-center relative z-10">
//         <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
//           Luxury Real Estate Services
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
//           {/* Service Cards */}
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`transform transition duration-700 ease-out ${
//                 visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               } flex flex-col items-center space-y-6
//                 p-6 bg-black bg-opacity-40
//                 rounded-xl border border-transparent
//                 hover:border-gold hover:shadow-[0_0_15px_rgba(255,215,0,0.6)]
//                 transition-all duration-300`}
//               style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
//             >
//               <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
//                 <i className={`fas ${service.icon} text-3xl text-white`}></i>
//               </div>
//               <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
//               <p className="text-gray-300 text-sm">{service.description}</p>
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
//     title: "Luxury Property Listings",
//     description:
//       "Explore exclusive properties in prime locations with top-tier amenities and unmatched quality.",
//   },
//   {
//     icon: "fa-headset",
//     title: "Consulting Services",
//     description:
//       "Get personalized advice on luxury real estate investments with our experienced consultants.",
//   },
//   {
//     icon: "fa-key",
//     title: "Exclusive Rentals",
//     description:
//       "Discover luxury rentals offering comfort, elegance, and all-inclusive services for your convenience.",
//   },
//   {
//     icon: "fa-cogs",
//     title: "Property Management",
//     description:
//       "We handle all aspects of property management, ensuring maximum ROI and hassle-free experience.",
//   },
//   {
//     icon: "fa-eye",
//     title: "Virtual Tours",
//     description:
//       "Experience 360° virtual tours of properties, offering you a detailed and immersive viewing experience.",
//   },
//   {
//     icon: "fa-chart-line",
//     title: "Market Insights",
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

import React, { useEffect, useState } from "react";

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
        {/* <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
          Luxury Real Estate Services
        </h2> */}

        {/* Animated Heading */}
        <h2
          className={`text-4xl sm:text-5xl font-bold text-white mb-16 transition-opacity duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Luxury Real Estate Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
          {/* Service Cards */}
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition duration-700 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } flex flex-col items-center space-y-4 
                p-4 sm:p-6 bg-black bg-opacity-20 backdrop-blur-2xl 
                rounded-xl border border-white/10 
                shadow-lg shadow-black/20
                hover:border-gold hover:shadow-[#ffd586]`}
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gold rounded-full flex items-center justify-center">
                <i className={`fas ${service.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Services Data
const services = [
  {
    icon: "fa-home",
    title: "Luxury Property Listings",
    description:
      "Explore exclusive properties in prime locations with top-tier amenities and unmatched quality.",
  },
  {
    icon: "fa-headset",
    title: "Consulting Services",
    description:
      "Get personalized advice on luxury real estate investments with our experienced consultants.",
  },
  {
    icon: "fa-key",
    title: "Exclusive Rentals",
    description:
      "Discover luxury rentals offering comfort, elegance, and all-inclusive services for your convenience.",
  },
  {
    icon: "fa-cogs",
    title: "Property Management",
    description:
      "We handle all aspects of property management, ensuring maximum ROI and hassle-free experience.",
  },
  {
    icon: "fa-eye",
    title: "Virtual Tours",
    description:
      "Experience 360° virtual tours of properties, offering you a detailed and immersive viewing experience.",
  },
  {
    icon: "fa-chart-line",
    title: "Market Insights",
    description:
      "Stay ahead with real-time market data, property trends, and analysis to make informed decisions.",
  },
  {
    icon: "fa-dollar-sign",
    title: "Investment Opportunities",
    description:
      "Explore premium investment opportunities that ensure maximum returns and long-term growth.",
  },
  {
    icon: "fa-paint-brush",
    title: "Home Staging",
    description:
      "Enhance the appeal of your property with professional staging services to attract premium buyers.",
  },
];

export default Service;
