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
    visitDay: "",
    visitTime: "",
    bhk: "",
    budget: "",
    remarks: "",
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
      // Send form data to Doubletick API
      // const recipientPhone = "91 9221053932"; // Replace with the actual recipient phone number
      const recipientPhones = [
        "91 9221053932", // number for this event
        "91 9930526549", // swapnil athavale personal number
        "91 7208981709", // harshit patni reflex number
      ]; // Add more numbers here

      await sendToDoubleTick(formData, recipientPhones);

      await sendThankYouMessage(formData);

      // On success, show a success message and reset the form
      setMessage("Registered Succesfully ✨");
      setFormData({
        name: "",
        phone: "",
        email: "",
        visitDay: "",
        visitTime: "",
        bhk: "",
        budget: "",
        remarks: "",
      });
    } catch (error) {
      // On error, show an error message
      setMessage("Failed to register. Please try again.");
      setIsError(true);
    }
  };

  // Doubletick API method
  const sendToDoubleTick = async (formData, phones) => {
    const messageData = {
      messages: phones.map((phone) => ({
        to: phone, // Loop through each phone number
        content: {
          templateName: "event_micl",
          language: "en",
          templateData: {
            body: {
              placeholders: [
                formData.name,
                formData.phone,
                formData.email,
                formData.visitDay,
                formData.visitTime,
                formData.bhk,
                formData.budget,
                formData.remarks,
              ],
            },
          },
        },
      })),
    };

    try {
      const response = await axios.post(
        "https://public.doubletick.io/whatsapp/message/template",
        messageData,
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "key_M7wvrSnTcq",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error sending message to Doubletick:", error);
      throw new Error("Failed to send message to Doubletick.");
    }
  };

  // sending thank you to the registered people .
  const sendThankYouMessage = async (formData) => {
    const messageData = {
      messages: [
        {
          to: `91${formData.phone}`, // Send to the user's phone number
          content: {
            // templateName: "thank_you_message_micl_event_message", // Your newly created template
            templateName: "micl_event_reply", // Your newly created template
            language: "en",
            templateData: {
              body: {
                placeholders: [formData.visitDay, formData.visitTime],
              },
            },
          },
        },
      ],
    };

    try {
      const response = await axios.post(
        "https://public.doubletick.io/whatsapp/message/template",
        messageData,
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "key_M7wvrSnTcq", // your API Key
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error sending Thank You message to Doubletick:", error);
      throw new Error("Failed to send Thank You message.");
    }
  };

  // const sendThankYouMessage = async (formData) => {
  //   // Remove spaces and non-numeric characters from phone number
  //   const cleanPhone = formData.phone.replace(/\D/g, ""); // keep only digits

  //   const messageData = {
  //     messages: [
  //       {
  //         to: `${cleanPhone}`, // clean phone
  //         content: {
  //           templateName: "thank_you_message_micl_event_message",
  //           language: "en",
  //           templateData: {
  //             body: {
  //               placeholders: [
  //                 formData.visitDay,
  //                 formData.visitTime,
  //               ],
  //             },
  //           },
  //         },
  //       },
  //     ],
  //   };

  //   try {
  //     const response = await axios.post(
  //       "https://public.doubletick.io/whatsapp/message/template",
  //       messageData,
  //       {
  //         headers: {
  //           accept: "application/json",
  //           "content-type": "application/json",
  //           Authorization: "key_M7wvrSnTcq",
  //         },
  //       }
  //     );

  //     return response.data;
  //   } catch (error) {
  //     console.error("Error sending Thank You message to Doubletick:", error);
  //     throw new Error("Failed to send Thank You message.");
  //   }
  // };

  return (
    <div className="bg-black text-white font-inter">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 relative text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://keystonerealestateadvisory.com/storage/app/uploads/property/JL5XOM2k5vZiG8PDzK8jHXPv2LHfIIQ7mAW20gRM.webp')] bg-cover bg-center brightness-50"
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
            placeholder="Name"
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#D9A441]"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone "
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
            
          />
          <select
            name="visitDay"
            value={formData.visitDay}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-[#D9A441]"
            required
          >
            <option value="" disabled>
              Prefferd Day Of Visit
            </option>
            <option value="3rd May 2025">3rd May 2025</option>
            <option value="4th May 2025">4th May 2025</option>
          </select>

          <select
            name="visitTime"
            value={formData.visitTime}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-[#D9A441]"
            required
          >
            <option value="" disabled>
              Preffered Time Slot
            </option>
            <option value="10:00 am - 12:00 pm">10:00 am - 12:00 pm</option>
            <option value="12:00 pm - 2:00 pm">12:00 pm - 2:00 pm</option>
            <option value="2:00 pm - 4:00 pm">2:00 pm - 4:00 pm</option>
            <option value="4:00 am - 6:00 pm">4:00 pm - 6:00 pm</option>

            <option value="6:00 pm - 7:00 pm">6:00 pm - 7:00 pm</option>
          </select>

          <select
            name="bhk"
            value={formData.bhk}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-[#D9A441]"
            
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
            name="budget"
            value={formData.budget}
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

          <textarea
            name="remarks"
            value={formData.remarks || ""}
            onChange={handleChange}
            placeholder="Remarks"
            className="w-full p-4 bg-gray-900/70 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#D9A441]"
            rows={4}
          />

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
        {/* <motion.button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-md hover:bg-opacity-80"
          whileHover={{ scale: 1.05 }}
        >
          Back to Home
        </motion.button> */}
      </section>
    </div>
  );
}

export default EventRegistration;
