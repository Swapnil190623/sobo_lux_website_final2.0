//code with mobile responsive ..
import "./Hero.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Video from "./Video.mp4";
import HeroFilter from "./HeroFilter.jsx";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    priceRange: "",
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Mobile breakpoint: 768px
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 330); // Updated screen size condition
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallScreen(window.innerWidth < 340); // Update to 340px condition
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (
      searchQuery.trim() ||
      filters.location ||
      filters.type ||
      filters.priceRange
    ) {
      const queryParams = new URLSearchParams();
      if (searchQuery.trim()) queryParams.append("search", searchQuery);
      if (filters.location) queryParams.append("location", filters.location);
      if (filters.type) queryParams.append("type", filters.type);
      if (filters.priceRange)
        queryParams.append("priceRange", filters.priceRange);
      navigate(`/projects?${queryParams.toString()}`);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="hero-section">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="video-element">
          <source src={Video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      <section className="hero">
        <div className="relative px-6 pt-4 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
            <div className="text-center">
              <InView triggerOnce>
                {({ inView, ref }) => (
                  <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                    // className="ext-balance tracking-normal  font-semibold text-white t"
                  >
                    <span className="text-balance tracking-normal  text-3xl  font-semibold text-white">
                    The Art of Exclusive Living Starts Here.
                    </span>
                    <div></div>

                    <span className="text-transparent bg-clip-text text-5xl bg-gradient-to-r from-[#FFD586] via-[#FFC04D] to-[#FFAA00] ">
                      Sobo Luxe
                    </span>
                  </motion.h1>
                )}
              </InView>
              <InView triggerOnce>
                {({ inView, ref }) => (
                  <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-pretty text-lg font-medium text-gray-400 sm:text-xl"
                  >
                    {/* Elite homes, premium offices, and top investments in South Mumbai. */}
                   South Mumbai's Finest Residances
                  </motion.p>
                )}
              </InView>

              {/* Search Form */}
              <form
                className="max-w-lg mx-auto pt-6"
                onSubmit={handleSearchSubmit}
              >
                <div className="flex">
                  <div className="relative w-full">
                    {/* <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full font-medium z-20 text-md text-gray-900 bg-gray-100 rounded-lg border border-gray-300"
                      placeholder="Search by location , Explore Mumbai Properties"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    /> */}
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full font-medium text-md text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition"
                      placeholder="Search by location, Explore Mumbai Properties"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#000000] rounded-e-lg border border-blue-700 hover:bg-gray-700 focus:ring-4 focus:outline-none "
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Will Deside , is we need this or not */}

              {/* Conditionally render HeroFilter */}
              {/*{!isSmallScreen && (
                <div className="mt-6">
                  <HeroFilter
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              )}*/}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );






  
}
