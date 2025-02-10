import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard/PropertyCard.jsx";
import Data from "../../data/Data.jsx";
import Banner from "../../components/Banner/Banner.jsx"; // Adjust the path according to your project structure

const PropertyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize state variables from URL parameters
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

  //new lines
  const [isCommercialFilter, setIsCommercialFilter] = useState(
    searchParams.get("isCommercial") || ""
  );
  const [isLandFilter, setIsLandFilter] = useState(
    searchParams.get("isLand") || ""
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Properties Data
  const properties = Data.PropertyData2;

  // Extract unique locations for the location filter
  const uniqueLocations = [
    ...new Set(properties.map((property) => property.location)),
  ];

  // Update state when URL parameters change (only on mount)
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    setIsCommercialFilter(params.get("isCommercial") || "");
    setIsLandFilter(params.get("isLand") || "");
    setSearchQuery(params.get("search") || "");
    setPropertyTypeFilter(params.get("type") || "");
    setBedroomsFilter(params.get("bedrooms") || "");
    setLocationFilter(params.get("location") || "");
    setMinPriceFilter(params.get("minPrice") || "");
    setMaxPriceFilter(params.get("maxPrice") || "");
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run only once on mount

  // Function to update URL parameters
  const updateUrlWithFilters = (updatedParams = {}) => {
    const params = new URLSearchParams();

    if (updatedParams.search !== undefined) {
      if (updatedParams.search) params.set("search", updatedParams.search);
    } else if (searchQuery) {
      params.set("search", searchQuery);
    }

    if (updatedParams.type !== undefined) {
      if (updatedParams.type) params.set("type", updatedParams.type);
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
      if (updatedParams.location)
        params.set("location", updatedParams.location);
    } else if (locationFilter) {
      params.set("location", locationFilter);
    }

    if (updatedParams.minPrice !== undefined) {
      if (updatedParams.minPrice)
        params.set("minPrice", updatedParams.minPrice);
    } else if (minPriceFilter) {
      params.set("minPrice", minPriceFilter);
    }

    if (updatedParams.maxPrice !== undefined) {
      if (updatedParams.maxPrice)
        params.set("maxPrice", updatedParams.maxPrice);
    } else if (maxPriceFilter) {
      params.set("maxPrice", maxPriceFilter);
    }

    if (updatedParams.isCommercial !== undefined)
      params.set("isCommercial", updatedParams.isCommercial);
    if (updatedParams.isLand !== undefined)
      params.set("isLand", updatedParams.isLand);

    setSearchParams(params);
  };

  // Handlers for filter changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
    updateUrlWithFilters({ search: e.target.value });
  };

  const handlePropertyTypeChange = (e) => {
    setPropertyTypeFilter(e.target.value);
    setCurrentPage(1);
    updateUrlWithFilters({ type: e.target.value });
  };

  const handleBedroomsChange = (e) => {
    setBedroomsFilter(e.target.value);
    setCurrentPage(1);
    updateUrlWithFilters({ bedrooms: e.target.value });
  };

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
    setCurrentPage(1);
    updateUrlWithFilters({ location: e.target.value });
  };

  const handleMinPriceChange = (e) => {
    setMinPriceFilter(e.target.value);
    setCurrentPage(1);
    updateUrlWithFilters({ minPrice: e.target.value });
  };

  const handleMaxPriceChange = (e) => {
    setMaxPriceFilter(e.target.value);
    setCurrentPage(1);
    updateUrlWithFilters({ maxPrice: e.target.value });
  };

  const handleIsCommercialChange = (e) => {
    setIsCommercialFilter(e.target.value);
    setCurrentPage(1);
    updateUrlWithFilters({ isCommercial: e.target.value });
  };

  const handleIsLandChange = (e) => {
    setIsLandFilter(e.target.value);
    setCurrentPage(1);
    updateUrlWithFilters({ isLand: e.target.value });
  };

  // Reset Filters
  const resetFilters = () => {
    setSearchQuery("");
    setPropertyTypeFilter("");
    setBedroomsFilter("");
    setLocationFilter("");
    setMinPriceFilter("");
    setMaxPriceFilter("");
    setIsCommercialFilter("");
    setIsLandFilter("");
    setCurrentPage(1);

    setSearchParams({});
  };

  // Filter Properties
  const filteredProperties = properties.filter((property) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      property.type?.toLowerCase().includes(query) ||
      property.location?.toLowerCase().includes(query) ||
      property.features?.some((feature) =>
        feature.toLowerCase().includes(query)
      );

    const matchesPropertyType =
      propertyTypeFilter === "" ||
      property.propertyType.toLowerCase() === propertyTypeFilter.toLowerCase();

    const matchesIsCommercial =
      isCommercialFilter === "" ||
      property.isCommercial === (isCommercialFilter === "true");

    const matchesIsLand =
      isLandFilter === "" || property.isLand === (isLandFilter === "true");

    const matchesBedrooms =
      bedroomsFilter === "" ||
      (property.bhk &&
        property.bhk.toLowerCase().includes(bedroomsFilter.toLowerCase()));

    const matchesLocation =
      locationFilter === "" ||
      property.location.toLowerCase().includes(locationFilter.toLowerCase());

    const priceString = property.price || "";
    const priceMatch = priceString.match(/\d[\d,]*/);
    const priceValue = priceMatch
      ? parseInt(priceMatch[0].replace(/,/g, ""))
      : null;

    const minPrice = minPriceFilter ? parseInt(minPriceFilter) : null;
    const maxPrice = maxPriceFilter ? parseInt(maxPriceFilter) : null;

    const matchesPrice =
      (minPrice === null || (priceValue !== null && priceValue >= minPrice)) &&
      (maxPrice === null || (priceValue !== null && priceValue <= maxPrice));

    return (
      matchesSearch &&
      matchesPropertyType &&
      matchesIsCommercial &&
      matchesPropertyType &&
      matchesBedrooms &&
      matchesLocation &&
      matchesPrice
    );
  });

  // Pagination Logic
  const totalItems = filteredProperties.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col mt-14">
      <div className="max-w-7xl mx-auto p-6 flex-grow">
        {/* Search and Filters */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search by title, location, or features..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="col-span-1 md:col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <select
            value={propertyTypeFilter}
            onChange={handlePropertyTypeChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">All Types</option>
            <option value="sale">For Sale</option>
            <option value="lease">For Lease</option>
          </select>

          <select
            value={isCommercialFilter}
            onChange={handleIsCommercialChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Category</option>
            <option value="true">Commercial</option>
            <option value="false">Residential</option>{" "}
            {/*non commercial properties */}
            {/* if isCommercial is false , then display only residential Properties  */}
          </select>

          {/* <select
            value={isLandFilter}
            onChange={handleIsLandChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Land</option>
            <option value="true">Land</option>
            <option value="false">Non-Land</option>
          </select> */}

          <select
            value={bedroomsFilter}
            onChange={handleBedroomsChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Any BHK</option>
            <option value="1 bhk">1 BHK</option>
            <option value="2 bhk">2 BHK</option>
            <option value="3 bhk">3 BHK</option>
          </select>
          <select
            value={locationFilter}
            onChange={handleLocationChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min Price"
              value={minPriceFilter}
              onChange={handleMinPriceChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPriceFilter}
              onChange={handleMaxPriceChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            onClick={() => setCurrentPage(1)}
          >
            Apply Filters
          </button>
          <button
            className="p-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-200"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>

        {/* Property Listings */}
        {currentProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <p>No properties match your criteria.</p>
            <button
              className="mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
              onClick={resetFilters}
            >
              View All Properties
            </button>
          </div>
        )}
        {/* Banner Component */}
        <Banner />
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyPage;
