

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
//     <div className="w-[350px] flex-shrink-0  max-w-md py-6 px-3">
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
//               {property.type.toUpperCase()}
//             </span>
//           </div>
//         </div>

//         {/* Glass Effect Content */}
//         <div className="p-4 text-center font-custom text-white">
//           <p className="text-gray-200 font-semibold text-2xl">
//             {property.price || "Price On Request"}
//           </p>
//           <p className="text-md font-normal text-gray-300">
//             {property.location || defaultValue}
//           </p>
//         </div>

//         <div className="flex p-4 border-t border-white/20 text-white text-center font-custom">
//           <div className="flex-1 inline-flex items-center justify-center flex-col space-y-1 border border-white/30 p-2 rounded-2xl mr-4">
//             <IoBedOutline className="h-5 w-5 text-white/80" />
//             <div className="flex items-center justify-center space-x-1">
//               <p className="text-white font-bold text-sm">
//                 {property.bhk || "Ask For"}
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
//             <p className="text-white font-bold text-md">
//               {property.area || defaultValue}
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-4 p-3 border-t border-white/20 text-center">
//           <button
//             className="flex-1 bg-[#ffd586] text-black py-2 rounded-xl hover:bg-black font-bold hover:text-white transition-colors duration-200"
//             onClick={(e) => {
//               e.stopPropagation();
//               handleEnquire(e);
//             }}
//           >
//             Let's Connect
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
  const [isImageLoading, setIsImageLoading] = useState(true); // State to track image loading

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

  // Function to handle image load completion
  const handleImageLoad = () => {
    setIsImageLoading(false); // Once image is loaded, set isImageLoading to false
  };

  return (
    <div className="w-[350px] flex-shrink-0 max-w-md py-6 px-3">
      <div
        className="relative backdrop-blur-xl bg-white/20 border border-white/20 shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
        onClick={handleViewDetails}
      >
        <div
          className="relative bg-cover bg-center h-60 p-4 w-full rounded-sm"
          style={{
            backgroundImage: isImageLoading
              ? "none" // Show skeleton when image is loading
              : `url(${property.image || defaultImage})`, // Show image once loaded
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
          onError={handleBrokenImage}
        >
          {/* Skeleton Loader */}
          {isImageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}

          {/* Image */}
          <img
            src={property.image || defaultImage}
            alt="Property"
            className="hidden"
            onLoad={handleImageLoad} // This triggers when the image is fully loaded
            onError={handleBrokenImage}
          />

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
          <p className="text-md font-normal text-gray-300">
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
            <p className="text-white font-bold text-md">
              {property.area || defaultValue}
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-3 border-t border-white/20 text-center">
          <button
            className="flex-1 bg-[#ffd586] text-black py-2 rounded-xl hover:bg-black font-bold hover:text-white transition-colors duration-200"
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



// code with skeleton in it . woeking code .
