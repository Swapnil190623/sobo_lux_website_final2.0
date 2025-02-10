// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import PopupForm from "../../components/PopupForm/PopupForm"; // Import the PopupForm component

// const PropertyDetailPage = ({ properties = [] }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [isPopupVisible, setIsPopupVisible] = useState(false); // State for popup visibility

//   const property = properties.find((prop) => prop.id === parseInt(id, 10));

//   if (!property) {
//     return (
//       <motion.div
//         className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-4xl font-semibold text-gray-900 mb-6">
//           Property Not Found
//         </h1>
//         <button
//           className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
//           onClick={() => navigate("/")}
//         >
//           Go Back to Home
//         </button>
//       </motion.div>
//     );
//   }

//   // Helper function to safely access nested properties
//   const getNested = (obj, path, defaultValue = "Ask For Details") => {
//     return (
//       path.split(".").reduce((acc, part) => acc && acc[part], obj) ||
//       defaultValue
//     );
//   };

//   // Animation configuration for sections
//   const fadeInVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   };

//   const imageVariants = {
//     initial: { opacity: 0, scale: 0.95 },
//     animate: { opacity: 1, scale: 1 },
//     transition: { duration: 0.8 },
//   };

//   return (
//     <motion.div
//       className="max-w-6xl mx-auto px-6 md:px-12 py-10 bg-white mt-24"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Header Section */}
//       <motion.div
//         className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12"
//         variants={fadeInVariants}
//         initial="initial"
//         animate="animate"
//       >
//         <h1 className="text-5xl font-bold text-gray-900 leading-tight">
//           {property.name || "Property Details"}
//         </h1>
//         <button
//           className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-300"
//           onClick={() => navigate("/")}
//         >
//           Back to Listings
//         </button>
//       </motion.div>

//       {/* Image Section */}
//       <motion.div
//         className="relative w-full h-[400px] mb-10 rounded-lg overflow-hidden"
//         variants={imageVariants}
//         initial="initial"
//         animate="animate"
//       >
//         <img
//           src={
//             property.image ||
//             "https://i.ibb.co/vDHbXK7/Luxury-apartment-on-sale.png"
//           }
//           alt={property.type || "Property Image"}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//         <div className="absolute bottom-4 left-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
//           {property.location || "Location Not Available"}
//         </div>
//       </motion.div>

//       {/* Details Section */}
//       <motion.div
//         variants={fadeInVariants}
//         initial="initial"
//         animate="animate"
//         className="mb-10"
//       >
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6">Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="text-xl text-gray-700 space-y-4">
//             <p>
//               <strong>Price:</strong> {property.price || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Location:</strong>{" "}
//               {property.location || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Type:</strong>{" "}
//               {property.propertyType || "Ask For Details"}
//             </p>
//             <p>
//               <strong>BHK:</strong> {property.bhk || "Ask For Details"}
//             </p>
//           </div>
//           <div className="text-lg text-gray-700 space-y-4">
//             <p>
//               <strong>Area:</strong> {property.area || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Furnish Status:</strong>{" "}
//               {property.furnishStatus || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Possession:</strong>{" "}
//               {property.possession || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Expected Closure:</strong>{" "}
//               {property.expectedClosure || "Ask For Details"}
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Contact Agent Section */}
//       <motion.div
//         variants={fadeInVariants}
//         initial="initial"
//         animate="animate"
//         className="mb-10"
//       >
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6">
//           Contact Agent
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg shadow-md">
//           <div>
//             <p className="text-lg text-gray-700">
//               <strong>Phone: +91 9224448861</strong>
//             </p>
//             <p className="text-lg text-gray-700">
//               <strong>Email:</strong>{" "}
//               {getNested(property, "contactAgent.email")}
//             </p>
//           </div>
//           <div className="flex items-center">
//             <button
//               className="w-full py-3 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-300"
//               onClick={() => {
//                 const agentPhone = "+91 9224448861";
//                 const agentEmail = getNested(property, "contactAgent.email");

//                 // Open phone dialer when clicked
//                 window.location.href = `tel:${agentPhone}`; // This triggers a phone call
//               }}
//             >
//               Contact Now
//             </button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Actions Section */}
//       <motion.div
//         variants={fadeInVariants}
//         initial="initial"
//         animate="animate"
//         className="flex flex-col md:flex-row gap-4"
//       >
//         <button
//           className="flex-1 py-4 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-300"
//           onClick={() => setIsPopupVisible(true)} // Show popup on click
//         >
//           Enquire Now
//         </button>
//         <button
//           className="flex-1 py-4 bg-gray-100 text-gray-900 text-lg font-medium rounded-lg shadow-sm hover:shadow-md transition duration-300"
//           onClick={() => {
//             const whatsappNumber = getNested(
//               property,
//               "contactAgent.phone",
//               "919224448861"
//             ); // Replace with actual number or handle accordingly
//             const message = encodeURIComponent(
//               `Hello, I'm interested in the property: ${property.type || "Property"}`
//             );
//             window.open(
//               `https://wa.me/${whatsappNumber}?text=${message}`,
//               "_blank"
//             );
//           }}
//         >
//           Contact via WhatsApp
//         </button>
//       </motion.div>

