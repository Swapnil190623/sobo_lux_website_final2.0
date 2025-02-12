// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";
// import { IoBedOutline } from "react-icons/io5";
// import PopupForm from "../PopupForm/PopupForm.jsx";
// import AreaIcon from "./Area.svg";

// const ProjectCard = ({ property }) => {
//   const navigate = useNavigate();
//   const defaultValue = "Ask For Details";
//   const defaultImage =
//     "https://i.ibb.co/MhfHdt6/sea-view-appartment-in-mumbai.png";
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleViewDetails = () => {
//     navigate(`/project/${property.id}`);
//   };

//   const handleBrokenImage = (e) => {
//     e.target.style.backgroundImage = `url(${defaultImage})`;
//   };

//   const handleWhatsApp = (e) => {
//     e.stopPropagation();
//     const whatsappNumber = "919224448861";
//     const message = encodeURIComponent(
//       `Hello, I'm interested in the property: ${property.type}`
//     );
//     window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
//   };

//   const handleEnquire = (e) => {
//     e.stopPropagation();
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//   return (
//     <div className="max-w-md  py-6 px-3">
//       <div
//         className="relative backdrop-blur-xl bg-white/20 border border-white/20 shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
//         onClick={handleViewDetails}
//       >
//         <div
//           className="relative bg-cover bg-center h-60 p-4 w-full rounded-sm"
//           style={{
//             backgroundImage: `url(${property.image || defaultImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "bottom",
//             backgroundRepeat: "no-repeat",
//           }}
//           onError={handleBrokenImage}
//         >
//           <div className="absolute top-3 left-3">
//             <span className="text-black bg-[#ffd586] text-sm font-bold px-3 py-1 rounded-full">
//               {property.location || defaultValue}
//             </span>
//           </div>
//           <div className="absolute top-3 right-3">
//             <span className="bg-white text-[#000000] text-sm font-bold px-3 py-1 rounded-full border-2">
//               {property.type}
//             </span>
//           </div>
//         </div>

//         {/* Glass Effect Content */}
//         <div className="p-4 text-center font-custom text-white">
//           <p className="text-gray-200 font-semibold text-2xl">
//             {property.price || "Price On Request"}
//           </p>
//           <p className="text-sm font-normal text-gray-300">
//             {property.address || defaultValue}
//           </p>
//         </div>

//         <div className="flex p-4 border-t border-white/20 text-white text-center font-custom">
//           <div className="flex-1 inline-flex items-center justify-center flex-col space-y-1 border border-white/30 p-2 rounded-2xl mr-4">
//             <IoBedOutline className="h-5 w-5 text-white/80" />
//             <div className="flex items-center justify-center space-x-1">
//               <p className="text-white font-bold text-sm">
//                 {property.bedrooms || "Ask For"}
//               </p>
//               <span className="font-bold text-white text-sm">BHK</span>
//             </div>
//           </div>

//           <div className="flex-1 inline-flex items-center justify-center flex-col space-y-1 border border-white/30 p-2 rounded-2xl">
//             <img
//               src={AreaIcon}
//               alt="Map Pin"
//               className="h-5 w-5 text-white/80"
//             />
//             <p className="text-white font-bold text-sm">
//               {property.area || defaultValue}
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-4 p-3 border-t border-white/20 text-center">
//           <button
//             className="flex-1 bg-[#ffd586] text-black py-2 rounded-xl hover:bg-black hover:text-white transition-colors duration-200"
//             onClick={(e) => {
//               e.stopPropagation();
//               handleEnquire(e);
//             }}
//           >
//             Know More
//           </button>

//           <button
//             className="flex items-center justify-center bg-gray-200 text-black py-2 px-2 rounded-xl transition-colors duration-200"
//             onClick={(e) => {
//               e.stopPropagation();
//               handleWhatsApp(e);
//             }}
//           >
//             <FaWhatsapp className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {isPopupOpen && <PopupForm onClose={closePopup} property={property} />}
//     </div>
//   );
// };

// export default ProjectCard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import PopupForm from "../PopupForm/PopupForm.jsx";
import AreaIcon from "./Area.svg";

const ProjectCard = ({ property }) => {
  const navigate = useNavigate();
  const defaultValue = "Ask For Details";
  const defaultImage =
    "https://i.ibb.co/MhfHdt6/sea-view-appartment-in-mumbai.png";
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleViewDetails = () => {
    navigate(`/project/${property.id}`);
  };

  const handleBrokenImage = (e) => {
    e.target.style.backgroundImage = `url(${defaultImage})`;
  };

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const whatsappNumber = "919224448861";
    const message = encodeURIComponent(
      `Hello, I'm interested in the property: ${property.type}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleEnquire = (e) => {
    e.stopPropagation();
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="w-[350px] flex-shrink-0  max-w-md py-6 px-3">
      <div
        className="relative backdrop-blur-xl bg-white/20 border border-white/20 shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
        onClick={handleViewDetails}
      >
        <div
          className="relative bg-cover bg-center h-60 p-4 w-full rounded-sm"
          style={{
            backgroundImage: `url(${property.image || defaultImage})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
          onError={handleBrokenImage}
        >
          <div className="absolute top-3 left-3">
            <span className="text-black bg-[#ffd586] text-sm font-bold px-3 py-1 rounded-full">
              {property.location || defaultValue}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-white text-[#000000] text-sm font-bold px-3 py-1 rounded-full border-2">
              {property.type.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Glass Effect Content */}
        <div className="p-4 text-center font-custom text-white">
          <p className="text-gray-200 font-semibold text-2xl">
            {property.price || "Price On Request"}
          </p>
          <p className="text-sm font-normal text-gray-300">
            {property.location || defaultValue}
          </p>
        </div>

        <div className="flex p-4 border-t border-white/20 text-white text-center font-custom">
          <div className="flex-1 inline-flex items-center justify-center flex-col space-y-1 border border-white/30 p-2 rounded-2xl mr-4">
            <IoBedOutline className="h-5 w-5 text-white/80" />
            <div className="flex items-center justify-center space-x-1">
              <p className="text-white font-bold text-sm">
                {property.bhk || "Ask For"}
              </p>
              <span className="font-bold text-white text-sm">BHK</span>
            </div>
          </div>

          <div className="flex-1 inline-flex items-center justify-center flex-col space-y-1 border border-white/30 p-2 rounded-2xl">
            <img
              src={AreaIcon}
              alt="Map Pin"
              className="h-5 w-5 text-white/80"
            />
            <p className="text-white font-bold text-sm">
              {property.area || defaultValue}
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-3 border-t border-white/20 text-center">
          <button
            className="flex-1 bg-[#ffd586] text-black py-2 rounded-xl hover:bg-black font-semibold hover:text-white transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              handleEnquire(e);
            }}
          >
            Let's Connect
          </button>

          <button
            className="flex items-center justify-center bg-gray-200 text-black py-2 px-2 rounded-xl transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              handleWhatsApp(e);
            }}
          >
            <FaWhatsapp className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isPopupOpen && <PopupForm onClose={closePopup} property={property} />}
    </div>
  );
};

