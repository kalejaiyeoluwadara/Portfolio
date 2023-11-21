import React from 'react'
import img from "/img2.svg";
import { VscSend } from "react-icons/vsc";
import { motion } from 'framer-motion';
function Contact() {
  return (
    <motion.div
    initial={{
      scale:0.4
    }}
    whileInView={{
      scale:1
    }}
    transition={{
      duration:0.6,
      ease:'easeIn'
    }}
      id="contact"
      className="flex items-center  px-2 sm:px-0 sm:h-[50vh] h-[auto] sm:mt-18 mt-20 justify-center"
    >
      <div className="w-[100%] sm:px-8 sm:w-[50%] sm:h-[40vh] h-[auto] sm:flex-nowrap flex-wrap flex items-center sm:justify-around justify-center bg-indigo-600 py-6 sm:py-0 rounded-xl">
        <div className="flex flex-col w-[90%] gap-4 items-start">
          <h1 className="text-white text-[25px] font-[600] ">
            You have a new Project
          </h1>
          <p className="text-white w-[99%] sm:w-[330px]">
            Contact me and a get a 30% discount on your new project
          </p>
          <a href="#input">
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