//       {/* PopupForm Component */}
//       {isPopupVisible && (
//         <PopupForm
//           onClose={() => setIsPopupVisible(false)} // Close popup
//           property={property} // Pass property details
//         />
//       )}
//     </motion.div>
//   );
// };

// export default PropertyDetailPage;



// /glass effect 


// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import PopupForm from "../../components/PopupForm/PopupForm"; // Import the PopupForm component

// const PropertyDetailPage = ({ properties = [] }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [isPopupVisible, setIsPopupVisible] = useState(false); // State for popup visibility

//   const property = properties.find((prop) => prop.id === parseInt(id, 10));

//   if (!property) {
//     return (
//       <motion.div
//         className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-4xl font-semibold text-gray-900 mb-6">
//           Property Not Found
//         </h1>
//         <button
//           className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
//           onClick={() => navigate("/")}
//         >
//           Go Back to Home
//         </button>
//       </motion.div>
//     );
//   }

//   // Animation configuration for sections
//   const fadeInVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   };

//   return (
//     <motion.div
//       className="max-w-6xl mx-auto px-6 md:px-12 py-10 mt-24"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Glassmorphism Container */}
//       <motion.div
//         className="relative bg-white/20 backdrop-blur-lg shadow-lg rounded-3xl p-10"
//         variants={fadeInVariants}
//         initial="initial"
//         animate="animate"
//       >
//         {/* Header Section */}
//         <motion.div
//           className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12"
//           variants={fadeInVariants}
//         >
//           <h1 className="text-5xl font-bold text-white leading-tight drop-shadow-lg">
//             {property.name || "Property Details"}
//           </h1>
//           <button
//             className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-300"
//             onClick={() => navigate("/")}
//           >
//             Back to Listings
//           </button>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-md"
//           variants={fadeInVariants}
//         >
//           <img
//             src={
//               property.image ||
//               "https://i.ibb.co/vDHbXK7/Luxury-apartment-on-sale.png"
//             }
//             alt={property.type || "Property Image"}
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//           <div className="absolute bottom-4 left-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
//             {property.location || "Location Not Available"}
//           </div>
//         </motion.div>

//         {/* Details Section with Glass Effect */}
//         <motion.div
//           className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-md"
//           variants={fadeInVariants}
//         >
//           <h2 className="text-3xl font-semibold text-white mb-6 drop-shadow-lg">
//             Details
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="text-lg text-white space-y-4 drop-shadow-lg">
//               <p><strong>Price:</strong> {property.price || "Ask For Details"}</p>
//               <p><strong>Location:</strong> {property.location || "Ask For Details"}</p>
//               <p><strong>Type:</strong> {property.propertyType || "Ask For Details"}</p>
//               <p><strong>BHK:</strong> {property.bhk || "Ask For Details"}</p>
//               <p><strong>Project Status:</strong> {property.projectStatus || "Ask For Details"}</p>
//             </div>
//             <div className="text-lg text-white space-y-4 drop-shadow-lg">
//               <p><strong>Area:</strong> {property.area || "Ask For Details"}</p>
//               <p><strong>Furnish Status:</strong> {property.furnishStatus || "Ask For Details"}</p>
//               <p><strong>Possession:</strong> {property.possession || "Ask For Details"}</p>
//               <p><strong>Expected Closure:</strong> {property.expectedClosure || "Ask For Details"}</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Contact Agent Section */}
//         <motion.div
//           className="bg-white/20 backdrop-blur-md p-6 mt-10 rounded-lg shadow-md"
//           variants={fadeInVariants}
//         >
//           <h2 className="text-3xl font-semibold text-white mb-6 drop-shadow-lg">
//             Contact Agent
//           </h2>
//           <p className="text-lg text-white"><strong>Phone: +91 9224448861</strong></p>
//           <p className="text-lg text-white"><strong>Email:</strong> {property.contactAgent?.email || "N/A"}</p>
//         </motion.div>

//         {/* Actions Section */}
//         <motion.div
//           className="flex flex-col md:flex-row gap-4 mt-10"
//           variants={fadeInVariants}
//         >
//           <button
//             className="flex-1 py-4 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-300"
//             onClick={() => setIsPopupVisible(true)} // Show popup on click
//           >
//             Enquire Now
//           </button>
//           <button
//             className="flex-1 py-4 bg-gray-100 text-gray-900 text-lg font-medium rounded-lg shadow-sm hover:shadow-md transition duration-300"
//             onClick={() => {
//               const whatsappNumber = property.contactAgent?.phone || "919224448861";
//               const message = encodeURIComponent(`Hello, I'm interested in the property: ${property.type || "Property"}`);
//               window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
//             }}
//           >
//             Contact via WhatsApp
//           </button>
//         </motion.div>
//       </motion.div>

