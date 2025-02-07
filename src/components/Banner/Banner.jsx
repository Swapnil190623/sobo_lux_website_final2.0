import React from "react";
import { useInView } from "react-intersection-observer";
import Video from "./soboBanner.mp4";

const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div
          ref={ref}
          className={`relative rounded-3xl overflow-hidden md:flex md:items-center transition-opacity duration-500 ${
            inView ? "opacity-100" : "opacity-0"
          } bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/30`}
        >
          {/* Video Section with Gradient Overlay */}
          <div className="md:w-1/2 relative">
            <video
              className="w-full h-full object-cover"
              src={Video}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Find Your Dream Property Today!
            </h3>
            <p className="mb-6 font-medium text-lg">
              Helping You at Every Step. Explore properties with trust,
              innovation, and expertise. We make it easy for you to make smart
              choices and reach your goals.
            </p>
            <a
              href="/properties"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white text-md font-medium rounded-full shadow-md backdrop-blur-lg hover:bg-white/30 transition-all duration-300"
              aria-label="Explore Listings"
            >
              Explore Properties
              <svg
                className="w-5 h-5 ml-3 mt-2.5 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.92 6.62C11.8724 6.49725 11.801 6.38511 11.71 6.29L6.71 1.29C6.61676 1.19676 6.50607 1.1228 6.38425 1.07234C6.26243 1.02188 6.13186 0.995911 6 0.995911C5.7337 0.995911 5.4783 1.1017 5.29 1.29C5.19676 1.38324 5.1228 1.49393 5.07234 1.61575C5.02188 1.73758 4.99591 1.86814 4.99591 2C4.99591 2.2663 5.1017 2.5217 5.29 2.71L8.59 6H1C0.734784 6 0.48043 6.10536 0.292893 6.2929C0.105357 6.48043 0 6.73479 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89465 0.734784 8 1 8H8.59L5.29 11.29C5.19627 11.383 5.12188 11.4936 5.07111 11.6154C5.02034 11.7373 4.9942 11.868 4.9942 12C4.9942 12.132 5.02034 12.2627 5.07111 12.3846C5.12188 12.5064 5.19627 12.617 5.29 12.71C5.38296 12.8037 5.49356 12.8781 5.61542 12.9289C5.73728 12.9797 5.86799 13.0058 6 13.0058C6.13201 13.0058 6.26272 12.9797 6.38458 12.9289C6.50644 12.8781 6.61704 12.8037 6.71 12.71L11.71 7.71C11.801 7.6149 11.8724 7.50275 11.92 7.38C12.02 7.13654 12.02 6.86346 11.92 6.62Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
