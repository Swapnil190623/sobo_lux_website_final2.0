// Properly Working Code .. :
// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./HeroFilter.css";

// const HeroFilter = () => {
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(window.location.search);

//   const [location, setLocation] = useState(searchParams.get("location") || "");
//   const [buyOption, setBuyOption] = useState(searchParams.get("buy") || "Buy");

//   // Individual filters for each category
//   const [isResidentialFilter, setIsResidentialFilter] = useState(
//     searchParams.get("isResidential") || ""
//   );
//   const [isCommercialFilter, setIsCommercialFilter] = useState(
//     searchParams.get("isCommercial") || ""
//   );
//   const [isLandFilter, setIsLandFilter] = useState(
//     searchParams.get("isLand") || ""
//   );

//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//   const categoryRef = useRef(null);

//   const buyOptions = ["Buy", "Sell", "Lease", "Investment"];

//   // Handle form submission
//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     const filters = {
//       location,
//       buy: buyOption !== "Buy" ? buyOption : undefined,
//       isResidential: isResidentialFilter ? "true" : undefined,
//       isCommercial: isCommercialFilter ? "true" : undefined,
//       isLand: isLandFilter ? "true" : undefined,
//     };

//     Object.keys(filters).forEach(
//       (key) => filters[key] === undefined && delete filters[key]
//     );

//     const queryParams = new URLSearchParams(filters).toString();
//     navigate(`/properties?${queryParams}`);
//   };

