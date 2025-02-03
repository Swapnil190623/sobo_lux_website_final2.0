// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import ProjectCard from "../../components/PropertyCard/ProjectCard.jsx";
// import Data from "../../data/Data.jsx";

// // Page to display all available projects
// const ProjectsPage = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   // State variables for filters and pagination
//   const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
//   const [propertyTypeFilter, setPropertyTypeFilter] = useState(searchParams.get("type") || "");
//   const [bedroomsFilter, setBedroomsFilter] = useState(searchParams.get("bedrooms") || "");
//   const [locationFilter, setLocationFilter] = useState(searchParams.get("location") || "");
//   const [minPriceFilter, setMinPriceFilter] = useState(searchParams.get("minPrice") || "");
//   const [maxPriceFilter, setMaxPriceFilter] = useState(searchParams.get("maxPrice") || "");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 12;

//   // Properties Data
//   const properties = Data.ProjectData1;

//   // Extract unique locations for the location filter
//   const uniqueLocations = [...new Set(properties.map((property) => property.location))];

//   // Update state from URL parameters on mount
//   useEffect(() => {
//     setSearchQuery(searchParams.get("search") || "");
//     setPropertyTypeFilter(searchParams.get("type") || "");
//     setBedroomsFilter(searchParams.get("bedrooms") || "");
//     setLocationFilter(searchParams.get("location") || "");
//     setMinPriceFilter(searchParams.get("minPrice") || "");
//     setMaxPriceFilter(searchParams.get("maxPrice") || "");
//     setCurrentPage(1);
//   }, [searchParams]);

//   // Function to update URL parameters
//   const updateUrlWithFilters = (updatedParams = {}) => {
//     const params = new URLSearchParams();

//     if (updatedParams.search !== undefined) {
//       updatedParams.search && params.set("search", updatedParams.search);
//     } else if (searchQuery) {
//       params.set("search", searchQuery);
//     }

//     if (updatedParams.type !== undefined) {
//       updatedParams.type && params.set("type", updatedParams.type);
//     } else if (propertyTypeFilter) {
//       params.set("type", propertyTypeFilter);
//     }

//     if (updatedParams.bedrooms !== undefined) {
//       updatedParams.bedrooms && params.set("bedrooms", updatedParams.bedrooms);
//     } else if (bedroomsFilter) {
//       params.set("bedrooms", bedroomsFilter);
//     }

//     if (updatedParams.location !== undefined) {
//       updatedParams.location && params.set("location", updatedParams.location);
//     } else if (locationFilter) {
//       params.set("location", locationFilter);
//     }

//     if (updatedParams.minPrice !== undefined) {
//       updatedParams.minPrice && params.set("minPrice", updatedParams.minPrice);
//     } else if (minPriceFilter) {
//       params.set("minPrice", minPriceFilter);
//     }

//     if (updatedParams.maxPrice !== undefined) {
//       updatedParams.maxPrice && params.set("maxPrice", updatedParams.maxPrice);
//     } else if (maxPriceFilter) {
//       params.set("maxPrice", maxPriceFilter);
//     }

//     setSearchParams(params);
//   };

//   // Handlers for filter changes
//   const handleFilterChange = (e, setState, key) => {
//     const value = e.target.value;
//     setState(value);
//     setCurrentPage(1);
//     updateUrlWithFilters({ [key]: value });
//   };

//   // Reset filters
//   const resetFilters = () => {
//     setSearchQuery("");
//     setPropertyTypeFilter("");
//     setBedroomsFilter("");
//     setLocationFilter("");
//     setMinPriceFilter("");
//     setMaxPriceFilter("");
//     setCurrentPage(1);
//     setSearchParams({});
//   };

//   // Filter properties based on selected criteria
//   const filteredProperties = properties.filter((property) => {
//     const matchesSearch = !searchQuery ||
//       property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       property.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()));

//     const matchesType = !propertyTypeFilter || property.propertyType.toLowerCase() === propertyTypeFilter.toLowerCase();
//     const matchesBedrooms = !bedroomsFilter || (property.bhk && property.bhk.toLowerCase().includes(bedroomsFilter.toLowerCase()));
//     const matchesLocation = !locationFilter || property.location.toLowerCase().includes(locationFilter.toLowerCase());

//     const priceValue = parseInt((property.price || "").replace(/,/g, "")) || 0;
//     const matchesPrice = (!minPriceFilter || priceValue >= parseInt(minPriceFilter)) &&
//       (!maxPriceFilter || priceValue <= parseInt(maxPriceFilter));

//     return matchesSearch && matchesType && matchesBedrooms && matchesLocation && matchesPrice;
//   });

