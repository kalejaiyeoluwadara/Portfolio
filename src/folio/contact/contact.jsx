import React from 'react'
import img from "/img2.svg";
import { VscSend } from "react-icons/vsc";
import { motion } from 'framer-motion';
function Contact() {
  return (
    <motion.div
    initial={{
      scale:0.8
    }}
    whileInView={{
      scale:1
    }}
    transition={{
      duration:0.6,
      ease:'easeIn'
    }}
      id="contact"
      className="w-full flex items-center justify-center py-16 sm:py-24 px-4 sm:px-0"
    >
      <div className="w-full sm:w-[80%] flex items-center justify-around flex-wrap sm:flex-nowrap bg-indigo-600 py-8 sm:py-10 px-6 sm:px-12 rounded-2xl gap-8 shadow-xl">
        <div className="flex flex-col w-[90%] gap-4 items-start">
          <h1 className="text-white text-[25px] font-[600] ">
            You have a new Project
          </h1>
          <p className="text-white w-[99%] sm:w-[330px]">
            Contact me and a get a 30% discount on your new project
          </p>
          <a href="#cont">
            <button className="flex bg-white text-indigo-900 px-2 py-3 gap-2 rounded-md font-[500] text-[20] ">
              Contact Me
              <VscSend size={25} />
            </button>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <img className="h-[300px] w-[200px]" src={img} alt="" />
        </div>
      </div>
    </motion.div>
  );
}

export default Contact