//   // Handle click outside dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (categoryRef.current && !categoryRef.current.contains(event.target)) {
//         setIsCategoryOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Intersection Observer Hook
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const toggleCategory = (category) => {
//     switch (category) {
//       case "Residential":
//         setIsResidentialFilter(!isResidentialFilter);
//         break;
//       case "Commercial":
//         setIsCommercialFilter(!isCommercialFilter);
//         break;
//       case "Land":
//         setIsLandFilter(!isLandFilter);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <motion.div
//       ref={ref}
//       className="hero-filter mt-8"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="text-xl font-semibold text-center mb-4 text-gray-400">
//         Find Your Dream Property
//       </h2>
//       <form
//         onSubmit={handleFilterSubmit}
//         className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between sm:items-center"
//       >
//         {/* Category Dropdown */}
//         <div ref={categoryRef} className="relative w-full sm:w-1/4">
//           <label className="block text-sm font-medium text-gray-400 mb-1">
//             Categories
//           </label>
//           <button
//             type="button"
//             className="flex justify-between items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full"
//             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//           >
//             {isResidentialFilter || isCommercialFilter || isLandFilter
//               ? "Categories Selected"
//               : "Select Categories"}
//             <MdOutlineArrowDropDown size={20} />
//           </button>
//           {isCategoryOpen && (
//             <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
//               {["Residential", "Commercial", "Land"].map((category) => (
//                 <li
//                   key={category}
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm text-gray-800 flex items-center"
//                   onClick={() => toggleCategory(category)}
//                 >
//                   <input
//                     type="checkbox"
//                     className="mr-2"
//                     checked={
//                       category === "Residential"
//                         ? isResidentialFilter
//                         : category === "Commercial"
//                           ? isCommercialFilter
//                           : isLandFilter
//                     }
//                     onChange={() => toggleCategory(category)}
//                   />
//                   {category}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Buy Dropdown */}
//         <div className="relative w-full sm:w-1/4">
//           <label className="block text-sm font-medium text-gray-400 mb-1">
//             Buy Options
//           </label>
//           <select
//             value={buyOption}
//             onChange={(e) => setBuyOption(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full"
//           >
//             {buyOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Location Dropdown */}
//         <div className="flex flex-col w-full sm:w-1/4">
//           <label className="block text-sm font-medium text-gray-400 mb-1">
//             Location
//           </label>
//           <select
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full"
//           >
//             <option value="">Select Location</option>
//             {/* Add location options here */}
//             <option value="Lower Parel">Lower Parel</option>
//             <option value="Tardeo">Tardeo</option>
//             <option value="Nepeansea Road">Nepeansea Road</option>
//             <option value="Girgaon">Girgaon</option>
//             <option value="Gamdevi">Gamdevi</option>
//             <option value="Lamington Road">Lamington Road</option>
//             <option value="Peddar Road"> Peddar Road</option>
//             <option value="Prabhadevi">Prabhadevi</option>
//             <option value="Mumbai Central">Mumbai Central</option>
//             <option value="Opera House">Opera House</option>
//             <option value="Matunga">Matunga</option>
//             <option value="Mulund East">Mulund East</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-end w-full sm:w-auto">
//           <button
//             type="submit"
//             className="bg-blue-600 mt-6 text-white px-5 py-2 text-sm font-semibold rounded-lg hover:bg-blue-500 shadow-sm w-full sm:w-auto"
//           >
//             GO
//           </button>
//         </div>
//       </form>
//     </motion.div>
//   );
// };

// export default HeroFilter;










// Currently Using This Code . :
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HeroFilter.css";

const HeroFilter = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);

  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [buyOption, setBuyOption] = useState(searchParams.get("buy") || "Buy");

  // Individual filters for each category
  const [isResidentialFilter, setIsResidentialFilter] = useState(
    searchParams.get("isResidential") || ""
  );
  const [isCommercialFilter, setIsCommercialFilter] = useState(
    searchParams.get("isCommercial") || ""
  );
  const [isLandFilter, setIsLandFilter] = useState(
    searchParams.get("isLand") || ""
  );

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef(null);

  const buyOptions = ["Buy", "Sell", "Lease", "Investment"];

  // Handle form submission
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filters = {
      location,
      buy: buyOption !== "Buy" ? buyOption : undefined,
      isResidential: isResidentialFilter ? "true" : undefined,
      isCommercial: isCommercialFilter ? "true" : undefined,
      isLand: isLandFilter ? "true" : undefined,
    };

    Object.keys(filters).forEach(
      (key) => filters[key] === undefined && delete filters[key]
    );

    const queryParams = new URLSearchParams(filters).toString();
    navigate(`/properties?${queryParams}`);
  };

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Intersection Observer Hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const toggleCategory = (category) => {
    switch (category) {
      case "Residential":
        setIsResidentialFilter(true);
        setIsCommercialFilter(false);
        setIsLandFilter(false);
        break;
      case "Commercial":
        setIsResidentialFilter(false);
        setIsCommercialFilter(true);
        setIsLandFilter(false);
        break;
      case "Land":
        setIsResidentialFilter(false);
        setIsCommercialFilter(false);
        setIsLandFilter(true);
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      ref={ref}
      className="hero-filter mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-400">
        Find Your Dream Property
      </h2>
      <form
        onSubmit={handleFilterSubmit}
        className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between sm:items-center"
      >
        {/* Category Dropdown */}
        <div ref={categoryRef} className="relative w-full sm:w-1/4">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Categories
          </label>
          <button
            type="button"
            className="flex justify-between items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            {isResidentialFilter || isCommercialFilter || isLandFilter
              ? "Categories Selected"
              : "Select Categories"}
            <MdOutlineArrowDropDown size={20} />
          </button>
          {isCategoryOpen && (
            <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
              {["Residential", "Commercial", "Land"].map((category) => (
                <li
                  key={category}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm text-gray-800 flex items-center"
                  onClick={() => toggleCategory(category)}
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={
                      category === "Residential"
                        ? isResidentialFilter
                        : category === "Commercial"
                          ? isCommercialFilter
                          : isLandFilter
                    }
                    onChange={() => toggleCategory(category)}
                  />
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Buy Dropdown */}
        <div className="relative w-full sm:w-1/4">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Buy Options
          </label>
          <select
            value={buyOption}
            onChange={(e) => setBuyOption(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full"
          >
            {buyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Location Dropdown */}
        <div className="flex flex-col w-full sm:w-1/4">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full"
          >
            <option value="">Select Location</option>
            {/* Add location options here */}
            <option value="Lower Parel">Lower Parel</option>
            <option value="Tardeo">Tardeo</option>
            <option value="Nepeansea Road">Nepeansea Road</option>
            <option value="Girgaon">Girgaon</option>
            <option value="Gamdevi">Gamdevi</option>
            <option value="Lamington Road">Lamington Road</option>
            <option value="Peddar Road"> Peddar Road</option>
            <option value="Prabhadevi">Prabhadevi</option>
            <option value="Mumbai Central">Mumbai Central</option>
            <option value="Opera House">Opera House</option>
            <option value="Matunga">Matunga</option>
            <option value="Mulund East">Mulund East</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end w-full sm:w-auto">
          <button
            type="submit"
            className="bg-blue-600 mt-6 text-white px-5 py-2 text-sm font-semibold rounded-lg hover:bg-blue-500 shadow-sm w-full sm:w-auto"
          >
            GO
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default HeroFilter;