//   // Pagination logic
//   const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
//   const currentProperties = filteredProperties.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen flex flex-col mt-14">
//       <div className="max-w-7xl mx-auto p-6 flex-grow">
//         {/* Search and Filters */}
//         <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
//           <input
//             type="text"
//             placeholder="Search by title, location, or features..."
//             value={searchQuery}
//             onChange={(e) => handleFilterChange(e, setSearchQuery, "search")}
//             className="col-span-1 md:col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <select
//             value={propertyTypeFilter}
//             onChange={(e) => handleFilterChange(e, setPropertyTypeFilter, "type")}
//             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             <option value="">All Types</option>
//             <option value="sale">For Sale</option>
//             <option value="rent">For Rent</option>
//           </select>
//           <select
//             value={bedroomsFilter}
//             onChange={(e) => handleFilterChange(e, setBedroomsFilter, "bedrooms")}
//             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             <option value="">Any BHK</option>
//             <option value="1 bhk">1 BHK</option>
//             <option value="2 bhk">2 BHK</option>
//             <option value="3 bhk">3 BHK</option>
//           </select>
//           <select
//             value={locationFilter}
//             onChange={(e) => handleFilterChange(e, setLocationFilter, "location")}
//             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             <option value="">All Locations</option>
//             {uniqueLocations.map((location) => (
//               <option key={location} value={location}>{location}</option>
//             ))}
//           </select>
//           <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-2">
//             <input
//               type="number"
//               placeholder="Min Price"
//               value={minPriceFilter}
//               onChange={(e) => handleFilterChange(e, setMinPriceFilter, "minPrice")}
//               className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="number"
//               placeholder="Max Price"
//               value={maxPriceFilter}
//               onChange={(e) => handleFilterChange(e, setMaxPriceFilter, "maxPrice")}
//               className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//           <button
//             className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
//             onClick={() => setCurrentPage(1)}
//           >
//             Apply Filters
//           </button>
//           <button
//             className="p-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-200"
//             onClick={resetFilters}
//           >
//             Reset Filters
//           </button>
//         </div>

//         {/* Property Listings */}
//         {currentProperties.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentProperties.map((property, index) => (
//               <ProjectCard key={index} property={property} />
//             ))}
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center h-64 text-gray-500">
//             <p>No properties match your criteria.</p>
//             <button
//               className="mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
//               onClick={resetFilters}
//             >
//               Reset Filters
//             </button>
//           </div>
//         )}

//         {/* Pagination */}
//         {filteredProperties.length > itemsPerPage && (
//           <div className="mt-6 flex justify-center space-x-2">
//             <button
//               className={`p-2 border rounded-lg ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
//               onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Prev
//             </button>
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 className={`p-2 border rounded-lg ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-100"}`}
//                 onClick={() => handlePageChange(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               className={`p-2 border rounded-lg ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
//               onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;

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
      updatedParams.bedrooms && params.set("bedrooms", updatedParams.bedrooms);
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
      !bedroomsFilter ||
      (property.bhk &&
        property.bhk.toLowerCase().includes(bedroomsFilter.toLowerCase()));
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

  return (
    <motion.div
      className="min-h-screen flex flex-col mt-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto p-6 flex-grow">
        {/* Search and Filters */}
        <motion.div
          className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Search by title, location, or features..."
            value={searchQuery}
            onChange={(e) => handleFilterChange(e, setSearchQuery, "search")}
            className="col-span-1 md:col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-500"
          />
          <select
            value={propertyTypeFilter}
            onChange={(e) =>
              handleFilterChange(e, setPropertyTypeFilter, "type")
            }
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-500"
          >
            <option value="">All Types</option>
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>
          <select
            value={bedroomsFilter}
            onChange={(e) =>
              handleFilterChange(e, setBedroomsFilter, "bedrooms")
            }
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-500"
          >
            <option value="">Any BHK</option>
            <option value="1 bhk">1 BHK</option>
            <option value="2 bhk">2 BHK</option>
            <option value="3 bhk">3 BHK</option>
          </select>
          <select
            value={locationFilter}
            onChange={(e) =>
              handleFilterChange(e, setLocationFilter, "location")
            }
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-500"
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min Price"
              value={minPriceFilter}
              onChange={(e) =>
                handleFilterChange(e, setMinPriceFilter, "minPrice")
              }
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-500"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPriceFilter}
              onChange={(e) =>
                handleFilterChange(e, setMaxPriceFilter, "maxPrice")
              }
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-500"
            />
          </div>
          <button
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-500"
            onClick={() => setCurrentPage(1)}
          >
            Apply Filters
          </button>
          <button
            className="p-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-500"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </motion.div>

        {/* Property Listings */}
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
                className="transition-all duration-500"
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

        {/* Pagination */}
        {filteredProperties.length > itemsPerPage && (
          <motion.div
            className="mt-6 flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className={`p-2 border rounded-lg ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100 transition-all duration-500"
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
                className={`p-2 border rounded-lg ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100 transition-all duration-500"
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`p-2 border rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100 transition-all duration-500"
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
