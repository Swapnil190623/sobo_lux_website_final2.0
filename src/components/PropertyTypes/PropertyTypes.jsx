// import { motion } from "framer-motion";
// import { Link } from "react-router-dom"; // Import Link

// const propertyTypes = [
//   {
//     title: "Sea Facing",
//     image: "https://images.pexels.com/photos/9892600/pexels-photo-9892600.png",
//     description: "Wake up to the sound of waves and ocean breezes.",
//   },
//   {
//     title: "Exclusive Villa",
//     image:
//       "https://images.pexels.com/photos/25212102/pexels-photo-25212102/free-photo-of-facade-of-small-tenement.jpeg",
//     description: "Private luxury villas with modern interiors.",
//   },
//   {
//     title: "Sky-High",
//     image:
//       "https://images.pexels.com/photos/28542175/pexels-photo-28542175/free-photo-of-black-and-white-modern-indoor-staircase.jpeg",
//     description: "Live in the clouds with panoramic city views.",
//   },
//   {
//     title: "Duplex",
//     image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
//     description: "Spacious, modern multi-level apartments.",
//   },
// ];

// const PropertyTypes = () => {
//   return (
//     <section className="py-20 px-6 lg:px-16">
//       {/* Section Title */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-[#ffd586] tracking-wide">
//           Explore Our Luxury Properties
//         </h2>
//         <p className="text-gray-300 mt-2 text-lg">
//           Handpicked residences designed for exclusivity.
//         </p>
//       </div>

//       {/* Property Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {propertyTypes.map((property, index) => (
//           <Link to="/projects" key={index} className="block">
//             <motion.div
//               className="relative w-full h-96 rounded-xl overflow-hidden bg-cover bg-center group shadow-lg cursor-pointer"
//               style={{ backgroundImage: `url(${property.image})` }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               {/* Soft Dark Overlay (keeps image visible) */}
//               <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/60" />

//               {/* Title (Visible by default) */}
//               <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-500 group-hover:opacity-0">
//                 <h3 className="text-2xl font-semibold">{property.title}</h3>
//               </div>

//               {/* Hover Reveal - Description */}
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-center">
//                 <p className="text-lg font-medium text-white">
//                   {property.description}
//                 </p>
//               </div>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PropertyTypes;

//animated

// new animated and currently working ..

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const propertyTypes = [
  {
    title: "Sea Facing",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",

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
    image: "https://images.pexels.com/photos/9892600/pexels-photo-9892600.png",
    description: "Spacious, modern multi-level apartments.",
  },
];

const PropertyTypes = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-16">
      {/* Animated Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }} // Slower animation for more luxury feel
        className="text-center mb-12"
      >
        <h2 className=" font-bold text-4xl  bg-gradient-to-r from-[#E8C27E] via-[#D9A441] via-50% to-[#F1E2C3] text-transparent bg-clip-text font-playfair drop-shadow-lg tracking-wider">
          Explore Our Luxury Properties
        </h2>
        <p className="text-gray-300 mt-2 text-lg">
          Handpicked residences designed for exclusivity.
        </p>
      </motion.div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {propertyTypes.map((property, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });

          return (
            <Link to="/projects" key={index} className="block" ref={ref}>
              <motion.div
                className="relative w-full h-96 rounded-xl overflow-hidden bg-cover bg-center group shadow-lg cursor-pointer"
                style={{ backgroundImage: `url(${property.image})` }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 1, // Slower transition for luxury effect
                  delay: index * 0.2, // Slight delay for a staggered effect
                  ease: "easeInOut", // Elegant easing function
                }}
              >
                {/* Soft Dark Overlay (keeps image visible) */}
                <div className="absolute inset-0 bg-black/30 transition-all duration-700 group-hover:bg-black/60" />{" "}
                {/* Slower hover effect */}
                {/* Title (Visible by default) */}
                <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-500 group-hover:opacity-0">
                  <h3 className="text-2xl font-semibold">{property.title}</h3>
                </div>
                {/* Hover Reveal - Description */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-6 text-center">
                  <p className="text-lg font-medium text-white">
                    {property.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PropertyTypes;
