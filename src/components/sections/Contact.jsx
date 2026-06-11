"use client";

import React, { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useGlobal } from "@/context/PortfolioContext";

// Local Subcomponent: Success/Error Toast Notification Modal
const FormModal = ({ msg, setMsg }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMsg("");
    }, 4000);
    return () => clearTimeout(timeout);
  }, [msg, setMsg]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="fixed flex z-40 items-center justify-center top-6 left-0 right-0 w-full"
    >
      <div className="bg-emerald-600 text-center flex items-center justify-center rounded-xl w-[280px] h-[60px] shadow-lg border border-emerald-500">
        <p className="text-white font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
          {msg}
        </p>
      </div>
    </motion.div>
  );
};

// Main Contact Component
function Contact() {
  const { darkmode, msg, setMsg } = useGlobal();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const description = document.getElementById("description").value.trim();
    const message = document.getElementById("message").value.trim();

    // Field validations
    if (!name || !email || !subject || !description || !message) {
      setMsg("Kindly input all fields.");
      setModal(true);
      return;
    }

    setLoading(true);

    const formData = {
      name,
      email,
      subject,
      description,
      message,
      createdAt: new Date().toISOString()
    };

    try {
      // Add data to Firestore collection
      await addDoc(collection(db, "messages"), formData);
      setMsg("Message sent successfully! 👍");
      setModal(true);

      // Reset form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("description").value = "";
      document.getElementById("message").value = "";
    } catch (error) {
      setMsg("Error sending message!");
      setModal(true);
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-0 gap-16">
      
      {/* ── Banner CTA Promo (old contact.jsx) ── */}
      <motion.section
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="contact"
        className="w-full sm:w-[80%] flex items-center justify-around flex-wrap sm:flex-nowrap bg-indigo-600 py-10 px-6 sm:px-12 rounded-3xl gap-8 shadow-xl relative overflow-hidden"
      >
        {/* Background glow circle */}
        <div className="absolute -left-12 -top-12 w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl" />
        
        <div className="flex flex-col w-[90%] sm:w-[50%] gap-4 items-start z-10">
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            You have a new Project
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base leading-relaxed max-w-[340px]">
            Contact me and get a 30% discount on your new project.
          </p>
          <a href="#cont" className="cursor-pointer">
            <button className="flex bg-white hover:bg-slate-50 text-indigo-900 px-5 py-3 gap-2.5 rounded-xl font-bold text-sm sm:text-base shadow-md transition-all active:scale-95 cursor-pointer">
              Contact Me
              <VscSend size={20} className="mt-0.5" />
            </button>
          </a>
        </div>
        
        <div className="flex items-center justify-center z-10">
          <img 
            className="h-[260px] w-[180px] object-contain drop-shadow-lg animate-pulse" 
            style={{ animationDuration: '3s' }}
            src="/img2.svg" 
            alt="Project illustration" 
          />
        </div>
      </motion.section>

      {/* ── Main Contact Form (old form.jsx) ── */}
      <main
        id="cont"
        className="w-full flex flex-col items-center justify-center gap-12"
      >
        {/* Form header block */}
        <section className={`sm:w-[80%] w-[90%] flex flex-col items-center justify-center py-6 h-auto border-2 rounded-2xl transition-colors ${
          darkmode ? "border-slate-800 bg-slate-900/20" : "border-slate-200 bg-slate-50/20"
        }`}>
          <a href="#home" className="group">
            <p className="text-xs sm:text-sm flex gap-1 font-semibold opacity-70 group-hover:text-indigo-500 transition-colors">
              <IoArrowUp size={16} className="mt-0.5 group-hover:-translate-y-0.5 transition-transform" /> Back To Home
            </p>
          </a>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mt-1 ${darkmode ? "text-white" : "text-slate-950"}`}>
            Contact Me
          </h2>
        </section>

        {/* Headline callout */}
        <section className={`flex flex-col w-full items-center justify-center text-center text-xl sm:text-3xl font-bold tracking-tight leading-snug ${
          darkmode ? "text-white" : "text-slate-900"
        }`}>
          <h3>Craft Your Dream Project</h3>
          <div className="flex gap-2 items-center justify-center mt-1">
            <h3>with Me</h3>
            <img
              className="h-[40px] w-[40px] select-none"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/wave-hand-gesture-4855545-4042375.png?f=webp"
              alt="Hand wave"
            />
          </div>
        </section>

        {/* Inputs */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 items-center justify-center px-4 sm:px-0">
          <div className="gap-6 flex sm:flex-row flex-col justify-between items-center w-full sm:max-w-[730px]">
            <div className="flex flex-col gap-2 items-start w-full sm:w-[350px]">
              <label htmlFor="name" className="text-xs sm:text-sm font-semibold opacity-80">Hi I'm*</label>
              <input
                id="name"
                required
                className={`py-3 px-3.5 border-2 rounded-xl w-full text-sm sm:text-base outline-none transition-all ${
                  darkmode 
                    ? "bg-slate-900/60 border-slate-800 text-white focus:border-indigo-500 focus:bg-slate-900" 
                    : "bg-white border-slate-200 text-slate-900 focus:border-blue-500"
                }`}
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 items-start w-full sm:w-[350px]">
              <label htmlFor="email" className="text-xs sm:text-sm font-semibold opacity-80">Email Address*</label>
              <input
                id="email"
                required
                className={`py-3 px-3.5 border-2 rounded-xl w-full text-sm sm:text-base outline-none transition-all ${
                  darkmode 
                    ? "bg-slate-900/60 border-slate-800 text-white focus:border-indigo-500 focus:bg-slate-900" 
                    : "bg-white border-slate-200 text-slate-900 focus:border-blue-500"
                }`}
                placeholder="Your Email Id"
                type="email"
              />
            </div>
          </div>

          <div className="gap-6 flex sm:flex-row flex-col justify-between items-center w-full sm:max-w-[730px]">
            <div className="flex flex-col gap-2 items-start w-full sm:w-[350px]">
              <label htmlFor="subject" className="text-xs sm:text-sm font-semibold opacity-80">Regarding To*</label>
              <input
                id="subject"
                required
                className={`py-3 px-3.5 border-2 rounded-xl w-full text-sm sm:text-base outline-none transition-all ${
                  darkmode 
                    ? "bg-slate-900/60 border-slate-800 text-white focus:border-indigo-500 focus:bg-slate-900" 
                    : "bg-white border-slate-200 text-slate-900 focus:border-blue-500"
                }`}
                placeholder="Subject"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 items-start w-full sm:w-[350px]">
              <label htmlFor="description" className="text-xs sm:text-sm font-semibold opacity-80">And Here is My Vision*</label>
              <input
                id="description"
                required
                className={`py-3 px-3.5 border-2 rounded-xl w-full text-sm sm:text-base outline-none transition-all ${
                  darkmode 
                    ? "bg-slate-900/60 border-slate-800 text-white focus:border-indigo-500 focus:bg-slate-900" 
                    : "bg-white border-slate-200 text-slate-900 focus:border-blue-500"
                }`}
                placeholder="Description About The Project"
                type="text"
              />
            </div>
          </div>

          <div className="gap-6 w-full sm:max-w-[730px] flex justify-center items-center">
            <div className="flex flex-col gap-2 w-full items-start">
              <label htmlFor="message" className="text-xs sm:text-sm font-semibold opacity-80">Message*</label>
              <textarea
                id="message"
                required
                className={`py-3 h-[150px] px-3.5 border-2 rounded-xl w-full text-sm sm:text-base outline-none transition-all ${
                  darkmode 
                    ? "bg-slate-900/60 border-slate-800 text-white focus:border-indigo-500 focus:bg-slate-900" 
                    : "bg-white border-slate-200 text-slate-900 focus:border-blue-500"
                }`}
                placeholder="Tell About Something..."
              />
            </div>
          </div>

          <section className="flex w-full items-center mb-[90px] sm:mb-12 justify-center">
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              disabled={loading}
              className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-lg font-bold text-sm sm:text-base cursor-pointer transition-all ${
                darkmode 
                  ? "bg-white text-black hover:bg-slate-100" 
                  : "bg-slate-900 text-white hover:bg-slate-800"
              } ${loading ? "opacity-55 cursor-not-allowed" : ""}`}
            >
              {loading ? "Sending..." : "Submit"}
              <MdArrowOutward size={20} />
            </motion.button>
          </section>
        </form>
      </main>

      {/* Form response dialog */}
      <AnimatePresence>
        {modal && msg !== "" && (
          <FormModal msg={msg} setMsg={setMsg} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contact;
