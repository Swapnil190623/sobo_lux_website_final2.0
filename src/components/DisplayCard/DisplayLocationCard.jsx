




// //testing 
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const DisplayLocationCard = ({
//   title,
//   image,
//   label,
//   labelColor = "bg-red-500",
// }) => {
//   const locationQuery = encodeURIComponent(title);
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Link to={`/projects?location=${locationQuery}`}>
//       <motion.article
//         ref={ref}
//         className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-8 pt-40 w-full mx-auto 
//                    bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-transform duration-300 hover:scale-95"
//         style={{
//           maxWidth: "200px",
//           minWidth: "180px",
//           minHeight: "300px",
//         }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
//         transition={{ duration: 0.6 }}
//       >
//         {label && (
//           <motion.div
//             className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded-md z-10 ${labelColor} shadow-md`}
//             initial={{ scale: 0 }}
//             animate={{ scale: inView ? 1 : 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {label}
//           </motion.div>
//         )}
        
//         <motion.img
//           src={image}
//           alt={title}
//           className="absolute inset-0 h-full w-full object-cover rounded-2xl opacity-80"
//           style={{ borderRadius: "inherit" }}
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//         />
        
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 rounded-2xl"></div>
        
//         <motion.h3
//           className="z-10 text-xl font-bold text-white antialiased text-center"
//           whileHover={{ y: -5 }}
//           transition={{ duration: 0.3 }}
//         >
//           {title}
//         </motion.h3>
//       </motion.article>
//     </Link>
//   );
// };

// export default DisplayLocationCard;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DisplayLocationCard = ({
  title,
  image,
  label,
  labelColor = "bg-red-500",
}) => {
  const locationQuery = encodeURIComponent(title);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
  }, [image]);

  return (
    <Link to={`/projects?location=${locationQuery}`}>
      <motion.article
        ref={ref}
        className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-8 pt-40 w-full mx-auto 
                   bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-transform duration-300 hover:scale-95"
        style={{
          maxWidth: "200px",
          minWidth: "180px",
          minHeight: "300px",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Label */}
        {label && (
          <motion.div
            className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded-md z-10 ${labelColor} shadow-md`}
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {label}
          </motion.div>
        )}

        {/* Skeleton Loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-700/50 animate-pulse rounded-2xl"></div>
        )}

        {/* Image */}
        {imageLoaded && (
          <motion.img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover rounded-2xl opacity-80"
            style={{ borderRadius: "inherit" }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 rounded-2xl"></div>

        {/* Title */}
        <motion.h3
          className="z-10 text-xl font-bold text-white antialiased text-center"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
      </motion.article>
    </Link>
  );
};

export default DisplayLocationCard;
