// testing Code 2 ....

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import Logo from "../../assets/Logo_single.jpeg"; // Reusing your logo

function Careers() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    resume: null,
  });

  // State for success/error messages
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Handle file input separately
    });
  };

  // Doubletick API method
  const sendToDoubleTick = async (formData, phone) => {
    // Get the current date and time
    const currentDateTime = new Date().toLocaleString(); // You can format the date and time as needed
    // Prepare message data object
    const messageData = {
      messages: [
        {
          to: phone, // Recipient phone number
          content: {
            templateName: "job_enquiry_reflex_website", // Template name
            language: "en",
            templateData: {
              body: {
                placeholders: [
                  formData.name, // Placeholder 1
                  formData.phone, // Placeholder 2
                  formData.email, // Placeholder 4
                  formData.role, // Placeholder 3
                  currentDateTime, // Placeholder 5 (Current Date & Time)
                ],
              },
            },
          },
        },
      ],
    };

    try {
      // Send the request to Doubletick API
      const response = await axios.post(
        "https://public.doubletick.io/whatsapp/message/template",
        messageData,
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "key_M7wvrSnTcq", // Authorization key
          },
        }
      );

      // Return the response from the API
      return response.data;
    } catch (error) {
      // Log the error and throw it for further handling
      console.error("Error sending message to Doubletick:", error);
      throw new Error("Failed to send message to Doubletick.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    setIsError(false);

    try {
      // Send form data to Doubletick API
      const recipientPhone = "91 9930526549"; // Replace with the actual recipient phone number
      await sendToDoubleTick(formData, recipientPhone);

      // On success, show a success message and reset the form
      setMessage(
        "Application submitted successfully! We'll get back to you soon."
      );
      setFormData({ name: "", phone: "", email: "", role: "", resume: null });
    } catch (error) {
      // On error, show an error message
      setMessage("Failed to submit your application. Please try again.");
      setIsError(true);
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section (Unchanged) */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2021/08/22/21/13/house-6566177_1280.jpg')] bg-cover bg-center brightness-50"
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold text-gold font-playfair">
            Join the Pinnacle of Luxury
          </h1>
          <p className="text-lg text-gray-300 mt-4 font-inter">
            Be part of a team that crafts extraordinary experiences and
            redefines excellence.
          </p>
        </motion.div>
      </section>

      {/* Career Opportunities Section (Unchanged) */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-[#E8C27E] via-[#D9A441] via-50% to-[#F1E2C3] text-transparent bg-clip-text font-playfair drop-shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Career Opportunities
        </motion.h2>
        <p className="text-lg text-gray-400 mt-4 font-inter max-w-3xl mx-auto">
          Explore roles that blend creativity, innovation, and sophistication in
          the world of luxury real estate.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Luxury Sales Specialist",
              desc: "Lead high-stake transactions for elite clients, showcasing the finest properties with unmatched expertise.",
            },
            {
              title: "Design Architect",
              desc: "Shape the future of luxury living by designing iconic residences that redefine elegance.",
            },
            {
              title: "Senior Architect",
              desc: "Oversee groundbreaking projects, blending innovation and artistry for the world’s most exclusive properties.",
            },
          ].map((career, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-900/50 p-6 rounded-xl border border-white/10 shadow-xl backdrop-blur-md hover:bg-gray-800/70 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold text-gold font-playfair">
                {career.title}
              </h3>
              <p className="text-gray-400 mt-2 font-inter">{career.desc}</p>
              {/* <motion.button
                className="mt-4 px-4 py-2 bg-[#ffd586] text-black text-sm font-semibold rounded-lg shadow-md hover:bg-opacity-80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Apply Now
              </motion.button> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section with Success/Error Message */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-[#E8C27E] via-[#D9A441] via-50% to-[#F1E2C3] text-transparent bg-clip-text font-playfair drop-shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Apply Now
        </motion.h2>
        <p className="text-lg text-gray-400 mt-4 font-inter">
          Submit your application to join our elite team.
        </p>

        {/* Success/Error Message */}
        {message && (
          <motion.div
            className={`mt-4 p-4 rounded-xl ${
              isError
                ? "bg-red-500/20 text-red-300"
                : "bg-green-500/20 text-green-300"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {message}
          </motion.div>
        )}

        <motion.form
          className="mt-12 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-all duration-300"
            required
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-all duration-300"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-all duration-300"
            required
          />

          {/* Role Dropdown */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-all duration-300 appearance-none"
            required
          >
            <option value="" disabled>
              Select a Role
            </option>
            <option value="Luxury Sales Specialist">
              Luxury Sales Specialist
            </option>
            <option value="Design Architect">Design Architect</option>
            <option value="Senior Architect">Senior Architect</option>
            <option value="Marketing Manager">Marketing Manager</option>
            <option value="Other">Other</option>
          </select>

          {/* File Upload for Resume */}
          <div className="relative">
            <label
              htmlFor="resume"
              className="flex items-center w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white cursor-pointer hover:bg-gray-800/70 transition-all duration-300"
            >
              <span className="inline-block px-4 py-2 bg-[#ffd586] text-black text-sm font-semibold rounded-lg mr-4 hover:bg-opacity-80 transition-all duration-300">
                Choose File
              </span>
              <span className="text-gray-500 truncate">
                {formData.resume
                  ? formData.resume.name
                  : "Upload Resume (PDF, DOC)"}
              </span>
            </label>
            <input
              id="resume"
              type="file"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              className="absolute inset-0 opacity-0 cursor-pointer"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-opacity-80 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Submit Application
          </motion.button>
        </motion.form>
      </section>

      {/* CTA (Unchanged) */}
      <section className="py-24 text-center">
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-[#E8C27E] via-[#D9A441] via-50% to-[#F1E2C3] text-transparent bg-clip-text font-playfair drop-shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Shape the Future of Luxury
        </motion.h2>
        <p className="text-lg mt-4 font-inter">
          Join a legacy of excellence and innovation.
        </p>
        <motion.button
          className="mt-8 px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-opacity-80 transition-all duration-500"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Back to Home
        </motion.button>
      </section>
    </div>
  );
}

export default Careers;