//       {/* PopupForm Component */}
//       {isPopupVisible && (
//         <PopupForm onClose={() => setIsPopupVisible(false)} property={property} />
//       )}
//     </motion.div>
//   );
// };

// export default PropertyDetailPage;



import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PopupForm from "../../components/PopupForm/PopupForm";

const PropertyDetailPage = ({ properties = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const property = properties.find((prop) => prop.id === parseInt(id, 10));

  if (!property) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Property Not Found
        </h1>
        <button
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
          onClick={() => navigate("/")}
        >
          Go Back to Home
        </button>
      </motion.div>
    );
  }

  // Animation settings
  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 md:px-12 py-10 mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glassmorphism Container (Darker & More Transparent) */}
      <motion.div
        className="relative bg-black/30 backdrop-blur-2xl shadow-lg rounded-3xl p-10 border border-white/10"
        variants={fadeInVariants}
        initial="initial"
        animate="animate"
      >
        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12"
          variants={fadeInVariants}
        >
          <h1 className="text-5xl font-bold text-white leading-tight drop-shadow-lg">
            {property.name || "Property Details"}
          </h1>
          <button
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-300"
            onClick={() => navigate("/")}
          >
            Back to Listings
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-md"
          variants={fadeInVariants}
        >
          <img
            src={
              property.image ||
              "https://i.ibb.co/vDHbXK7/Luxury-apartment-on-sale.png"
            }
            alt={property.type || "Property Image"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 bg-gray-900/80 text-white px-4 py-2 rounded-lg shadow-md">
            {property.location || "Location Not Available"}
          </div>
        </motion.div>

        {/* Details Section with Enhanced Glass Effect */}
        <motion.div
          className="bg-black/40 backdrop-blur-xl p-6 rounded-lg shadow-md border border-white/10"
          variants={fadeInVariants}
        >
          <h2 className="text-3xl font-semibold text-white mb-6 drop-shadow-lg">
            Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-lg text-white space-y-4 drop-shadow-lg">
              <p><strong>Price:</strong> {property.price || "Ask For Details"}</p>
              <p><strong>Location:</strong> {property.location || "Ask For Details"}</p>
              <p><strong>Type:</strong> {property.propertyType || "Ask For Details"}</p>
              <p><strong>BHK:</strong> {property.bhk || "Ask For Details"}</p>
              <p><strong>Project Status:</strong> {property.projectStatus || "Ask For Details"}</p>
            </div>
            <div className="text-lg text-white space-y-4 drop-shadow-lg">
              <p><strong>Area:</strong> {property.area || "Ask For Details"}</p>
              <p><strong>Furnish Status:</strong> {property.furnishStatus || "Ask For Details"}</p>
              <p><strong>Possession:</strong> {property.possession || "Ask For Details"}</p>
              <p><strong>Expected Closure:</strong> {property.expectedClosure || "Ask For Details"}</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Agent Section */}
        <motion.div
          className="bg-black/40 backdrop-blur-xl p-6 mt-10 rounded-lg shadow-md border border-white/10"
          variants={fadeInVariants}
        >
          <h2 className="text-3xl font-semibold text-white mb-6 drop-shadow-lg">
            Contact Agent
          </h2>
          <p className="text-lg text-white"><strong>Phone: +91 9224448861</strong></p>
          <p className="text-lg text-white"><strong>Email:</strong> {property.contactAgent?.email || "N/A"}</p>
        </motion.div>

        {/* Actions Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mt-10"
          variants={fadeInVariants}
        >
          <button
            className="flex-1 py-4 bg-[#ffd586] text-black text-lg font-medium rounded-lg hover:bg-black hover:text-white transition duration-300"
            onClick={() => setIsPopupVisible(true)}
          >
            Enquire Now
          </button>
          <button
            className="flex-1 py-4 bg-gray-100 text-gray-900 text-lg font-medium rounded-lg shadow-sm hover:shadow-md transition duration-300"
            onClick={() => {
              const whatsappNumber = property.contactAgent?.phone || "919224448861";
              const message = encodeURIComponent(`Hello, I'm interested in the property: ${property.type || "Property"}`);
              window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
            }}
          >
            Contact via WhatsApp
          </button>
        </motion.div>
      </motion.div>

      {/* PopupForm Component */}
      {isPopupVisible && (
        <PopupForm onClose={() => setIsPopupVisible(false)} property={property} />
      )}
    </motion.div>
  );
};

export default PropertyDetailPage;
