



// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import emailjs from "@emailjs/browser";
// import axios from "axios";
// import { Snackbar, TextField, Slider, Typography } from "@mui/material";

// const PopupForm = ({ onClose, property }) => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState(""); // New state for email
//   const [remark, setRemark] = useState(""); // New state for remark
//   const [open, setOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");

//   //Doubletick Function ..
//   const callDoubleTickAPI = async (leadData) => {
//     try {
//       // Prepare message content based on lead data
//       const messageContent = {
//         messages: [
//           {
//             // Your WhatsApp sender number
//             to:"+919224448861",
//             // to: "+919930526549",

//             from: leadData.phone,
//             content: {
//               templateName: "website_lead_data", // Replace with your actual template name
//               language: "en", // Language for the template
//               templateData: {
//                 header: { type: "TEXT", placeholder: leadData.name }, // Replace with the lead's name
//                 body: {
//                   placeholders: [
//                     leadData.name,
//                     leadData.phone,
//                     leadData.email,

//                     leadData.location,
//                     leadData.dateTime,
//                   ],
//                 },
//               },
//             },
//           },
//         ],
//       };

//       // Log the data being sent to the API
//       console.log(
//         " data to Double Tick API , From Enquiry PopUp:",
//         messageContent
//       );
//       // // Prepare axios request options
//       const options = {
//         method: "POST",
//         url: "https://public.doubletick.io/whatsapp/message/template",
//         headers: {
//           accept: "application/json",
//           "content-type": "application/json",
//           Authorization: "key_M7wvrSnTcq", // Replace with your actual API key
//         },
//         data: messageContent,
//       };

//       // Make the request using axios
//       const response = await axios.request(options);
//       // console.log("Double Tick API Response:", response.data);

//       setSnackbarMessage("Lead submitted to Double Tick API successfully!");
//       setOpen(true);
//     } catch (error) {
//       console.error(
//         "Error submitting to Double Tick API , from Enquiry popUp:",
//         error
//       );
//       setSnackbarMessage(
//         "Failed to submit lead to Double Tick API. Please try again."
//       );
//       setOpen(true);
//     }
//   };

//   //Lead Rat Function ..

//   // Function to call LeadRat API
//   const callLeadRatAPI = async (leadData) => {
//     try {
//       //this is our data which will sent to Lead_Rat
//       // Prepare the payload for LeadRat API

//       const payload = [
//         {
//           // their data fields

//           name: leadData.name,
//           state: "Maharashtra",
//           city: "",
//           location: leadData.location,
//           budget: leadData.budget,
//           notes: "",
//           email: leadData.email,
//           countryCode: "91",
//           mobile: leadData.phone,
//           project: "",
//           property: "",
//           leadExpectedBudget: "",
//           propertyType: "",
//           submittedDate: "",
//           submittedTime: "",
//           source: "",
//           subSource: "Reflex Realty Website",
//           agencyName: "",
//           leadScheduledDate: "",
//           leadScheduleTime: "",
//           leadStatus:
//             "Schedule Site Visit or Schedule Meeting or Booked or Booking Cancel",
//           leadBookedDate: "",
//           leadBookedTime: "",
//           additionalProperties: {
//             EnquiredFor: "Buy/Sale/Rent",
//             BHKType: "Simplex/Duplex/PentHouse/Others",
//             NoOfBHK: leadData.bhk,
//             key1: "value1",
//             key2: "value1",
//           },
//           primaryUser: "",
//           secondaryUser: "",
//         },
//       ];

//       // Log the payload for debugging
//       console.log("Payload:", payload);

//       // API request options
//       const options = {
//         method: "POST",
//         url: "https://connect.leadrat.com/api/v1/integration/Website", // Lead_Rat endpoint
//         headers: {
//           "Content-Type": "application/json",
//           "API-Key": "YzdmZDVjNmYtODU2OS00OTc5LTg1NTAtNmYxNDA4MDA2ZWJh", // your Lead_Rat API key
//         },
//         data: payload,
//       };

//       // Make the request
//       const response = await axios.request(options); //error in this

