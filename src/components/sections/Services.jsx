"use client";

import React, { useState } from "react";
import Head from "../ui/Head";
import { MdOutlineDesignServices } from "react-icons/md";
import { CiServer as CiServerIcon } from "react-icons/ci";
import { BsArrowRightShort, BsCheck } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobal } from "@/context/PortfolioContext";
import servicesData from "@/data/services";

// Detail modal component
function ServiceModal({ data, name, setModal, darkmode }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="modal h-screen w-full fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        exit={{ y: "-100vh", opacity: 0 }}
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4, type: "spring", damping: 20 }}
        className={`flex flex-col gap-5 w-full max-w-[420px] px-6 py-6 rounded-2xl shadow-xl ${
          darkmode ? "bg-slate-900 border border-slate-800 text-white" : "bg-white text-slate-800"
        }`}
      >
        <div className="flex justify-between items-start">
          <h3 className="font-bold capitalize text-xl leading-tight w-[80%]">{name}</h3>
          <button
            onClick={() => setModal(false)}
            className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close details modal"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 mt-2">
          {data.map((item, id) => (
            <div key={id} className="flex gap-3 items-start">
              <div className={`mt-0.5 border p-0.5 rounded-full flex-shrink-0 flex items-center justify-center ${
                darkmode ? "border-indigo-500/30 text-indigo-400 bg-indigo-500/10" : "border-indigo-200 text-indigo-600 bg-indigo-50"
              }`}>
                <BsCheck size={16} />
              </div>
              <p className={`text-[14px] sm:text-[15px] font-medium leading-relaxed opacity-[0.85] ${
                darkmode ? "text-slate-200" : "text-slate-600"
              }`}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Service Card component
function ServiceCard({ name, id, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.96 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="h-[300px] cursor-pointer w-full max-w-[300px] shadow-sm hover:shadow-md border border-slate-200/50 dark:border-slate-800/80 rounded-2xl p-8 flex flex-col items-start justify-center bg-white/5 dark:bg-slate-900/10 transition-all duration-300"
    >
      {name === "Frontend developer" && (
        <span className="text-[30px] font-mono font-bold opacity-[0.8] text-indigo-500 mb-2">{"< >"}</span>
      )}
      {name === "UI/UX designer" && (
        <MdOutlineDesignServices
          size={35}
          className="opacity-[0.8] text-indigo-500 mb-2"
        />
      )}
      {name === "Backend Developer" && (
        <CiServerIcon
          size={35}
          className="opacity-[0.8] text-indigo-500 mb-2"
        />
      )}
      <h3 className="font-bold w-[120px] capitalize text-lg sm:text-xl leading-tight opacity-90 mb-4">
        {name}
      </h3>
      <p className="text-indigo-500 font-semibold flex gap-1.5 items-center text-sm capitalize hover:text-indigo-400">
        View More <BsArrowRightShort size={18} />
      </p>
    </motion.div>
  );
}

function Services() {
  const { darkmode } = useGlobal();
  const [modal, setModal] = useState(false);
  const [activeId, setActiveId] = useState(0);

  const handleCardClick = (id) => {
    setActiveId(id);
    setModal(true);
  };

  return (
    <section id="ser" className="w-full flex items-center justify-center py-16 sm:py-24">
      <div className="h-auto w-[90%] sm:w-[80%] relative justify-start items-center flex flex-col gap-10">
        <Head h1="Services" p="What I offer" darkmode={darkmode} />
        
        <div className="flex sm:flex-row flex-col gap-8 mt-6 w-full justify-center items-center">
          <ServiceCard
            name="Frontend developer"
            id={0}
            onClick={() => handleCardClick(0)}
          />
          <ServiceCard
            name="Backend Developer"
            id={1}
            onClick={() => handleCardClick(1)}
          />
          <ServiceCard
            name="UI/UX designer"
            id={2}
            onClick={() => handleCardClick(2)}
          />
        </div>

        <AnimatePresence>
          {modal && (
            <ServiceModal
              darkmode={darkmode}
              name={servicesData[activeId].name}
              setModal={setModal}
              data={servicesData[activeId].services}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Services;
