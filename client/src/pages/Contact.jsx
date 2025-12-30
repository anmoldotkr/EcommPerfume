

// // // import { useState } from "react";
// // // import axios from "axios";

// // // const Contact = () => {
// // //   const [isSubmit, setSubmit] = useState(false);
// // //   const [errorMessage, setErrorMessage] = useState("");
// // //   const [state, setState] = useState({
// // //     email: "",
// // //     subject: "",
// // //     message: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setState({ ...state, [name]: value });
// // //   };

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();
// // //     setSubmit(true);

// // //     let dataSend = {
// // //       email: state.email,
// // //       subject: state.subject,
// // //       message: state.message,
// // //     };

// // //     try {
// // //       const res = await axios.post(`http://localhost:5000/email/sendEmail`, dataSend);

// // //       if (res.status >= 200 && res.status < 300) {
// // //         alert("Send Successfully!");
// // //         setErrorMessage("");
// // //       } else {
// // //         throw new Error("Failed to send email");
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //       setErrorMessage("Failed to send email");
// // //     } finally {
// // //       setSubmit(false);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //     <div className="relative isolate px-6 pt-14 lg:px-8">
// // //         <div
// // //           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
// // //           aria-hidden="true"
// // //         >
// // //           <div
// // //             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
// // //             style={{
// // //               clipPath:
// // //                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
// // //             }}
// // //           />
// // //         </div>
// // //         <div className="mx-auto max-w-2xl sm:py-20 lg:py-20">
// // //           <div className="text-2xl mt-[-70px]">
// // //             <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-5xl">
// // //             Feel Free To Contact Us
// // //             </h1>
// // //           </div>
// // //         </div>
// // //         {/* ----------------------------- */}
// // //         {errorMessage && <p>{errorMessage}</p>}
// // //       <form onSubmit={handleSubmit}>
// // //         <div className="">
// // //           <div className="flex flex-col justify-center">
// // //             <div className="text-center sm:p-5 lg:p-8">
// // //               <div className="flex flex-col justify-center items-center">
// // //                 <iframe
// // //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.08064816005!2d77.3185553752147!3d28.56734087570031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1704620459926!5m2!1sen!2sin"
// // //                   className="w-[100%] h-80 border-2 shadow-xl rounded-lg "
// // //                   allowFullScreen=""
// // //                   loading="lazy"
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div className="mt-10 flex justify-center items-center">
// // //               <div className="flex flex-col p-3">
// // //                 <input
// // //                   value={state.email}
// // //                   onChange={handleChange}
// // //                   type="email"
// // //                   name="email"
// // //                   placeholder="Enter Email"
// // //                   className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
// // //                 />
// // //                 <input
// // //                   className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
// // //                   type="text"
// // //                   name="subject"
// // //                   placeholder="Subject"
// // //                   value={state.subject}
// // //                   onChange={handleChange}
// // //                 />
// // //                 <textarea
// // //                   className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
// // //                   name="message"
// // //                   placeholder="Message"
// // //                   rows={6}
// // //                   onChange={handleChange}
// // //                   value={state.message}
// // //                 />
// // //                 <button
// // //                   className="bg-purple-600 text-white font-bold rounded-lg p-1 hover:bg-purple-500"
// // //                 >
// // //                   send
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </form>
// // //         <div
// // //           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
// // //           aria-hidden="true"
// // //         >
// // //           <div
// // //             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
// // //             style={{
// // //               clipPath:
// // //                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
// // //             }}
// // //           />
// // //         </div>
// // //       </div>
      
// // //     </>
// // //   );
// // // };

// // // export default Contact;
// // import { useState } from "react";
// // import axios from "axios";

// // const Contact = () => {
// //   const [isSubmit, setSubmit] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [state, setState] = useState({
// //     email: "",
// //     subject: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setState({ ...state, [name]: value });
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setSubmit(true);

// //     try {
// //       const res = await axios.post(`http://localhost:5000/email/sendEmail`, state);
// //       if (res.status >= 200 && res.status < 300) {
// //         alert("Send Successfully!");
// //         setErrorMessage("");
// //         setState({ email: "", subject: "", message: "" });
// //       } else {
// //         throw new Error("Failed to send email");
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       setErrorMessage("Failed to send email");
// //     } finally {
// //       setSubmit(false);
// //     }
// //   };

// //   return (
// //     <div className="relative min-h-screen flex flex-col items-center justify-center 
// //       bg-gradient-to-r from-purple-600 to-indigo-700 px-4 py-12">
      
