// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import PopupForm from "../../components/PopupForm/PopupForm"; // Import PopupForm component

// const ProjectDetailPage = ({ projects = [] }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Find the project from either data set
//   const project = projects.find((proj) =>
//     typeof proj.id === "number" ? proj.id === Number(id) : proj.id === id
//   );

//   const [showPopup, setShowPopup] = useState(false);

//   if (!project) {
//     return (
//       <motion.div
//         className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-4xl font-semibold text-gray-900 mb-6">
//           Project Not Found
//         </h1>
//         <button
//           className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
//           onClick={() => navigate("/")}
//         >
//           Go Back to Home
//         </button>
//       </motion.div>
//     );
//   }

//   const getNested = (obj, path, defaultValue = "Ask For Details") => {
//     return (
//       path.split(".").reduce((acc, part) => acc && acc[part], obj) ||
//       defaultValue
//     );
//   };

//   const agentName = getNested(project, "contactAgent.name", "Vidhi");
//   const agentPhone = getNested(project, "contactAgent.phone", "+91 9224448861");
//   const agentEmail = getNested(
//     project,
//     "contactAgent.email",
//     "agent@example.com"
//   );

//   const handleWhatsApp = (e) => {
//     e.stopPropagation(); // Prevent the click from bubbling to the parent div
//     const whatsappNumber = "919224448861"; // Replace with actual number
//     const message = encodeURIComponent(
//       `Hello, I'm interested in the property: ${project.projectType} located at ${project.location}.`
//     );
//     window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
//   };

//   return (
//     <motion.div
//       className="max-w-6xl mx-auto px-6 md:px-12 py-10 bg-white mt-24"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
//         <h1 className="text-5xl font-bold text-gray-900 leading-tight">
//           {project.title || "Project Details"}
//         </h1>
//         <button
//           className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
//           onClick={() => navigate("/")}
//         >
//           Back to Listings
//         </button>
//       </div>

//       <motion.div
//         className="relative w-full h-[400px] mb-10 rounded-lg overflow-hidden"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <img
//           src={
//             project.image ||
//             "https://via.placeholder.com/800x400?text=No+Image+Available"
//           }
//           alt={project.title || "Project Image"}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//         <div className="absolute bottom-4 left-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
//           {project.location || "Ask For Details"}
//         </div>
//       </motion.div>

//       <div className="mb-10">
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6">Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="text-lg text-gray-700 space-y-4">
//             <p>
//               <strong>Price:</strong> {project.price || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Location:</strong> {project.location || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Type:</strong> {project.projectType || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Land Area:</strong> {project.area || "Ask For Details"}
//             </p>
//           </div>
//           <div className="text-lg text-gray-700 space-y-4">
//             <p>
//               <strong>BHK:</strong> {project.bedrooms || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Possession:</strong>{" "}
//               {project.possession || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Expected Closure:</strong>{" "}
//               {project.expectedClosure || "Ask For Details"}
//             </p>
//             <p>
//               <strong>Project Status:</strong>{" "}
//               {project.projectStatus || "Ask For Details"}
//             </p>
//             {/* <p>
//               <strong>Availability:</strong>{" "}
//               {project.availability || "Ask For Details"}
//             </p> */}
//           </div>
//         </div>
//       </div>

//       <div className="mb-10">
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6">
//           Contact Agent
//         </h2>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg shadow-md"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div>
//             <p className="text-lg text-gray-700">
//               <strong>Agent Name:</strong> {agentName}
//             </p>
//             <p className="text-lg text-gray-700">
//               <strong>Phone:</strong> {agentPhone}
//             </p>
//             {/* <p className="text-lg text-gray-700">
//               <strong>Email:</strong> {agentEmail}
//             </p> */}
//           </div>
//           <div className="flex items-center">
//             <button
//               className="w-full py-3 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-300"
//               onClick={() => {
//                 window.location.href = `tel:${agentPhone}`;
//               }}
//             >
//               Contact Now
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-4">
//         <motion.button
//           className="flex-1 py-4 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-300"
//           onClick={() => setShowPopup(true)}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           Enquire Now
//         </motion.button>
//         <motion.button
//           className="flex-1 py-4 bg-gray-100 text-gray-900 text-lg font-medium rounded-lg shadow-sm hover:shadow-md transition duration-300"
//           onClick={handleWhatsApp} // Fixed handler
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           Contact via WhatsApp
//         </motion.button>
//       </div>

