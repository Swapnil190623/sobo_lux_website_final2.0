import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PopupForm from "../PopupForm/PopupForm";
import { createPortal } from "react-dom";

const PropertyCard = ({ property }) => {
  const defaultValue = "Ask For Details";
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();

  const handleEnquire = (e, property) => {
    e.stopPropagation();
    setSelectedProperty(property);
    setShowPopup(true);
  };

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const whatsappNumber = "919224448861";
    const message = encodeURIComponent(
      `Hello, I'm interested in the property: ${property.name || property.type}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className="max-w-sm mx-auto border border-gray-300 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 
      lg:min-w-[350px] min-w-[300px] backdrop-blur-lg bg-white/20 shadow-lg" // Glassmorphism Effect
      style={{
        minHeight: "560px",
        backdropFilter: "blur(10px)", // Blurred Background
        WebkitBackdropFilter: "blur(10px)", // Safari Support
        background: "rgba(255, 255, 255, 0.2)", // Semi-transparent Background
        borderRadius: "15px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft Shadow
        border: "1px solid rgba(255, 255, 255, 0.3)", // Glass Border Effect
      }}
      onClick={() => navigate(`/property/${property.id}`)}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={
            property.image || "https://i.ibb.co/BCPQpdv/Luxury-home-on-rent.png"
          }
          alt={property.name || defaultValue}
          className="w-full h-52 object-cover rounded-t-2xl"
        />
        <div className="absolute top-3 left-3 text-black bg-[#ffd586] text-sm px-2 py-1 rounded-full font-bold">
          {property.location || defaultValue}
        </div>
        <div className="absolute top-3 right-3 bg-white text-[#000000] text-sm px-2 py-1 rounded-full font-bold shadow-sm">
          {property.propertyType.toUpperCase() || defaultValue}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 text-white">
        {" "}
        {/* White text for glass effect */}
        <div className="flex items-center px-1 border-b border-gray-300 pb-2">
          <div className="p-2 text-left">
            <p className="text-xl font-bold">
              {property.price || defaultValue}
            </p>
            <p className="text-md text-gray-300">
              {property.location || defaultValue}
            </p>
            {property.isCommercial && (
              <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                Commercial
              </span>
            )}
          </div>
        </div>
        {/* Property Details */}
        <div className="mt-4 grid grid-cols-1 p-2 gap-y-2 text-sm text-gray-200 border-b border-gray-300">
          <div className="flex items-center gap-2 justify-between">
            <span className="font-medium">
              {property.isCommercial ? "Area" : "BHK"}
            </span>
            <span className="text-white font-semibold text-md">
              {property.isCommercial
                ? property.area || defaultValue
                : property.bhk || defaultValue}
            </span>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <span className="font-medium">Carpet Area</span>
            <span className="text-white font-semibold text-md">
              {property.area || defaultValue}
            </span>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <span className="font-medium">Parking</span>
            <span className="text-white font-semibold text-sm">
              {property.parking || defaultValue}
            </span>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <span className="font-medium">Furnishing Status</span>
            <span className="text-white font-semibold text-sm">
              {property.furnishStatus || defaultValue}
            </span>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <span className="font-medium">Features</span>
            <span className="text-white font-semibold text-sm">
              {property.features?.join(", ") || defaultValue}
            </span>
          </div>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-2 px-3 mt-2">
          <button
            className="flex-1 bg-[#ffd586] text-black py-2 rounded-xl hover:bg-black  font-bold hover:text-white transition-colors duration-200"
            onClick={(e) => handleEnquire(e, property)}
          >
            Let's Connect
          </button>
          <button
            className="flex items-center justify-center bg-gray-200 text-black py-1.5 px-2 rounded-xl transition-colors duration-200"
            onClick={handleWhatsApp}
          >
            <FaWhatsapp className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* PopupForm
      {showPopup && (
        <PopupForm
          onClose={() => setShowPopup(false)}
          property={selectedProperty}
        />
      )} */}

      {/* PopupForm (Using React Portal) */}
      {showPopup &&
        createPortal(
          <PopupForm
            onClose={() => setShowPopup(false)}
            property={selectedProperty}
          />,
          document.body
        )}
    </div>
  );
};

export default PropertyCard;