// //       {/* Contact Form */}
// //       <form
// //         onSubmit={handleSubmit}
// //         className="w-full max-w-lg bg-white/20 backdrop-blur-lg border border-white/30 
// //         shadow-xl rounded-2xl p-8 mb-10 transform transition-all duration-500 hover:shadow-2xl"
// //       >
// //         {/* Title */}
// //         <h1 className="text-3xl font-bold text-white text-center mb-6">
// //           Feel Free To Contact Us
// //         </h1>

// //         {errorMessage && (
// //           <p className="text-red-300 font-medium mb-4">{errorMessage}</p>
// //         )}

// //         {/* Email */}
// //         <div className="mb-5">
// //           <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
// //             Email Address
// //           </label>
// //           <input
// //             value={state.email}
// //             onChange={handleChange}
// //             type="email"
// //             name="email"
// //             id="email"
// //             placeholder="Enter your email"
// //             required
// //             className="w-full rounded-lg bg-white/10 border border-white/30 p-3 
// //               text-white placeholder-gray-300
// //               focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent
// //               transition"
// //           />
// //         </div>

// //         {/* Subject */}
// //         <div className="mb-5">
// //           <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
// //             Subject
// //           </label>
// //           <input
// //             value={state.subject}
// //             onChange={handleChange}
// //             type="text"
// //             name="subject"
// //             id="subject"
// //             placeholder="Enter subject"
// //             required
// //             className="w-full rounded-lg bg-white/10 border border-white/30 p-3 
// //               text-white placeholder-gray-300
// //               focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent
// //               transition"
// //           />
// //         </div>

// //         {/* Message */}
// //         <div className="mb-6">
// //           <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
// //             Message
// //           </label>
// //           <textarea
// //             value={state.message}
// //             onChange={handleChange}
// //             name="message"
// //             id="message"
// //             rows="5"
// //             placeholder="Write your message..."
// //             required
// //             className="w-full rounded-lg bg-white/10 border border-white/30 p-3 
// //               text-white placeholder-gray-300
// //               focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent
// //               transition"
// //           />
// //         </div>

// //         {/* Button */}
// //         <button
// //           type="submit"
// //           disabled={isSubmit}
// //           className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 
// //             text-white font-semibold py-3 rounded-lg shadow-md
// //             transition-all duration-300 ease-in-out
// //             hover:from-purple-400 hover:to-indigo-400
// //             hover:scale-105 hover:shadow-purple-500/50
// //             focus:outline-none focus:ring-2 focus:ring-purple-300
// //             focus:ring-offset-2 focus:ring-offset-purple-800
// //             disabled:opacity-70 disabled:cursor-not-allowed"
// //         >
// //           {isSubmit ? "Sending..." : "Send Message"}
// //         </button>
// //       </form>

// //       {/* Google Map (Glassmorphic wrapper) */}
// //       <div className="w-full max-w-3xl bg-white/20 backdrop-blur-lg border border-white/30 
// //         shadow-xl rounded-2xl overflow-hidden">
// //         <iframe
// //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.08064816005!2d77.3185553752147!3d28.56734087570031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1704620459926!5m2!1sen!2sin"
// //           className="w-full h-80"
// //           allowFullScreen=""
// //           loading="lazy"
// //           title="Google Map"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;


// import React from "react";

// export default function Contact() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-purple-900 p-6">
//       <div
//         className="max-w-4xl w-full grid md:grid-cols-2 gap-8 
//         bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl 
//         p-8 transition duration-300 transform hover:bg-white/20 hover:shadow-2xl hover:scale-105"
//       >
//         {/* Left side - Form */}
//         <div>
//           <h2 className="text-3xl font-bold text-white mb-6">
//             Contact Us
//           </h2>
//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm text-white mb-1">Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 
//                 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-white mb-1">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 
//                 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-white mb-1">Message</label>
//               <textarea
//                 rows="4"
//                 className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 
//                 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 placeholder="Write your message..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg 
//               font-medium transition duration-300 hover:bg-purple-700 hover:scale-105"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Right side - Map */}
//         <div className="rounded-xl overflow-hidden shadow-lg">
//           <iframe
//             title="Google Map"
//             className="w-full h-full min-h-[300px]"
//             src="https://www.google.com/maps/embed?pb=!1m18!..."
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// // }
// import { useState } from "react";
// import axios from "axios";

// const Contact = () => {
//   const [isSubmit, setSubmit] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [state, setState] = useState({
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setSubmit(true);

//     try {
//       const res = await axios.post(`http://localhost:5000/email/sendEmail`, state);
//       if (res.status >= 200 && res.status < 300) {
//         alert("Send Successfully!");
//         setErrorMessage("");
//         setState({ email: "", subject: "", message: "" });
//       } else {
//         throw new Error("Failed to send email");
//       }
//     } catch (error) {
//       console.log(error);
//       setErrorMessage("Failed to send email");
//     } finally {
//       setSubmit(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center 
//       bg-gradient-to-r from-purple-600 to-indigo-700 px-4 py-12">
      
