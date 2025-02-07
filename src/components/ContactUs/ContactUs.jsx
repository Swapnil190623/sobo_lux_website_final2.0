//wroking

// import React from "react";
// import { motion } from "framer-motion";

// function ContactUs() {
//   return (
//     <div className="bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
//         {/* Clipped Background Image */}
//         <motion.div
//           className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg')] bg-cover bg-center brightness-50"
//           style={{
//             clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)", // Unique diagonal cut shape
//           }}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//         ></motion.div>

//         {/* Text Content */}
//         <motion.div
//           className="relative z-10 max-w-4xl"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-6xl font-bold text-gold font-playfair">
//             Get in Touch with Us
//           </h1>
//           <p className="text-lg text-gray-300 mt-4 font-inter">
//             We’re here to help! Whether you have questions or want to schedule a
//             consultation, we’re just a message away.
//           </p>
//         </motion.div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-24 px-6 max-w-7xl mx-auto text-center">
//         <motion.h2
//           className="text-5xl font-bold text-gold font-playfair"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Contact Us
//         </motion.h2>
//         <p className="text-lg text-gray-400 mt-4 font-inter max-w-3xl mx-auto">
//           We’d love to hear from you. Fill out the form below, and our team will
//           get back to you as soon as possible.
//         </p>

//         {/* Contact Form */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <label className="block text-lg text-gray-300">Name</label>
//             <input
//               type="text"
//               className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
//               placeholder="Your Name"
//             />
//           </motion.div>
//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <label className="block text-lg text-gray-300">Phone</label>
//             <input
//               type="text"
//               className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
//               placeholder="Your Phone"
//             />
//           </motion.div>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <label className="block text-lg text-gray-300">Email</label>
//             <input
//               type="email"
//               className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
//               placeholder="Your Email"
//             />
//           </motion.div>

//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <label className="block text-lg text-gray-300">BHK</label>
//             <select className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold">
//               <option>1 BHK</option>
//               <option>2 BHK</option>
//               <option>3 BHK</option>
//             </select>
//           </motion.div>
//         </div>

//         {/* Location and Message Section on Single Line */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Location Section */}
//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-lg"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <label className="block text-lg text-gray-300">Location</label>
//             <input
//               type="text"
//               className="mt-2 w-full px-3 py-2 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
//               placeholder="Your Location"
//             />
//           </motion.div>

//           {/* Message Section */}
//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-lg"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <label className="block text-lg text-gray-300">Message</label>
//             <textarea
//               className="mt-2 w-full px-3 py-2 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
//               rows="3"
//               placeholder="Your Message"
//             ></textarea>
//           </motion.div>
//         </div>

//         <motion.button
//           className="mt-8 px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-opacity-80 transition-all duration-500"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         >
//           Send Message
//         </motion.button>
//       </section>

//       {/* CTA */}
//       <section className="py-24 text-white text-center">
//         <motion.h2
//           className="text-5xl font-bold font-playfair"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           We’re Here to Help
//         </motion.h2>
//         <p className="text-lg mt-4 font-inter">
//           Reach out to us and let’s discuss how we can assist you.
//         </p>
//         <motion.button
//           className="mt-8 px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-opacity-80 transition-all duration-500"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         >
//           Get in Touch
//         </motion.button>
//       </section>
//     </div>
//   );
// }

// export default ContactUs;

//try

// import React from "react";
// import { motion } from "framer-motion";

// function ContactUs() {
//   return (
//     <div className="bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
//         {/* Clipped Background Image */}
//         <motion.div
//           className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg')] bg-cover bg-center brightness-50"
//           style={{
//             clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)", // Unique diagonal cut shape
//           }}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//         ></motion.div>

