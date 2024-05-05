import React, { useState,useEffect } from "react";
import { IoArrowUp, IoCheckmarkDone } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../src/config/firebase";
import { useGlobal } from "../../context";
import '../../App.css'
function Form({ darkmode }) {
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const {msg} = useGlobal()
  const {setMsg} = useGlobal()
   const handleSubmit = async () => {
     // Get form data
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     const subject = document.getElementById("subject").value;
     const description = document.getElementById("description").value;
     const message = document.getElementById("message").value;

     // Check if any required field is empty
     if (!name || !email || !subject || !description || !message) {
       console.error("Please fill out all required fields.");
       setMsg("Kindly Input all fields.");
       setModal(true);
       return; // Exit the function early if any field is empty
     }

     // Construct form data
     const formData = {
       name,
       email,
       subject,
       description,
       message,
     };

     try {
       // Add data to Firestore
       await addDoc(collection(db, "messages"), formData);
       // Handle success
       console.log("Message sent successfully.");
       setMsg("Message sent successfully! 👍");
       setModal(true);
       // Reset form fields
       document.getElementById("name").value = "";
       document.getElementById("email").value = "";
       document.getElementById("subject").value = "";
       document.getElementById("description").value = "";
       document.getElementById("message").value = "";
       // Hide modal after 5 seconds
       setTimeout(() => {
         setModal(false);
       }, 5000);
     } catch (error) {
       setMsg("Error sending message!");
       setModal(true);
       console.error("Error adding document: ", error);
       // Handle error (optional)
     }
     console.log(msg)
   };

  return (
    <main
      id="cont"
      className="w-screen sm:px-8 mt-10 sm:mt-20 min-h-[100vh] flex flex-col items-center justify-center gap-8 "
    >
      {/* Form content */}
      <main
        id="cont"
        className="w-screen sm:px-8 mt-10 sm:mt-20 min-h-[100vh] flex flex-col items-center justify-center gap-8 "
      >
        <section className="sm:w-[80%] w-[90%] flex flex-col items-center justify-center sm:py-0 h-[120px] sm:h-[150px] border-[2px] rounded-[8px] sm:rounded-[20px] border-gray-200 ">
          <a href="#home">
            <p className="text-[15px] flex gap-1 ">
              <IoArrowUp size={20} /> Back To Home
            </p>
          </a>
          <h1 className="text-[40px] font-[700] ">Contact ME</h1>
        </section>

        <section className="flex my-3 flex-col w-full items-center justify-center sm:text-[40px] text-[25px] font-[700] ">
          <h2>Craft Your Dream Project</h2>
          <div className="flex gap-2 items-center justify-center">
            <h2>with Me </h2>
            <img
              className="h-[50px] w-[50px] "
              src="https://cdn3d.iconscout.com/3d/premium/thumb/wave-hand-gesture-4855545-4042375.png?f=webp"
              alt=""
            />
          </div>
        </section>

        <section className="w-full flex flex-col gap-8 items-center justify-center">
          <section className="gap-12 flex sm:flex-row flex-col justify-between items-center ">
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="name">Hi I'm*</label>
              <input
                id="name"
                className={`py-3 ${
                  darkmode ? "bg-transparent" : "bg-white"
                } px-2 border-[2px] border-gray-400 rounded-[8px] sm:w-[350px] w-[300px] `}
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="email">Email Address*</label>
              <input
                id="email"
                className={`py-3 ${
                  darkmode ? "bg-transparent" : "bg-white"
                } px-2 border-[2px] border-gray-400 rounded-[8px] sm:w-[350px] w-[300px] `}
                placeholder="My Email Id"
                type="text"
              />
            </div>
          </section>

          <section className="gap-12 flex sm:flex-row flex-col justify-between items-center ">
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="subject">Contacting with Me Regarding To*</label>
              <input
                id="subject"
                className={`py-3 ${
                  darkmode ? "bg-transparent" : "bg-white"
                } px-2 border-[2px] border-gray-400 rounded-[8px] sm:w-[350px] w-[300px] `}
                placeholder="Subject"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="description">
                And Here is My Vision about What I Want*
              </label>
              <input
                id="description"
                className={`py-3 ${
                  darkmode ? "bg-transparent" : "bg-white"
                } px-2 border-[2px] border-gray-400 rounded-[8px] sm:w-[350px] w-[300px] `}
                placeholder="Description About The Project"
                type="text"
              />
            </div>
          </section>

          <section className="gap-12 sm:w-[730px] flex justify-center  items-center ">
            <div className="flex flex-col gap-2 w-full items-start">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                className={`py-3 h-[150px] px-4 ${
                  darkmode ? "bgt" : "bg-white"
                } border-[2px] border-gray-400 rounded-[8px] w-[300px] sm:w-full `}
                placeholder="Tell About Something..."
                type="text"
              />
            </div>
          </section>

          <section className="flex w-full items-center mb-[90px] sm:mb-12 justify-center ">
            <motion.button
              onClick={handleSubmit}
              whileTap={{
                scale: 0.9,
              }}
              className="flex capitalize bg-white mt-6 text-black px-4 py-3  gap-2 rounded-[25px] shadow-xl  font-[500] text-[20] "
            >
              Submit
              <MdArrowOutward size={25} />
            </motion.button>
          </section>
        </section>
      </main>
      {msg !== '' && <Modal />}
    </main>
  );
}

const Modal = () => {
  const { msg, setMsg } = useGlobal(); // Access the message and setMsg function from global state

  // Use useEffect to automatically hide the modal after a certain duration
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMsg(""); // Clear the message after the timeout
    }, 2000); // Adjust the duration as needed (5000 milliseconds = 5 seconds)

    // Cleanup function to clear the timeout when the component unmounts or the message changes
    return () => clearTimeout(timeout);
  }, [msg, setMsg]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -200,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      exit={{
        opacity: 0,
        y: -200,
      }}
      className="fixed flex z-40 items-center justify-center top-0 w-screen h-[200px]"
    >
      <section className="bg-green-600 flex text-center items-center justify-center rounded-[6px] w-[250px] h-[60px] ">
        <p className="text-white flex items-center justify-center gap-3 ">
          {/* Message sent 😃👍 <IoCheckmarkDone size={25} /> */}
          {msg}
        </p>
      </section>
    </motion.div>
  );
};


export default Form;
