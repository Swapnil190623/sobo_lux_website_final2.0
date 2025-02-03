import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ScrollableRow.css";

function ScrollableRow({ children, scrollAmount = 300 }) {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Update arrow visibility based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleResize = () => {
      updateArrows();
    };

    // Initial check
    updateArrows();

    // Add event listeners
    container.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      container.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", handleResize);
    };
  }, [children]);

  const updateArrows = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1); // Subtracting 1 for floating point precision
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="scrollable-row relative">
      {showLeftArrow && (
        <button
          className="scroll-arrow left"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <FaChevronLeft size={20} />
        </button>
      )}
      <div className="scroll-container" ref={scrollContainerRef}>
        {children}
      </div>
      {showRightArrow && (
        <button
          className="scroll-arrow right"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </div>
  );
}

export default ScrollableRow;