//         {/* Text Content */}
//         <motion.div
//           className="relative z-10 max-w-4xl"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-6xl font-bold text-gold font-playfair">
//             Get in Touch with Us
//           </h1>
//           <p className="text-lg text-gray-300 mt-4 font-inter">
//             We’re here to help! Whether you have questions or want to schedule a
//             consultation, we’re just a message away.
//           </p>
//         </motion.div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-24 px-6 max-w-[600px] mx-auto text-center">
//         <motion.h2
//           className="text-5xl font-bold text-gold font-playfair"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Contact Us
//         </motion.h2>
//         <p className="text-lg text-gray-400 mt-4 font-inter max-w-3xl mx-auto">
//           We’d love to hear from you. Fill out the form below, and our team will
//           get back to you as soon as possible.
//         </p>

//         {/* Contact Form */}
//         <div className="mt-12 grid grid-cols-1 gap-12">
//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <input
//               type="text"
//               className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
//               placeholder="Your Name"
//             />
//           </motion.div>

//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <input
//               type="text"
//               className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
//               placeholder="Your Phone"
//             />
//           </motion.div>

//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <input
//               type="email"
//               className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
//               placeholder="Your Email"
//             />
//           </motion.div>

//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <select className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold">
//               <option>1 BHK</option>
//               <option>2 BHK</option>
//               <option>3 BHK</option>
//             </select>

//             <select className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold">
//               <option>1 BHK</option>
//               <option>2 BHK</option>
//               <option>3 BHK</option>
//             </select>
//           </motion.div>

//           {/* Location and Message Section */}
//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-lg"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <input
//               type="text"
//               className="mt-2 w-full px-3 py-2 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
//               placeholder="Your Location"
//             />
//           </motion.div>

//           <motion.div
//             className="bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-lg"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <textarea
//               className="mt-2 w-full px-3 py-2 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
//               rows="3"
//               placeholder="Your Message"
//             ></textarea>
//           </motion.div>

//           <motion.button
//             className="mt-8 px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-opacity-80 transition-all duration-500"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             Send Message
//           </motion.button>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 text-white text-center">
//         <motion.h2
//           className="text-5xl font-bold font-playfair"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           We’re Here to Help
//         </motion.h2>
//         <p className="text-lg mt-4 font-inter">
//           Reach out to us and let’s discuss how we can assist you.
//         </p>
//         <motion.button
//           className="mt-8 px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-opacity-80 transition-all duration-500"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         >
//           Get in Touch
//         </motion.button>
//       </section>
//     </div>
//   );
// }

// export default ContactUs;

//today