export default ProjectCard;

// card with transparent bg ..

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";
// import { IoBedOutline } from "react-icons/io5"; // Importing IoBedOutline icon
// import PopupForm from "../PopupForm/PopupForm.jsx"; // Import the PopupForm component

// // Import your SVG as an image
// import AreaIcon from "./Area.svg"; // Adjust the path according to your file structure

// const ProjectCard = ({ property }) => {
//   const navigate = useNavigate();
//   const defaultValue = "Ask For Details";
//   const defaultImage =
//     "https://i.ibb.co/MhfHdt6/sea-view-appartment-in-mumbai.png";
//   const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control the popup

//   const handleViewDetails = () => {
//     navigate(`/project/${property.id}`);
//   };

//   const handleBrokenImage = (e) => {
//     e.target.style.backgroundImage = `url(${defaultImage})`;
//   };

//   const handleWhatsApp = (e) => {
//     e.stopPropagation(); // Prevent the click from bubbling to the parent div
//     const whatsappNumber = "919224448861"; // Replace with actual number
//     const message = encodeURIComponent(
//       `Hello, I'm interested in the property: ${property.type}`
//     );
//     window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
//   };

//   const handleEnquire = (e) => {
//     e.stopPropagation(); // Prevent the click from bubbling to the parent div
//     setIsPopupOpen(true); // Open the popup when the 'Enquire' button is clicked
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false); // Close the popup
//   };

