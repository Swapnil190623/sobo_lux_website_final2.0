// Import necessary modules
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Reusable Component: Feature Item
const FeatureItem = ({ icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
    variants={fadeInUp}
  >
    <div className="mb-4 text-blue-600">{icon}</div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

// Reusable Component: Testimonial
const Testimonial = ({ quote, author, image }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
    variants={fadeInUp}
  >
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt={`${author}'s photo`}
        className="w-12 h-12 rounded-full mr-4 object-cover"
        loading="lazy"
      />
      <div>
        <h4 className="text-lg font-semibold">{author}</h4>
        <p className="text-gray-500 text-sm">Happy Customer</p>
      </div>
    </div>
    <p className="text-gray-700 italic leading-relaxed">"{quote}"</p>
  </motion.div>
);

// Reusable Component: Timeline Item
const TimelineItem = ({ year, title, description }) => (
  <motion.div
    className="flex flex-col md:flex-row items-start md:items-center mb-8"
    variants={fadeInUp}
  >
    <div className="flex flex-col items-center md:items-start md:w-1/4">
      <div className="text-2xl font-bold text-blue-600">{year}</div>
      <div className="w-1 h-12 bg-blue-600 hidden md:block"></div>
    </div>
    <div className="md:ml-6 md:w-3/4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// Sample FAQ Data
const faqData = [
  {
    question:
      "Can you help us find a property that aligns with our unique lifestyle needs?",
    answer:
      "Yes, we specialize in tailoring property searches to fit your lifestyle, from penthouses with panoramic views to homes with state-of-the-art amenities.",
  },
  {
    question:
      "What makes your consultancy unique in the luxury real estate market?",
    answer:
      "We specialize in curating exclusive luxury properties for discerning clients, offering personalized services that go beyond transactions to include market insights, negotiation expertise, and post-sale support.",
  },
  {
    question: "Do you have expertise in commercial luxury spaces?",
    answer:
      "Yes, we also cater to clients seeking high-end commercial spaces in prestigious locations, ensuring they meet your business and investment needs.",
  },
  {
    question: "Do you offer virtual tours or 3D walkthroughs?",
    answer:
      "Yes, we provide high-quality virtual tours and immersive 3D walkthroughs for a seamless remote viewing experience.",
  },
  {
    question:
      "How do you help clients identify the best investment opportunities?",
    answer:
      "We analyze market trends, property potential, and your financial goals to recommend properties with strong ROI and long-term value.",
  },
  {
    question: "Do you offer after-sales services?",
    answer:
      "Yes, we provide comprehensive after-sales support to ensure a seamless ownership experience.",
  },
  {
    question: "Are your properties Vastu-compliant?",
    answer:
      "Many of our projects adhere to Vastu principles to cater to our clients' preferences.",
  },
];

const AboutUs = () => {
  return (
    <main className="font-sans text-gray-800 mt-20">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24"
        aria-labelledby="about-us-heading"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="container mx-auto px-6 flex flex-col items-center text-center"
          variants={staggerContainer}
        >
          <motion.h1
            id="about-us-heading"
            className="text-5xl font-extrabold mb-6 tracking-tight leading-tight"
            variants={fadeInUp}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            We redefine opulent living in the heart of Mumbai. As a premier real
            estate brand under Reflex Realty, we specialise in curating bespoke
            residences that reflect unparalleled elegance, modernity, and
            exclusivity. With properties situated in South Mumbai’s most coveted
            locations, we offer more than homes – we craft legacies.
          </motion.p>
          <motion.button
            className="mt-4 bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Learn more about us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.section>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-8"></div>

      {/* Mission Section */}
      <motion.section
        className="container mx-auto px-6 py-20"
        aria-labelledby="our-mission-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 id="our-mission-heading" className="text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              To deliver luxury living experiences that seamlessly blend
              world-class architecture, modern amenities, and the cultural
              essence of South Mumbai. We are committed to providing our
              clientele with impeccable service and properties that epitomize
              sophistication.
            </p>
            <p className="text-lg leading-relaxed">
              We help buyers, sellers, and renters navigate the property market
              with confidence, ensuring their needs are met with the highest
              level of care and professionalism.
            </p>
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
            variants={fadeInUp}
          >
            <motion.img
              src="https://i.ibb.co/nfK2B1S/Whats-App-Image-2024-12-20-at-15-47-08-15a336d7.jpg"
              alt="Mission Illustration"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="container mx-auto px-6 py-20"
        aria-labelledby="features-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2
          id="features-heading"
          className="text-4xl font-bold text-center mb-12"
          variants={fadeInUp}
        >
          Our Features
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7m-6 12v-6m0 0L9 13m3 0l3 3"
                />
              </svg>
            }
            title="Prime Locations"
            description="Strategically located properties in South Mumbai’s elite neighborhoods such as Marine Drive, Malabar Hill, and Breach Candy, offering unmatched connectivity and prestige."
          />
          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A2 2 0 013 15.382V6a2 2 0 012-2h3.382a2 2 0 011.414.586L12 7m0 0l3.447-2.724A2 2 0 0118 4h3a2 2 0 012 2v9.382a2 2 0 01-.553 1.894L15 20M12 7v13"
                />
              </svg>
            }
            title="Curated Portfolio"
            description="Exclusive access to ultra-luxury homes and limited-edition residences tailored for high-net-worth individuals (HNI)."
          />
          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 1.343-3 3 0 .79.307 1.507.814 2.07L4.98 19.236A1 1 0 005 20h14a1 1 0 00.543-1.839L15.186 14.07A3.003 3.003 0 0012 11c-1.657 0-3 1.343-3 3z"
                />
              </svg>
            }
            title="Discreet Transactions"
            description="Ensuring utmost confidentiality and professionalism in every deal."
          />
          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7m-6 12v-6m0 0L9 13m3 0l3 3"
                />
              </svg>
            }
            title="End-to-End Service"
            description="From property scouting to closing deals, our consultants provide personalised assistance throughout the process."
          />
          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-3-3h-4M3 20h5v-2a3 3 0 013-3h4m-8-6v6m0 0l3-3m-3 3L6 9"
                />
              </svg>
            }
            title="Trusted Partnerships"
            description="Collaborations with top architects, designers, and financial institutions to deliver the best."
          />
          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            title="Market Insights"
            description="In-depth knowledge of the luxury real estate market to help clients make informed decisions."
          />
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="container mx-auto px-6 py-20 bg-gray-100"
        aria-labelledby="faq-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2
          id="faq-heading"
          className="text-4xl font-bold text-center mb-12"
          variants={fadeInUp}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <details key={index} className="group bg-white rounded shadow">
              <summary className="text-xl font-semibold cursor-pointer p-4 rounded-t group-hover:bg-gray-50 transition-colors">
                {faq.question}
              </summary>
              <motion.div
                className="p-4 bg-white border-l-4 border-blue-600 rounded-b shadow leading-relaxed"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {faq.answer}
              </motion.div>
            </details>
          ))}
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        className="relative bg-blue-700 text-white py-20 my-10"
        aria-labelledby="cta-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div
          className="container mx-auto px-6 text-center"
          variants={staggerContainer}
        >
          <motion.h2
            id="cta-heading"
            className="text-4xl font-extrabold mb-6"
            variants={fadeInUp}
          >
            Ready to find your dream property?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Join thousands of happy customers who trust us to deliver the best
            property listings tailored to their needs.
          </motion.p>
          <motion.button
            className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Explore Listings"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Listings
          </motion.button>
        </motion.div>
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10"></div>
      </motion.section>
    </main>
  );
};

export default AboutUs;