import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Snackbar, TextField, Slider, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateTime, setDateTime] = useState(null);
  const [mode, setMode] = useState("Online Meet");
  const [buyOrLease, setBuyOrLease] = useState("Buy");
  const [type, setType] = useState("Residential");
  const [bhk, setBhk] = useState("1 BHK");
  const [sqft, setSqft] = useState("");
  const [location, setLocation] = useState("");
  const [customLocation, setCustomLocation] = useState(""); // To store the custom location
  const [remarks, setRemarks] = useState("");
  const [budget, setBudget] = useState([5000000, 150000000]); // Initial values for Buy and Sell
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  //double tick method ..

  const callDoubleTickAPI = async (leadData) => {
    try {
      // Prepare message content based on lead data
      const messageContent = {
        messages: [
          {
            // Your WhatsApp sender number
            to: "+919224448861",
            // to: "+919930526549",

            from: leadData.phone,
            content: {
              templateName: "website_lead_data", // Replace with your actual template name
              language: "en", // Language for the template
              templateData: {
                header: { type: "TEXT", placeholder: leadData.name }, // Replace with the lead's name
                body: {
                  placeholders: [
                    leadData.name,
                    leadData.phone,
                    leadData.email,

                    leadData.location,
                    leadData.dateTime,
                  ],
                },
              },
            },
          },
        ],
      };

      // Log the data being sent to the API
      console.log(
        "Sending the following data to Double Tick API:",
        messageContent
      );
      // // Prepare axios request options
      const options = {
        method: "POST",
        url: "https://public.doubletick.io/whatsapp/message/template",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "key_M7wvrSnTcq", // Replace with your actual API key
        },
        data: messageContent,
      };

      // Make the request using axios
      const response = await axios.request(options);
      // console.log("Double Tick API Response:", response.data);

      setSnackbarMessage("Lead submitted to Double Tick API successfully!");
      setOpen(true);
    } catch (error) {
      console.error("Error submitting lead to Double Tick API:", error);
      setSnackbarMessage(
        "Failed to submit lead to Double Tick API. Please try again."
      );
      setOpen(true);
    }
  };

  // Function to call LeadRat API
  const callLeadRatAPI = async (leadData) => {
    try {
      //this is our data which will sent to Lead_Rat
      // Prepare the payload for LeadRat API

      const payload = [
        {
          // their data fields

          name: leadData.name,
          state: "Maharashtra",
          city: "",
          location: leadData.location,
          budget: leadData.budget,
          notes: "",
          email: leadData.email,
          countryCode: "91",
          mobile: leadData.phone,
          project: "",
          property: "",
          leadExpectedBudget: "",
          propertyType: "",
          submittedDate: "",
          submittedTime: "",
          source: "",
          subSource: "Reflex Realty Website",
          agencyName: "",
          leadScheduledDate: "",
          leadScheduleTime: "",
          leadStatus:
            "Schedule Site Visit or Schedule Meeting or Booked or Booking Cancel",
          leadBookedDate: "",
          leadBookedTime: "",
          additionalProperties: {
            EnquiredFor: "Buy/Sale/Rent",
            BHKType: "Simplex/Duplex/PentHouse/Others",
            NoOfBHK: leadData.bhk,
            key1: "value1",
            key2: "value1",
          },
          primaryUser: "",
          secondaryUser: "",
        },
      ];

      // Log the payload for debugging
      console.log("Payload:", payload);

      // API request options
      const options = {
        method: "POST",
        url: "https://connect.leadrat.com/api/v1/integration/Website", // Lead_Rat endpoint
        headers: {
          "Content-Type": "application/json",
          "API-Key": "YzdmZDVjNmYtODU2OS00OTc5LTg1NTAtNmYxNDA4MDA2ZWJh", // your Lead_Rat API key
        },
        data: payload,
      };

      // Make the request
      const response = await axios.request(options); //error in this

      console.log("LeadRat API Response:", response.data);
      console.log("LeadRat API Response:", response);
      return {
        success: true,
        message: "Lead successfully submitted to LeadRat!",
      };
    } catch (error) {
      console.error(
        "Error submitting lead to LeadRat API:",
        error.response?.data || error
      );
      return {
        success: false,
        message: "Failed to submit lead to LeadRat. Please try again.",
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      setSnackbarMessage(
        "Please fill out all required fields before submitting."
      );
      setOpen(true);
      return;
    }

    // Prepare the data to send as a Lead
    // data object to send using email js ..
    const leadData = {
      name,
      phone,
      email,
      dateTime: dateTime ? dateTime.toISOString() : "",
      mode,
      buyOrLease,
      type,
      bhk,
      sqft,
      location: location === "Other" ? customLocation : location, // Use custom location if "Other" is selected
      remarks,
      budget: `${budget[0]} - ${budget[1]}`,
    };

    // Log lead data for debugging
    // console.log("Lead Data:", leadData);

    // Prepare the message body to send via EmailJS (formatted as a lead)
    const messageBody = `
      New Lead Details:
      - Name : ${leadData.name}
      - Phone: ${leadData.phone}
      - Email: ${leadData.email || "Not Available"}
      - Date : ${leadData.dateTime || "Not Available"}
      - Mode : ${leadData.mode || "Not Available"}
      - Buy/Lease : ${leadData.buyOrLease || "Not Available"}
      - Type : ${leadData.type || "Not Available"}
      - BHK  : ${leadData.bhk || "Not Available"}
      - Sqft : ${leadData.sqft || "Not Available"}
      - Location: ${leadData.location || "Not Available"}
      - Remarks : ${leadData.remarks || "No remarks"}
      - Budget  : ${leadData.budget || "Not Available"}
    `.trim();

    // Sending email with EmailJS
    emailjs
      .send(
        "service_53ymv9j", // Your EmailJS service ID
        "template_eakiu1i", // Your EmailJS template ID
        {
          from_name: leadData.name,
          to_email: "dipesh.reflexrealty@gmail.com", // The email to send the lead to
          message: messageBody, // The formatted message containing lead details
        },
        "5P8DIy1yhCb_jSY_G" // Your EmailJS user ID ( Public Key)
      )
      .then(
        (response) => {
          setSnackbarMessage("Lead submitted successfully!");
          setOpen(true);
        },
        (err) => {
          setSnackbarMessage("Failed to submit your lead. Please try again.");
          setOpen(true);
        }
      );

    // Resetting form fields after submission
    setName("");
    setPhone("");
    setEmail("");
    setDateTime(null);
    setMode("Online Meet");
    setBuyOrLease("Buy");
    setType("Residential");
    setBhk("1 BHK");
    setSqft("");
    setLocation("");
    setCustomLocation(""); // Clear custom location input
    setRemarks("");
    setBudget([5000000, 150000000]); // Reset the budget slider

    callLeadRatAPI(leadData); //calling lead_Rat Function
    callDoubleTickAPI(leadData); //calling double tick function
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Function to format numbers in Lakh/Cr
  const formatNumber = (number) => {
    const lakh = 100000;
    const crore = 10000000;

    if (number >= crore) {
      return `${(number / crore).toFixed(2)} Cr`;
    } else {
      return `${(number / lakh).toFixed(2)} Lakh`;
    }
  };

  // Slider range adjustment based on Buy, Sell, or Lease
  const handleBuyOrLeaseChange = (e) => {
    const value = e.target.value;
    setBuyOrLease(value);

    // Adjust slider range for Lease and Buy/Sell
    if (value === "Lease") {
      setBudget([50000, 5000000]); // Adjust slider range for Lease
    } else {
      setBudget([5000000, 150000000]); // Reset slider range for Buy/Sell
    }
  };

  // Handle phone number change
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Check if the number already contains the country code
    if (!value.startsWith("+91")) {
      value = "+91" + value.replace(/^(\+91)?/, ""); // Prepend +91 if not present
    }

    setPhone(value); // Update the phone state with the formatted value
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Clipped Background Image */}
        <motion.div
          className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg')] bg-cover bg-center brightness-50"
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)", // Unique diagonal cut shape
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        {/* Text Content */}
        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold text-gold font-playfair">
            Get in Touch with Us
          </h1>
          <p className="text-lg text-gray-300 mt-4 font-inter">
            We’re here to help! Whether you have questions or want to schedule a
            consultation, we’re just a message away.
          </p>
        </motion.div>
      </section>

      {/* Contact Headings */}
      <section className="py-24 px-8 max-w-[600px] mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-gold font-playfair"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <p className="text-lg text-gray-400 mt-4 font-inter max-w-3xl mx-auto">
          We’d love to hear from you. Fill out the form below, and our team will
          get back to you as soon as possible.
        </p>

        {/* Contact Form Is Here .*/}
        <div className="mt-12 grid grid-cols-1 gap-12">
          <motion.div
            className=" backdrop-blur-xl rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
              placeholder="Your Name"
              required
            />
          </motion.div>

          {/* phone */}
          <motion.div
            className=" backdrop-blur-xl   rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange} // Use handlePhoneChange
              className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
              placeholder="Your Phone"
              required
            />
          </motion.div>

          {/* email */}
          <motion.div
            className=" backdrop-blur-xl   rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
              placeholder="Your Email"
            />
          </motion.div>

          {/* Dropdown Section For Type & BHK */}
          <motion.div
            className=" backdrop-blur-xl  rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              <select
                value={buyOrLease}
                onChange={handleBuyOrLeaseChange}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
              >
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
                <option value="Lease">Lease</option>
              </select>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Land">Land</option>
              </select>

              <select
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className={`mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold ${type === "Commercial" || type === "Land" ? "line-through" : ""}`}
                disabled={type === "Commercial" || type === "Land"}
              >
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK</option>
                <option value="5 BHK">5 BHK</option>
                <option value="Penthouse">Penthouse</option>
              </select>

              <input
                type="text"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
                placeholder="Enter Sqft"
              />
            </div>

            {/* budget slider  */}
            <div className="mb-2">
              <Typography variant="body1" className="mb-2">
                Select Your Budget
              </Typography>
              <Slider
                value={budget}
                onChange={(_, newValue) => setBudget(newValue)}
                valueLabelDisplay="auto"
                min={buyOrLease === "Lease" ? 50000 : 5000000}
                max={buyOrLease === "Lease" ? 5000000 : 1500000000}
                step={50000}
                valueLabelFormat={(value) => formatNumber(value)}
              />
              <div className="flex justify-between">
                <Typography variant="body2">
                  {formatNumber(budget[0])}
                </Typography>
                <Typography variant="body2">
                  {formatNumber(budget[1])}
                </Typography>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className=" backdrop-blur-xl rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-2">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
              >
                <option value="">Select Location</option>
                <option value="Worli , Mumbai">Worli , Mumbai</option>
                <option value="Matunga East, Mumbai">
                  Matunga East, Mumbai
                </option>
                <option value="Andheri West, Mumbai">
                  Andheri West, Mumbai
                </option>
                <option value="Bandra, Mumbai">Bandra, Mumbai</option>
                <option value="Marine Lines, Mumbai">
                  Marine Lines, Mumbai
                </option>
                <option value="Mahalaxmi, Mumbai">Mahalaxmi, Mumbai</option>
                <option value="Malabar Hill, Mumbai">
                  Malabar Hill, Mumbai
                </option>

                <option value="Other">Other</option>
              </select>
              {location === "Other" && (
                <input
                  type="text"
                  value={customLocation}
                  onChange={(e) => setCustomLocation(e.target.value)}
                  className="w-full h-12 mt-4 rounded-full border pl-4"
                  placeholder="Enter Custom Location"
                />
              )}
            </div>
          </motion.div>

          {/* Date & Time */}
          <motion.div
            className=" backdrop-blur-xl   rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-white focus:outline-none focus:border-gold"
              placeholder="Remarks or Additional Information "
            />

            <h3 className="text-gray-400 mt-4 tracking-wider font-manrope text-2xl font-semibold leading-8 mb-4">
              Book Your Online Slot / Visit
            </h3>
            <div className="mb-4 flex items-center justify-between bg-gray-200 p-2 rounded-xl">
              <div className="w-1/2 pr-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Date & Time"
                    value={dateTime}
                    onChange={setDateTime}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        fullWidth
                        className="h-12"
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>

              <div className="w-1/2 pl-2">
                <select
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-black border-2 border-gray-600 text-gray-100 focus:outline-none focus:border-gold"
                >
                  <option value="Online Meet">Online Meet</option>
                  <option value="Whatsapp / Call">Whatsapp / Call</option>
                  <option value="Site Visit">Site Visit</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Submit Button*/}
          <motion.button
            className="mt-2 px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-opacity-80 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </div>
      </section>

      {/* Starts From Here */}
      <section className="py-24 text-white text-center">
        <motion.h2
          className="text-5xl font-bold font-playfair"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We’re Here to Help
        </motion.h2>
        <p className="text-lg mt-4 font-inter">
          Reach out to us and let’s discuss how we can assist you.
        </p>
        <motion.button
          className="mt-8 px-6 py-3 bg-[#ffd586] text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-opacity-80 transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Get in Touch
        </motion.button>

        {/* Snackbar for success/failure messages */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={snackbarMessage}
        />
      </section>
    </div>
  );
}

export default ContactUs;