//       {showPopup && (
//         <PopupForm
//           onClose={() => setShowPopup(false)}
//           property={{
//             type: project.projectType,
//             location: project.location,
//             price: project.price,
//           }}
//         />
//       )}
//     </motion.div>
//   );
// };

// export default ProjectDetailPage;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PopupForm from "../../components/PopupForm/PopupForm"; // Import PopupForm component

const ProjectDetailPage = ({ projects = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the project from either data set
  const project = projects.find((proj) =>
    typeof proj.id === "number" ? proj.id === Number(id) : proj.id === id
  );

  const [showPopup, setShowPopup] = useState(false);

  if (!project) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Project Not Found
        </h1>
        <button
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
          onClick={() => navigate("/")}
        >
          Go Back to Home
        </button>
      </motion.div>
    );
  }

  const getNested = (obj, path, defaultValue = "Ask For Details") => {
    return (
      path.split(".").reduce((acc, part) => acc && acc[part], obj) ||
      defaultValue
    );
  };

  const agentName = getNested(project, "contactAgent.name", "Vidhi");
  const agentPhone = getNested(project, "contactAgent.phone", "+91 9224448861");
  const agentEmail = getNested(
    project,
    "contactAgent.email",
    "agent@example.com"
  );

  const handleWhatsApp = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to the parent div
    const whatsappNumber = "919224448861"; // Replace with actual number
    const message = encodeURIComponent(
      `Hello, I'm interested in the property: ${project.projectType} located at ${project.location}.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 md:px-12 py-10 bg-white mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          {project.location || "Project Details"}
        </h1>
        <button
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
          onClick={() => navigate("/")}
        >
          Back to Listings
        </button>
      </div>

      <motion.div
        className="relative w-full h-[400px] mb-10 rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={
            project.image ||
            "https://i.ibb.co/MhfHdt6/sea-view-appartment-in-mumbai.png"
          }
          alt={project.title || "Project Image"}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
          {project.location || "Ask For Details"}
        </div>
      </motion.div>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-xl text-gray-700 space-y-4">
            <p>
              <strong>Price:</strong> {project.price || "Ask For Details"}
            </p>
            <p>
              <strong>Location:</strong> {project.location || "Ask For Details"}
            </p>
            <p>
              <strong>Type:</strong> {project.projectType || "Ask For Details"}
            </p>
            <p>
              <strong>Land Area:</strong> {project.area || "Ask For Details"}
            </p>
          </div>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              <strong>BHK:</strong> {project.bedrooms || "Ask For Details"}
            </p>
            <p>
              <strong>Possession:</strong>{" "}
              {project.possession || "Ask For Details"}
            </p>
            <p>
              <strong>Expected Closure:</strong>{" "}
              {project.expectedClosure || "Ask For Details"}
            </p>
            <p>
              <strong>Project Status:</strong>{" "}
              {project.projectStatus || "Ask For Details"}
            </p>
            {/* <p>
              <strong>Availability:</strong>{" "}
              {project.availability || "Ask For Details"}
            </p> */}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Contact Agent
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <p className="text-lg text-gray-700">
              <strong>Agent Name:</strong> {agentName}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> {agentPhone}
            </p>
            {/* <p className="text-lg text-gray-700">
              <strong>Email:</strong> {agentEmail}
            </p> */}
          </div>
          <div className="flex items-center">
            <button
              className="w-full py-3 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-300"
              onClick={() => {
                window.location.href = `tel:${agentPhone}`;
              }}
            >
              Contact Now
            </button>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <motion.button
          className="flex-1 py-4 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-300"
          onClick={() => setShowPopup(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Enquire Now
        </motion.button>
        <motion.button
          className="flex-1 py-4 bg-gray-100 text-gray-900 text-lg font-medium rounded-lg shadow-sm hover:shadow-md transition duration-300"
          onClick={handleWhatsApp} // Fixed handler
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Contact via WhatsApp
        </motion.button>
      </div>

      {showPopup && (
        <PopupForm
          onClose={() => setShowPopup(false)}
          property={{
            type: project.projectType,
            location: project.location,
            price: project.price,
          }}
        />
      )}
    </motion.div>
  );
};

export default ProjectDetailPage;
