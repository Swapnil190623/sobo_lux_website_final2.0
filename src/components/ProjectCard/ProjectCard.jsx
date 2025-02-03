import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5"; // Importing IoBedOutline icon
import PopupForm from "../PopupForm/PopupForm.jsx"; // Import the PopupForm component

// Import your SVG as an image
import AreaIcon from "./Area.svg"; // Adjust the path according to your file structure

const ProjectCard = ({ property }) => {
  const navigate = useNavigate();
  const defaultValue = "Ask For Details";
  const defaultImage =
    "https://i.ibb.co/MhfHdt6/sea-view-appartment-in-mumbai.png";
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control the popup

  const handleViewDetails = () => {
    navigate(`/project/${property.id}`);
  };

  const handleBrokenImage = (e) => {
    e.target.style.backgroundImage = `url(${defaultImage})`;
  };

  const handleWhatsApp = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to the parent div
    const whatsappNumber = "919224448861"; // Replace with actual number
    const message = encodeURIComponent(
      `Hello, I'm interested in the property: ${property.type}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleEnquire = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to the parent div
    setIsPopupOpen(true); // Open the popup when the 'Enquire' button is clicked
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <div className="max-w-md w-full py-6 px-3">
      <div
        className="bg-white shadow-xl rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-95"
        onClick={handleViewDetails} // Navigate on click
      >
        <div
          className="relative bg-cover bg-center h-60 p-4 w-80 rounded-sm "
          style={{
            backgroundImage: `url(${property.image || defaultImage})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
          onError={handleBrokenImage}
        >
          <div className="absolute top-3 left-3">
            <span className="text-white bg-[#4F46E5] text-sm font-bold px-3 py-1 rounded-full">
              {property.location || defaultValue}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-white text-[#4F46E5] text-sm font-bold px-3 py-1 rounded-full border-2 ">
              {property.type}
            </span>
          </div>
        </div>
        <div className="p-4 text-center font-custom">
          {/* <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
            {property.title || defaultValue}
          </p> */}

          <p className="text-gray-700 font-semibold text-2xl">
            {property.price || "Price On Request"}
          </p>
          <p className="text-sm font-normal text-gray-900">
            {property.address || defaultValue}
          </p>
        </div>
        <div className="flex p-4 border-t border-gray-600 text-gray-700 text-center font-custom">
          {/* Bed section with IoBedOutline icon on top and rectangle outline */}
          <div className="flex-1 inline-flex items-center justify-center flex-col space-y-1 border border-gray-700 p-2 rounded-2xl mr-4">
            <IoBedOutline className="h-5 w-5 text-gray-600" />{" "}
            {/* Smaller icon */}
            <div className="flex items-center justify-center space-x-1">
              <p className="text-gray-900 font-bold text-sm">
                {property.bedrooms || "Ask For"}
              </p>{" "}
              {/* Smaller font size */}
              <span className="font-bold text-gray-900 text-sm">BHK</span>{" "}
              {/* Smaller font size */}
            </div>
          </div>

          {/* Area section with SVG icon for map pin */}
          <div className="flex-1 inline-flex items-center justify-center flex-col space-y-1 border border-gray-700 p-2 rounded-2xl">
            <img
              src={AreaIcon}
              alt="Map Pin"
              className="h-5 w-5 text-gray-600"
            />{" "}
            {/* Replace with image */}
            <p className="text-gray-900 font-bold text-sm">
              {property.area || defaultValue}
            </p>{" "}
            {/* Smaller font size */}
          </div>
        </div>
        <div className="flex gap-4 p-3 border-t border-gray-300 text-center">
          <button
            className="flex-1 bg-[#4F46E5] text-white py-2 rounded-xl hover:bg-blue-500 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent onClick
              handleEnquire(e); // Open the enquire popup
            }}
          >
            Enquire
          </button>

          <button
            className="flex items-center justify-center bg-green-500 text-white py-2 px-2 rounded-xl hover:bg-green-400 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent onClick
              handleWhatsApp(e); // Handle WhatsApp functionality
            }}
          >
            <FaWhatsapp className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Show the popup form if isPopupOpen is true */}
      {isPopupOpen && <PopupForm onClose={closePopup} property={property} />}
    </div>
  );
};

export default ProjectCard;
