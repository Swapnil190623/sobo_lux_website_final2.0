// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import Video1 from "./BgVideo.mp4";

// const Video = () => {
//   const [showSubtitle, setShowSubtitle] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setShowSubtitle(true), 1200);
//   }, []);

//   return (
//     <section className="relative w-full h-[90vh] flex rounded-3xl items-center justify-center ">
//       {/* Video Container with Bigger Card Effect */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative w-[95%] max-w-6xl rounded-3xl overflow-hidden border-[8px] border-white/20 shadow-2xl bg-black p-4"
//       >
//         {/* Background Video */}
//         <motion.div
//           className="relative w-full h-[75vh] rounded-2xl overflow-hidden brightness-80"
//           initial={{ opacity: 0, scale: 1.1 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover rounded-2xl"
//           >
//             <source src={Video1} type="video/mp4" />
//           </video>
//         </motion.div>
//       </motion.div>

//       {/* Floating Glassmorphism Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="absolute bottom-16 bg-white/10 backdrop-blur-md border border-white/20 px-16 py-10 max-w-3xl rounded-2xl text-white text-center shadow-lg"
//       >
//         {/* Headline with a Glow Effect */}
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-4xl sm:text-5xl font-extrabold uppercase text-[#ffd586] drop-shadow-lg"
//         >
//           Luxury at its Finest
//         </motion.h1>

//         {/* Delayed Subtitle Reveal */}
//         {showSubtitle && (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="mt-4 text-lg sm:text-xl font-light text-gray-200 leading-relaxed"
//           >
//             Discover elegance in every frame. Experience world-class homes built
//             for those who seek excellence.
//           </motion.p>
//         )}

//         {/* Call to Action Button with Glow */}
//         <motion.button
//           whileHover={{
//             scale: 1.08,
//             boxShadow: "0px 0px 25px rgba(255, 213, 134, 0.8)",
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="relative mt-6 px-10 py-4 bg-[#ffd586] text-black font-semibold rounded-lg shadow-lg hover:bg-[#ffcc66] transition-all"
//         >
//           Discover More
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// };

// export default Video;



// This is the new code , that we are using ..

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Video1 from "./Reflex_Bg.mp4";

const Video = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSubtitle(true), 1200);
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex rounded-3xl items-center justify-center ">
      {/* Softer Golden Glow Effect Behind Video */}
      <div className="absolute inset-8 bg-white opacity-50 blur-2xl transition-all duration-1000"></div>

      {/* Video Container with Bigger Card Effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-[95%] max-w-6xl rounded-3xl overflow-hidden border-[8px] border-white/20 shadow-2xl bg-black p-4"
      >
        {/* Background Video */}
        <motion.div
          className="relative w-full h-[75vh] rounded-2xl overflow-hidden brightness-75"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          >
            <source src={Video1} type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>

      {/* Floating Glassmorphism Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-16 bg-white/10 backdrop-blur-md border border-white/20 px-16 py-10 max-w-3xl rounded-2xl text-white text-center shadow-lg"
      >
        {/* Headline with a Glow Effect */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold uppercase text-[#ffd586] drop-shadow-lg"
        >
          Luxury at its Finest
        </motion.h1>

        {/* Delayed Subtitle Reveal */}
        {showSubtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-4 text-lg sm:text-xl font-light text-gray-200 leading-relaxed"
          >
            Discover Your Dream Luxury Home in South Mumbai
          </motion.p>
        )}

        {/* Call to Action Button with Glow */}
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 25px rgba(255, 213, 134, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative mt-6 px-10 py-4 bg-[#ffd586] text-black font-extrabold rounded-lg shadow-lg hover:bg-[#ffcc66] transition-all"
        >
          Explore More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Video;
