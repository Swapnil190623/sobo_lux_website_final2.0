import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EventRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    proof: null,
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    try {
      // Here you can integrate with backend/API like Firebase, Formspree, or Node endpoint
      // For example only: mock submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("🎉 Registration successful!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        event: "",
        proof: null,
      });
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("❌ Something went wrong. Please try again.");
      setIsError(true);
    }
  };

  return (
    <div className="bg-black text-white font-inter">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 relative text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2015/10/18/14/10/smoke-994491_1280.jpg')] bg-cover bg-center brightness-50"
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold text-gold font-playfair">
            VIP Registration
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Join our exclusive luxury event and experience excellence.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-[#E8C27E] via-[#D9A441] to-[#F1E2C3] text-transparent bg-clip-text font-playfair"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          MICL Aaaradya Aavan
        </motion.h2>
        <p className="text-lg text-gray-400 mt-4">
          Fill out your details below to secure your spot.
        </p>

        {message && (
          <motion.div
            className={`mt-6 p-4 rounded-xl font-semibold ${
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
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#D9A441]"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#D9A441]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#D9A441]"
            required
          />
          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-[#D9A441]"
            required
          >
            <option value="" disabled>
              Prefferd Day Of Visit
            </option>
            <option value="26th April 2025">26th April 2025</option>
            <option value=" 27th April 2025">27th April 2025</option>
          </select>

          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-[#D9A441]"
            required
          >
            <option value="" disabled>
              Preffered Time Slot
            </option>
            <option value="10 - 12 ">10 - 12</option>
            <option value="12 - 2">12 - 2</option>
            <option value="2 - 4">2 - 4</option>
            <option value="4 - 6">4 - 6</option>

            <option value="6 - 7">6 - 7</option>
          </select>

          <select
            name="bhk"
            value={formData.event}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-[#D9A441]"
            required
          >
            <option value="" disabled>
              Prefferd BHK
            </option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
            <option value="5 BHK">5 BHK</option>
          </select>

          <select
            name="bhk"
            value={formData.event}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-[#D9A441]"
            required
          >
            <option value="" disabled>
              Prefferd Budget
            </option>
            <option value="8 - 10">8 - 10 CR</option>
            <option value="10 - 15">10 - 15 CR</option>
            <option value="15 - 20">15 - 20 CR</option>
            <option value="20+">20 CR +</option>
          </select>

          

          {/* Submit */}
          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-md hover:bg-opacity-80"
            whileHover={{ scale: 1.05 }}
          >
            Register Now
          </motion.button>
        </motion.form>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-[#E8C27E] via-[#D9A441] to-[#F1E2C3] text-transparent bg-clip-text font-playfair"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          See You at the Event!
        </motion.h2>
        <p className="text-lg text-gray-300 mt-4">
          A luxurious experience awaits you.
        </p>
        <motion.button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-md hover:bg-opacity-80"
          whileHover={{ scale: 1.05 }}
        >
          Back to Home
        </motion.button>
      </section>
    </div>
  );
}

export default EventRegistration;
