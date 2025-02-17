//animations

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import Data from "../../data/Data.jsx";

// Page to display all available projects
const ProjectsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // State variables for filters and pagination
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [propertyTypeFilter, setPropertyTypeFilter] = useState(
    searchParams.get("type") || ""
  );
  const [bedroomsFilter, setBedroomsFilter] = useState(
    searchParams.get("bedrooms") || ""
  );
  const [locationFilter, setLocationFilter] = useState(
    searchParams.get("location") || ""
  );
  const [minPriceFilter, setMinPriceFilter] = useState(
    searchParams.get("minPrice") || ""
  );
  const [maxPriceFilter, setMaxPriceFilter] = useState(
    searchParams.get("maxPrice") || ""
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Properties Data
  const properties = Data.ProjectData1;

  // Extract unique locations for the location filter
  const uniqueLocations = [
    ...new Set(properties.map((property) => property.location)),
  ];

  // Update state from URL parameters on mount
  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
    setPropertyTypeFilter(searchParams.get("type") || "");
    setBedroomsFilter(searchParams.get("bedrooms") || "");
    setLocationFilter(searchParams.get("location") || "");
    setMinPriceFilter(searchParams.get("minPrice") || "");
    setMaxPriceFilter(searchParams.get("maxPrice") || "");
    setCurrentPage(1);
  }, [searchParams]);

  // Function to update URL parameters
  const updateUrlWithFilters = (updatedParams = {}) => {
    const params = new URLSearchParams();

    if (updatedParams.search !== undefined) {
      updatedParams.search && params.set("search", updatedParams.search);
    } else if (searchQuery) {
      params.set("search", searchQuery);
    }

    if (updatedParams.type !== undefined) {
      updatedParams.type && params.set("type", updatedParams.type);
    } else if (propertyTypeFilter) {
      params.set("type", propertyTypeFilter);
    }
    if (updatedParams.bedrooms !== undefined) {
      if (updatedParams.bedrooms)
        params.set("bedrooms", updatedParams.bedrooms);
    } else if (bedroomsFilter) {
      params.set("bedrooms", bedroomsFilter);
    }

    if (updatedParams.location !== undefined) {
      updatedParams.location && params.set("location", updatedParams.location);
    } else if (locationFilter) {
      params.set("location", locationFilter);
    }

    if (updatedParams.minPrice !== undefined) {
      updatedParams.minPrice && params.set("minPrice", updatedParams.minPrice);
    } else if (minPriceFilter) {
      params.set("minPrice", minPriceFilter);
    }

    if (updatedParams.maxPrice !== undefined) {
      updatedParams.maxPrice && params.set("maxPrice", updatedParams.maxPrice);
    } else if (maxPriceFilter) {
      params.set("maxPrice", maxPriceFilter);
    }

    setSearchParams(params);
  };

  // Handlers for filter changes
  const handleFilterChange = (e, setState, key) => {
    const value = e.target.value;
    setState(value);
    setCurrentPage(1);
    updateUrlWithFilters({ [key]: value });
  };

  const handleBedroomsChange = (e) => {
    setBedroomsFilter(e.target.value);
    setCurrentPage(1);
    updateUrlWithFilters({ bedrooms: e.target.value });
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setPropertyTypeFilter("");
    setBedroomsFilter("");
    setLocationFilter("");
    setMinPriceFilter("");
    setMaxPriceFilter("");
    setCurrentPage(1);
    setSearchParams({});
  };

  // Filter properties based on selected criteria
  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      !searchQuery ||
      property.type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.features?.some((feature) =>
        feature.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesType =
      !propertyTypeFilter ||
      property.propertyType?.toLowerCase() === propertyTypeFilter.toLowerCase();

    const matchesBedrooms =
      bedroomsFilter === "" ||
      (property.bhk &&
        `${property.bhk} bhk`.toLowerCase() === bedroomsFilter.toLowerCase());

    const matchesLocation =
      !locationFilter ||
      property.location.toLowerCase().includes(locationFilter.toLowerCase());

    const priceValue = parseInt((property.price || "").replace(/,/g, "")) || 0;
    const matchesPrice =
      (!minPriceFilter || priceValue >= parseInt(minPriceFilter)) &&
      (!maxPriceFilter || priceValue <= parseInt(maxPriceFilter));

    return (
      matchesSearch &&
      matchesType &&
      matchesBedrooms &&
      matchesLocation &&
      matchesPrice
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const currentProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // return (
  //   <motion.div
  //     className="min-h-screen flex flex-col mt-14"
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     transition={{ duration: 0.5 }}
  //   >
  //     <div className="max-w-7xl mx-auto p-6 flex-grow">
  //       {/* new code with glass effect  */}

  //       <motion.div
  //         className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4 p-6 backdrop-blur-md bg-black/10 border border-white/20 shadow-lg rounded-xl"
  //         initial={{ y: -20, opacity: 0 }}
  //         animate={{ y: 0, opacity: 1 }}
  //         transition={{ duration: 0.5 }}
  //       >
  //         <input
  //           type="text"
  //           placeholder="🔍 Search by title, location, or features..."
  //           value={searchQuery}
  //           onChange={(e) => handleFilterChange(e, setSearchQuery, "search")}
  //           className="col-span-1 md:col-span-2 p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500"
  //         />
  //         <select
  //           value={propertyTypeFilter}
  //           onChange={(e) =>
  //             handleFilterChange(e, setPropertyTypeFilter, "type")
  //           }
  //           className="p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500"
  //         >
  //           <option value="" className="text-black">
  //             All Types
  //           </option>
  //           <option value="sale" className="text-black">
  //             For Sale
  //           </option>
  //           <option value="rent" className="text-black">
  //             For Rent
  //           </option>
  //         </select>
  //         <select
  //           value={bedroomsFilter}
  //           onChange={handleBedroomsChange}
  //           className="p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500"
  //         >
  //           <option value="" className="text-black">
  //             Any BHK
  //           </option>
  //           <option value="1 bhk" className="text-black">
  //             1 BHK
  //           </option>
  //           <option value="2 bhk" className="text-black">
  //             2 BHK
  //           </option>
  //           <option value="3 bhk" className="text-black">
  //             3 BHK
  //           </option>
  //           <option value="4 bhk" className="text-black">
  //             4 BHK
  //           </option>
  //           <option value="5 bhk" className="text-black">
  //             5 BHK
  //           </option>
  //         </select>
  //         <select
  //           value={locationFilter}
  //           onChange={(e) =>
  //             handleFilterChange(e, setLocationFilter, "location")
  //           }
  //           className="p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500"
  //         >
  //           <option value="" className="text-white">
  //             All Locations
  //           </option>
  //           {uniqueLocations.map((location) => (
  //             <option key={location} value={location} className="text-black">
  //               {location}
  //             </option>
  //           ))}
  //         </select>
  //         <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-2">
  //           <input
  //             type="number"
  //             placeholder="💰 Min Price"
  //             value={minPriceFilter}
  //             onChange={(e) =>
  //               handleFilterChange(e, setMinPriceFilter, "minPrice")
  //             }
  //             className="p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500"
  //           />
  //           <input
  //             type="number"
  //             placeholder="💰 Max Price"
  //             value={maxPriceFilter}
  //             onChange={(e) =>
  //               handleFilterChange(e, setMaxPriceFilter, "maxPrice")
  //             }
  //             className="p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500"
  //           />
  //         </div>
  //         <button
  //           className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 shadow-md transition-all duration-500"
  //           onClick={() => setCurrentPage(1)}
  //         >
  //           Apply Filters
  //         </button>
  //         <button
  //           className="p-3 bg-white/20 text-white border border-white/30 backdrop-blur-lg rounded-lg hover:bg-white/30 transition-all duration-500"
  //           onClick={resetFilters}
  //         >
  //           Reset Filters
  //         </button>
  //       </motion.div>

  //       {/* Property Listings */}
  //       {currentProperties.length > 0 ? (
  //         <motion.div
  //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ duration: 0.5 }}
  //         >
  //           {currentProperties.map((property, index) => (
  //             <motion.div
  //               key={index}
  //               className="transition-all duration-500"
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               transition={{ delay: index * 0.1, duration: 0.5 }}
  //             >
  //               <ProjectCard property={property} />
  //             </motion.div>
  //           ))}
  //         </motion.div>
  //       ) : (
  //         <div className="flex flex-col items-center justify-center h-64 text-gray-500">
  //           <p>No properties match your criteria.</p>
  //           <button
  //             className="mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-500"
  //             onClick={resetFilters}
  //           >
  //             Reset Filters
  //           </button>
  //         </div>
  //       )}

  //       {/* Pagination */}
  //       {/* {filteredProperties.length > itemsPerPage && (
  //         <motion.div
  //           className="mt-6 flex justify-center space-x-2"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ duration: 0.5 }}
  //         >
  //           <button
  //             className={`p-2 border rounded-lg ${
  //               currentPage === 1
  //                 ? "bg-gray-300 cursor-not-allowed"
  //                 : "bg-white hover:bg-gray-100 transition-all duration-500"
  //             }`}
  //             onClick={() =>
  //               currentPage > 1 && handlePageChange(currentPage - 1)
  //             }
  //             disabled={currentPage === 1}
  //           >
  //             Previous
  //           </button>
  //           {[...Array(totalPages)].map((_, i) => (
  //             <button
  //               key={i}
  //               className={`p-2 border rounded-lg ${
  //                 currentPage === i + 1
  //                   ? "bg-blue-600 text-white"
  //                   : "bg-white hover:bg-gray-100 transition-all duration-500"
  //               }`}
  //               onClick={() => handlePageChange(i + 1)}
  //             >
  //               {i + 1}
  //             </button>
  //           ))}
  //           <button
  //             className={`p-2 border rounded-lg ${
  //               currentPage === totalPages
  //                 ? "bg-gray-300 cursor-not-allowed"
  //                 : "bg-white hover:bg-gray-100 transition-all duration-500"
  //             }`}
  //             onClick={() =>
  //               currentPage < totalPages && handlePageChange(currentPage + 1)
  //             }
  //             disabled={currentPage === totalPages}
  //           >
  //             Next
  //           </button>
  //         </motion.div>
  //       )} */}

  //       {filteredProperties.length > itemsPerPage && (
  //         <motion.div
  //           className="mt-6 flex justify-center space-x-2"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ duration: 0.5 }}
  //         >
  //           <button
  //             className={`px-4 py-2 rounded-lg backdrop-blur-md border border-white/30 shadow-md
  //     transition-all duration-500 ${
  //       currentPage === 1
  //         ? "bg-white/20 text-gray-400 cursor-not-allowed"
  //         : "bg-white/30 text-white hover:bg-white/40"
  //     }`}
  //             onClick={() =>
  //               currentPage > 1 && handlePageChange(currentPage - 1)
  //             }
  //             disabled={currentPage === 1}
  //           >
  //             Previous
  //           </button>

  //           {[...Array(totalPages)].map((_, i) => (
  //             <button
  //               key={i}
  //               className={`px-4 py-2 rounded-lg backdrop-blur-md border border-white/30 shadow-md
  //       transition-all duration-500 ${
  //         currentPage === i + 1
  //           ? "bg-blue-500 text-white border-blue-600 shadow-lg"
  //           : "bg-white/30 text-white hover:bg-white/40"
  //       }`}
  //               onClick={() => handlePageChange(i + 1)}
  //             >
  //               {i + 1}
  //             </button>
  //           ))}

  //           <button
  //             className={`px-4 py-2 rounded-lg backdrop-blur-md border border-white/30 shadow-md
  //     transition-all duration-500 ${
  //       currentPage === totalPages
  //         ? "bg-white/20 text-gray-400 cursor-not-allowed"
  //         : "bg-white/30 text-white hover:bg-white/40"
  //     }`}
  //             onClick={() =>
  //               currentPage < totalPages && handlePageChange(currentPage + 1)
  //             }
  //             disabled={currentPage === totalPages}
  //           >
  //             Next
  //           </button>
  //         </motion.div>
  //       )}
  //     </div>
  //   </motion.div>
  // );

  return (
    <motion.div
      className="min-h-screen min-w-[340px] flex flex-col mt-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl w-full mx-auto p-6 flex-grow">
        {/* Filter Section - Responsive Adjustments */}
        <motion.div
          className="mb-6 grid p-2 grid-cols-1 md:grid-cols-4 gap-4 backdrop-blur-md bg-black/10 border border-white/20 shadow-lg rounded-xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="🔍 Search by title, location, or features..."
            value={searchQuery}
            onChange={(e) => handleFilterChange(e, setSearchQuery, "search")}
            className="col-span-1 md:col-span-2 p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500 text-sm sm:text-base"
          />
          <select
            value={propertyTypeFilter}
            onChange={(e) =>
              handleFilterChange(e, setPropertyTypeFilter, "type")
            }
            className="p-3  bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500 text-sm sm:text-base"
          >
            <option value="" className="text-black">
              All Types
            </option>
            <option value="sale" className="text-black">
              For Sale
            </option>
            <option value="rent" className="text-black">
              For Rent
            </option>
          </select>
          <select
            value={bedroomsFilter}
            onChange={handleBedroomsChange}
            className="p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500 text-sm sm:text-base"
          >
            <option value="" className="text-black">
              Any BHK
            </option>
            <option value="1 bhk" className="text-black">
              1 BHK
            </option>
            <option value="2 bhk" className="text-black">
              2 BHK
            </option>
            <option value="3 bhk" className="text-black">
              3 BHK
            </option>
            <option value="4 bhk" className="text-black">
              4 BHK
            </option>
            <option value="5 bhk" className="text-black">
              5 BHK
            </option>
          </select>
          <select
            value={locationFilter}
            onChange={(e) =>
              handleFilterChange(e, setLocationFilter, "location")
            }
            className="p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500 text-sm sm:text-base"
          >
            <option value="" className="text-white">
              All Locations
            </option>
            {uniqueLocations.map((location) => (
              <option key={location} value={location} className="text-black">
                {location}
              </option>
            ))}
          </select>
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="💰 Min Price"
              value={minPriceFilter}
              onChange={(e) =>
                handleFilterChange(e, setMinPriceFilter, "minPrice")
              }
              className="p-2 sm:p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500 text-sm sm:text-base"
            />
            <input
              type="number"
              placeholder="💰 Max Price"
              value={maxPriceFilter}
              onChange={(e) =>
                handleFilterChange(e, setMaxPriceFilter, "maxPrice")
              }
              className="p-3 bg-white/20 border border-white/30 backdrop-blur-lg rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500 text-sm sm:text-base"
            />
          </div>
          {/* <button
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 shadow-md transition-all duration-500 text-sm sm:text-base"
            onClick={() => setCurrentPage(1)}
          >
            Apply Filters
          </button> */}

<button
  className="p-3 bg-white/30 backdrop-blur-lg text-white rounded-lg hover:bg-white/80 hover:text-black shadow-xl transition-all duration-500 text-sm sm:text-base"
  onClick={() => setCurrentPage(1)}
>
  Apply Filters
</button>

          <button
            className="p-3 bg-white/20 text-white border border-white/30 backdrop-blur-lg rounded-lg hover:bg-white/30 transition-all duration-500 text-sm sm:text-base"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </motion.div>

        {/* Property Listings - Responsive Adjustments */}
        {currentProperties.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentProperties.map((property, index) => (
              <motion.div
                key={index}
                className="transition-all duration-500 transform scale-95 sm:scale-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProjectCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <p>No properties match your criteria.</p>
            <button
              className="mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-500"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination - Responsive Adjustments */}
        {filteredProperties.length > itemsPerPage && (
          <motion.div
            className="mt-6 flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className={`px-3 sm:px-4 py-2 rounded-lg backdrop-blur-md border border-white/30 shadow-md
              transition-all duration-500 text-xs sm:text-sm ${
                currentPage === 1
                  ? "bg-white/20 text-gray-400 cursor-not-allowed"
                  : "bg-white/30 text-white hover:bg-white/40"
              }`}
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1)
              }
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-3 sm:px-4 py-2 rounded-lg backdrop-blur-md border border-white/30 shadow-md 
                transition-all duration-500 text-xs sm:text-sm ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white border-blue-600 shadow-lg"
                    : "bg-white/30 text-white hover:bg-white/40"
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`px-3 sm:px-4 py-2 rounded-lg backdrop-blur-md border border-white/30 shadow-md
              transition-all duration-500 text-xs sm:text-sm ${
                currentPage === totalPages
                  ? "bg-white/20 text-gray-400 cursor-not-allowed"
                  : "bg-white/30 text-white hover:bg-white/40"
              }`}
              onClick={() =>
                currentPage < totalPages && handlePageChange(currentPage + 1)
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;

//test