//       {/* Container */}
//       <div className="w-full max-w-4xl flex flex-col gap-8">

//         {/* Glassmorphic Form */}
//         <div className="bg-white/30 backdrop-blur-lg border border-white/30 
//           shadow-xl rounded-2xl p-8 transition duration-300 transform 
//           hover:bg-white/40 hover:shadow-2xl hover:scale-105">
          
//           <h1 className="text-3xl font-bold text-white text-center mb-6">
//             Feel Free To Contact Us
//           </h1>

//           {errorMessage && (
//             <p className="text-red-300 font-medium mb-4">{errorMessage}</p>
//           )}

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
//                 Email Address
//               </label>
//               <input
//                 value={state.email}
//                 onChange={handleChange}
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 required
//                 className="w-full rounded-lg bg-white/15 border border-white/30 p-3 
//                   text-white placeholder-gray-300
//                   focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent
//                   transition"
//               />
//             </div>

//             <div>
//               <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
//                 Subject
//               </label>
//               <input
//                 value={state.subject}
//                 onChange={handleChange}
//                 type="text"
//                 name="subject"
//                 id="subject"
//                 placeholder="Enter subject"
//                 required
//                 className="w-full rounded-lg bg-white/15 border border-white/30 p-3 
//                   text-white placeholder-gray-300
//                   focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent
//                   transition"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
//                 Message
//               </label>
//               <textarea
//                 value={state.message}
//                 onChange={handleChange}
//                 name="message"
//                 id="message"
//                 rows="5"
//                 placeholder="Write your message..."
//                 required
//                 className="w-full rounded-lg bg-white/15 border border-white/30 p-3 
//                   text-white placeholder-gray-300
//                   focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent
//                   transition"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmit}
//               className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 
//                 text-white font-semibold py-3 rounded-lg shadow-md
//                 transition-all duration-300 hover:from-purple-400 hover:to-indigo-400
//                 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300
//                 focus:ring-offset-2 focus:ring-offset-purple-800 disabled:opacity-70 disabled:cursor-not-allowed"
//             >
//               {isSubmit ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>

//         {/* Map Below Form */}
//         <div className="rounded-2xl overflow-hidden shadow-xl bg-white/20 backdrop-blur-lg">
//           <iframe
//             title="Google Map"
//             className="w-full h-80"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.08064816005!2d77.3185553752147!3d28.56734087570031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1704620459926!5m2!1sen!2sin"
//             allowFullScreen=""
//             loading="lazy"
//           />
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Contact;
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [isSubmit, setSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [state, setState] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmit(true);

    try {
      const res = await axios.post(`http://localhost:5000/email/sendEmail`, state);
      if (res.status >= 200 && res.status < 300) {
        alert("Send Successfully!");
        setErrorMessage("");
        setState({ email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to send email");
    } finally {
      setSubmit(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-r from-pink-200 via-purple-200 to-white px-4 py-12"
    >
      {/* Container */}
      <div className="w-full max-w-lg flex flex-col gap-8">  {/* 👈 smaller width */}

        {/* Glassmorphic Form */}
        <div
          className="bg-white/60 backdrop-blur-xl border border-white/50 
          shadow-xl rounded-2xl p-6 transition duration-300"
        >
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Feel Free To Contact Us
          </h1>

          {errorMessage && (
            <p className="text-red-500 font-medium mb-4">{errorMessage}</p>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                value={state.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg bg-white/70 border border-gray-300 p-3 
                  text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent
                  transition"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                value={state.subject}
                onChange={handleChange}
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter subject"
                required
                className="w-full rounded-lg bg-white/70 border border-gray-300 p-3 
                  text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent
                  transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                value={state.message}
                onChange={handleChange}
                name="message"
                id="message"
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full rounded-lg bg-white/70 border border-gray-300 p-3 
                  text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent
                  transition"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmit}
              className="w-full bg-gradient-to-r from-pink-400 to-purple-400 
                text-white font-semibold py-3 rounded-lg shadow-md
                transition-all duration-300 hover:from-pink-300 hover:to-purple-300
                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300
                focus:ring-offset-2 focus:ring-offset-purple-100 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmit ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Map Below Form */}
        <div className="rounded-2xl overflow-hidden shadow-xl bg-white/50 backdrop-blur-lg">
          <iframe
            title="Google Map"
            className="w-full h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.08064816005!2d77.3185553752147!3d28.56734087570031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1704620459926!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