//   return (
//     <div className="max-w-md w-full py-6 px-3">
//       <div
//         className=" backdrop-blur-xl border border-gray-700 shadow-xl rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-95"
//         onClick={handleViewDetails} // Navigate on click
//       >
//         <div
//           className="relative bg-cover bg-center h-60 p-4 w-80 rounded-sm"
//           style={{
//             backgroundImage: `url(${property.image || defaultImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "bottom",
//             backgroundRepeat: "no-repeat",
//           }}
//           onError={handleBrokenImage}
//         >
//           <div className="absolute top-3 left-3">
//             <span className="text-white bg-[#4F46E5] text-sm font-bold px-3 py-1 rounded-full">
//               {property.location || defaultValue}
//             </span>
//           </div>
//           <div className="absolute top-3 right-3">
//             <span className="bg-white text-[#4F46E5] text-sm font-bold px-3 py-1 rounded-full border-2">
//               {property.type}
//             </span>
//           </div>
//         </div>
//         <div className="p-4 text-center font-custom">
//           <p className="text-gray-300 font-semibold text-2xl">
//             {property.price || "Price On Request"}
//           </p>
//           <p className="text-sm font-normal text-gray-400">
//             {property.address || defaultValue}
//           </p>
//         </div>
//         <div className="flex p-4 border-t border-gray-600 text-gray-300 text-center font-custom">
//           {/* Bed section */}
//           <div className="flex-1 inline-flex items-center justify-center flex-col space-y-1 border border-gray-600 p-2 rounded-2xl mr-4">
//             <IoBedOutline className="h-5 w-5 text-gray-400" />
//             <div className="flex items-center justify-center space-x-1">
//               <p className="text-gray-300 font-bold text-sm">
//                 {property.bedrooms || "Ask For"}
//               </p>
//               <span className="font-bold text-gray-300 text-sm">BHK</span>
//             </div>
//           </div>

//           {/* Area section */}
//           <div className="flex-1 inline-flex items-center justify-center flex-col space-y-1 border border-gray-600 p-2 rounded-2xl">
//             <img src={AreaIcon} alt="Map Pin" className="h-5 w-5 text-gray-400" />
//             <p className="text-gray-300 font-bold text-sm">
//               {property.area || defaultValue}
//             </p>
//           </div>
//         </div>
//         <div className="flex gap-4 p-3 border-t border-gray-600 text-center">
//           <button
//             className="flex-1 bg-[#4F46E5] text-white py-2 rounded-xl hover:bg-blue-500 transition-colors duration-200"
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent parent onClick
//               handleEnquire(e); // Open the enquire popup
//             }}
//           >
//             Enquire
//           </button>

//           <button
//             className="flex items-center justify-center bg-green-500 text-white py-2 px-2 rounded-xl hover:bg-green-400 transition-colors duration-200"
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent parent onClick
//               handleWhatsApp(e); // Handle WhatsApp functionality
//             }}
//           >
//             <FaWhatsapp className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Show the popup form if isPopupOpen is true */}
//       {isPopupOpen && <PopupForm onClose={closePopup} property={property} />}
//     </div>
//   );
// };

// export default ProjectCard;