//       console.log("LeadRat API Response:", response.data);
//       console.log("LeadRat API Response:", response);
//       return {
//         success: true,
//         message: "Lead successfully submitted to LeadRat!",
//       };
//     } catch (error) {
//       console.error(
//         "Error submitting lead to LeadRat API , from Enquiry Pop-up:",
//         error.response?.data || error
//       );
//       return {
//         success: false,
//         message: "Failed to submit lead to LeadRat. Please try again.",
//       };
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !phone) {
//       setSnackbarMessage(
//         "Please fill out all required fields before submitting."
//       );
//       setOpen(true);
//       return;
//     }

//     // EmailJS parameters , data object to send
//     const leadData = {
//       name,
//       phone,
//       email,
//       remark,
//       property_type: property.type,
//       property_location: property.location,
//       property_price: property.price,
//     };

//     // Send email using EmailJS , working ..
//     emailjs
//       .send(
//         "service_53ymv9j", //  service ID
//         "template_eakiu1i", //  template ID

//         {
//           from_name: leadData.name,
//           to_email: "reflexrealty.mumbai@gmail.com", // The email to send the data to
//           message: leadData, // message  details
//         },

//         "5P8DIy1yhCb_jSY_G" // Replace with your EmailJS user ID / public key
//       )
//       .then((response) => {
//         console.log("Email sent successfully:", response);
//         setSnackbarMessage("Lead submitted successfully!");
//         setOpen(true);

//         onClose(); // Close the popup after successful submission
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//         setSnackbarMessage("Failed to submit your lead. Please try again.");

//         setOpen(true);
//       });

//     // Resetting form fields after submission

//     setName(""), setPhone(""), setEmail(""), setRemark("");

//     callDoubleTickAPI(leadData);
//     callLeadRatAPI(leadData);
//   };

//   const handlePopupClick = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-6 rounded-lg shadow-xl w-96 relative"
//         onClick={handlePopupClick}
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-2 right-2 text-gray-500"
//           onClick={onClose}
//         >
//           <FontAwesomeIcon icon={faXmark} />
//         </button>

//         {/* Popup Content */}
//         <h2 className="text-2xl font-bold mb-4">Enquire About Property</h2>
//         <div className="mb-4">
//           <p className="text-lg font-medium">Property Type: {property.type}</p>
//           <p className="text-lg font-medium">Location: {property.location}</p>
//           <p className="text-lg font-medium">Price: {property.price}</p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-md font-semibold">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-md font-semibold">
//               Phone
//             </label>
//             <input
//               type="text"
//               id="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-md font-semibold">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="remark" className="block text-md font-semibold">
//               Remark
//             </label>
//             <textarea
//               id="remark"
//               value={remark}
//               onChange={(e) => setRemark(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               rows="4"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full text-md bg-[#4F46E5] text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PopupForm;

//added the email functioanlity in this pop up also .




//glass effect from here 

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { Snackbar } from "@mui/material";

const PopupForm = ({ onClose, property }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [remark, setRemark] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // DoubleTick API Function
  const callDoubleTickAPI = async (leadData) => {
    try {
      const messageContent = {
        messages: [
          {
            to: "+919224448861",
            from: leadData.phone,
            content: {
              templateName: "website_lead_data",
              language: "en",
              templateData: {
                header: { type: "TEXT", placeholder: leadData.name },
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

      const options = {
        method: "POST",
        url: "https://public.doubletick.io/whatsapp/message/template",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "key_M7wvrSnTcq",
        },
        data: messageContent,
      };

      await axios.request(options);
      setSnackbarMessage("Lead submitted successfully!");
      setOpen(true);
    } catch (error) {
      console.error("Error submitting to Double Tick API:", error);
      setSnackbarMessage("Failed to submit lead. Try again.");
      setOpen(true);
    }
  };

  // LeadRat API Function
  const callLeadRatAPI = async (leadData) => {
    try {
      const payload = [
        {
          name: leadData.name,
          state: "Maharashtra",
          location: leadData.location,
          budget: leadData.budget,
          email: leadData.email,
          countryCode: "91",
          mobile: leadData.phone,
          subSource: "Reflex Realty Website",
          leadStatus: "Schedule Site Visit or Meeting",
          additionalProperties: {
            EnquiredFor: "Buy/Sale/Rent",
            NoOfBHK: leadData.bhk,
          },
        },
      ];

      const options = {
        method: "POST",
        url: "https://connect.leadrat.com/api/v1/integration/Website",
        headers: {
          "Content-Type": "application/json",
          "API-Key": "YzdmZDVjNmYtODU2OS00OTc5LTg1NTAtNmYxNDA4MDA2ZWJh",
        },
        data: payload,
      };

      await axios.request(options);
    } catch (error) {
      console.error("Error submitting lead to LeadRat API:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setSnackbarMessage("Please fill all required fields.");
      setOpen(true);
      return;
    }

    const leadData = {
      name,
      phone,
      email,
      remark,
      property_type: property.type,
      property_location: property.location,
      property_price: property.price,
    };

    emailjs
      .send(
        "service_53ymv9j",
        "template_eakiu1i",
        {
          from_name: leadData.name,
          to_email: "reflexrealty.mumbai@gmail.com",
          message: leadData,
        },
        "5P8DIy1yhCb_jSY_G"
      )
      .then(() => {
        setSnackbarMessage("Lead submitted successfully!");
        setOpen(true);
        onClose();
      })
      .catch(() => {
        setSnackbarMessage("Failed to submit. Try again.");
        setOpen(true);
      });

    setName("");
    setPhone("");
    setEmail("");
    setRemark("");

    callDoubleTickAPI(leadData);
    callLeadRatAPI(leadData);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-6 rounded-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-300" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} className="text-xl hover:text-white transition" />
        </button>

        {/* Popup Content */}
        <h2 className="text-2xl font-bold text-white mb-4">Enquire About Property</h2>
        <div className="mb-4 text-white">
          <p className="text-lg font-medium">Property Type: {property.type}</p>
          <p className="text-lg font-medium">Location: {property.location}</p>
          <p className="text-lg font-medium">Price: {property.price}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-md font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-md font-semibold">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-md font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full text-md bg-[#000000] text-[#ffd586] py-2 rounded-lg hover:bg-[#ffd586] hover:text-black transition duration-500 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Snackbar */}
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} message={snackbarMessage} />
    </div>
  );
};

export default PopupForm;
