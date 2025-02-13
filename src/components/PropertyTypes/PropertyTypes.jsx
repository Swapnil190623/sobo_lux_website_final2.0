// import { motion } from "framer-motion";

// const propertyTypes = [
//   {
//     title: "Sea Facing",
//     image:
//       "https://images.pexels.com/photos/4321422/pexels-photo-4321422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     title: "Exclusive Villa",
//     image:
//       "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     title: "Sky-High",
//     image:
//       "https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     title: "Duplex",
//     image:
//       "https://images.pexels.com/photos/9892600/pexels-photo-9892600.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
// ];

// const PropertyTypes = () => {
//   return (
//     <section className="relative py-20 px-6 lg:px-16">
//       {/* text matter */}

//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-4xl font-bold text-[#ffd586]"
//         >
//           Discover Our Premium Properties
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           className="mt-4 text-lg text-gray-300"
//         >
//           Explore the most exclusive residences in South Mumbai
//         </motion.p>
//       </div>

//       {/* Cards Section */}
//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {propertyTypes.map((property, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
//             className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={property.image}
//               alt={property.title}
//               className="w-full h-40 object-cover rounded-lg"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
//             <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
//               {property.title}
//             </h3>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PropertyTypes;




// type 2 

import { motion } from "framer-motion";
import { useState } from "react";

const propertyTypes = [
  {
    title: "Sea Facing",
    image: "https://images.pexels.com/photos/9892600/pexels-photo-9892600.png",
    description: "Wake up to the sound of waves and ocean breezes.",
  },
  {
    title: "Exclusive Villa",
    image:
      "https://images.pexels.com/photos/25212102/pexels-photo-25212102/free-photo-of-facade-of-small-tenement.jpeg",
    description: "Private luxury villas with modern interiors.",
  },
  {
    title: "Sky-High",
    image:
      "https://images.pexels.com/photos/28542175/pexels-photo-28542175/free-photo-of-black-and-white-modern-indoor-staircase.jpeg",
    description: "Live in the clouds with panoramic city views.",
  },
  {
    title: "Duplex",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    description: "Spacious, modern multi-level apartments.",
  },
];

const PropertyTypes = () => {
  return (
    <section className="py-20 px-6 lg:px-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#ffd586] tracking-wide">
          Explore Our Luxury Properties
        </h2>
        <p className="text-gray-300 mt-2 text-lg">
          Handpicked residences designed for exclusivity.
        </p>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {propertyTypes.map((property, index) => (
          <motion.div
            key={index}
            className="relative w-full h-80 rounded-xl overflow-hidden perspective"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Card Wrapper */}
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 rounded-xl shadow-lg transition duration-500 group-hover:shadow-xl">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <h3 className="text-xl font-semibold text-white mt-4">
                  {property.title}
                </h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-black text-white rounded-xl flex items-center justify-center transform rotate-y-180 opacity-0 group-hover:opacity-100 group-hover:rotate-y-0 transition-opacity duration-700">
                <p className="text-lg font-medium p-4 text-center">
                  {property.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
