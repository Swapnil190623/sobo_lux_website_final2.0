// import React from "react";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

// const Testimonials = () => {
//   return (
//     <section className="py-12 bg-white sm:py-16 lg:py-20">
//       <div className="px-4 mx-auto max-w-[1200px] sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center">
//           <div className="text-center">
//             <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
//               Our happy clients say about us
//             </h2>
//           </div>

//           <div className="mt-8 text-center md:mt-16 md:order-3">
//             <a
//               href="#"
//               title=""
//               className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
//             ></a>
//           </div>

//           <div className="relative mt-10 md:mt-24 md:order-2">
//             <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
//               <div
//                 className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
//                 style={{
//                   background:
//                     // "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
//                     "linear-gradient(120deg, #6CB4EE 40%, #ffffff 100%)"
//                 }}
//               ></div>
//             </div>

//             <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3 text-center">
//               {/* First Testimonial Card */}
//               <motion.div
//                 className="flex flex-col overflow-hidden shadow-xl rounded-3xl max-w-sm mx-auto"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-lg">
//                   <div className="flex-1">
//                     <blockquote className="flex-1 mt-8">
//                       <p className="text-lg leading-relaxed text-gray-600 font-medium">
//                         “Reflex Realty made buying my first home stress-free,
//                         handling everything from site visits to paperwork with
//                         care and efficiency. A perfect partner in this journey!”
//                       </p>
//                     </blockquote>
//                   </div>

//                   <div className="flex items-center mt-8">
//                     <FontAwesomeIcon
//                       icon={faUser}
//                       className="flex-shrink-0 text-blue-500 w-10 h-10" // Blue icon
//                     />
//                     <div className="ml-4">
//                       <p className="text-base font-bold text-gray-900 font-pj">
//                         Neha Agarwal, Dadar
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Second Testimonial Card */}
//               <motion.div
//                 className="flex flex-col overflow-hidden shadow-xl rounded-3xl max-w-sm mx-auto"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-lg">
//                   <div className="flex-1">
//                     <blockquote className="flex-1 mt-8">
//                       <p className="text-lg leading-relaxed text-gray-600 font-medium">
//                         “Reflex Realty made finding and finalizing my dream home
//                         seamless. Their professional, transparent, and
//                         trustworthy team gave me confidence in every decision!”
//                       </p>
//                     </blockquote>
//                   </div>

//                   <div className="flex items-center mt-8">
//                     <FontAwesomeIcon
//                       icon={faUser}
//                       className="flex-shrink-0 text-blue-500 w-10 h-10" // Blue icon
//                     />
//                     <div className="ml-4">
//                       <p className="text-base font-bold text-gray-900 font-pj">
//                         Anjali Mehta, Mumbai
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Third Testimonial Card */}
//               <motion.div
//                 className="flex flex-col overflow-hidden shadow-xl rounded-3xl max-w-sm mx-auto"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-lg">
//                   <div className="flex-1">
//                     <blockquote className="flex-1 mt-8">
//                       <p className="text-lg leading-relaxed text-gray-600 font-medium">
//                         “Reflex Realty understood my needs and found a property
//                         that exceeded expectations. Their negotiation skills
//                         saved me money. Highly recommended!"
//                       </p>
//                     </blockquote>
//                   </div>

//                   <div className="flex items-center mt-8">
//                     <FontAwesomeIcon
//                       icon={faUser}
//                       className="flex-shrink-0  text-blue-500 w-10 h-10" // Blue icon
//                     />
//                     <div className="ml-4">
//                       <p className="text-base font-bold text-gray-900 font-pj">
//                         Rajiv Shah, South Mumbai
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

//glass

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    text: "Reflex Realty made buying my first home stress-free, handling everything from site visits to paperwork with care and efficiency. A perfect partner in this journey!",
    name: "Neha Agarwal",
    location: "Dadar",
  },
  {
    text: "Reflex Realty made finding and finalizing my dream home seamless. Their professional, transparent, and trustworthy team gave me confidence in every decision!",
    name: "Anjali Mehta",
    location: "Mumbai",
  },
  {
    text: "Reflex Realty understood my needs and found a property that exceeded expectations. Their negotiation skills saved me money. Highly recommended!",
    name: "Rajiv Shah",
    location: "South Mumbai",
  },
];

const TestimonialCard = ({ text, name, location, index }) => {
  return (
    <motion.div
      className="flex flex-col overflow-hidden shadow-xl rounded-3xl max-w-sm mx-auto bg-white/10 backdrop-blur-lg p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-between flex-1 lg:py-8 lg:px-7 rounded-lg">
        <blockquote className="flex-1 mt-8">
          <p className="text-lg leading-relaxed text-white font-medium">
            “{text}”
          </p>
        </blockquote>

        <div className="flex items-center mt-8">
          <FontAwesomeIcon
            icon={faUser}
            className="flex-shrink-0 text-blue-300 w-10 h-10"
          />
          <div className="ml-4">
            <p className="text-base font-bold text-white font-pj">
              {name}, {location}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-[1200px] sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="mt-4 text-3xl font-bold text-[#ffd586] sm:text-4xl xl:text-5xl font-pj">
            Our happy clients say about us
          </h2>

          <div className="relative mt-10 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 100%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3 text-center">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
