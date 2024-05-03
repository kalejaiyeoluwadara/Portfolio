import React from 'react'
import { VscSend } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
function Form({darkmode}) {
  return (
    <main
      id="cont"
      className="w-screen  px-8 min-h-[100vh] flex flex-col items-center justify-center gap-8 "
    >
      <section className="sm:w-[80%] flex flex-col items-center justify-center h-[150px] border-[2px] rounded-[20px] border-gray-200 ">
        <p className="text-[15px]">Back To Home</p>
        <h1 className="text-[40px] font-[700] ">Contact ME</h1>
      </section>
      <section className="flex flex-col w-full items-center justify-center text-[30px] font-[700] ">
        <h2>Craft Your Dream Project</h2>
        <h2>with Me </h2>
      </section>
      <section className="w-full flex flex-col gap-4 items-center justify-center">
        <section className=" gap-12 flex justify-between items-center ">
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="">Hi I'm*</label>
            <input
              className={`outline-none py-3 ${
                darkmode ? " bg-transparent " : "bg-white"
              } px-2 border-[2px] border-gray-400 rounded-[8px] sm:w-[350px] `}
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="">Email Address*</label>
            <input
              className={`outline-none py-3 ${
                darkmode ? " bg-transparent " : "bg-white"
              } px-2 border-[2px] border-gray-400 rounded-[8px] sm:w-[350px] `}
              placeholder="My Email Id"
              type="text"
            />
          </div>
        </section>

        <section className=" gap-12 flex justify-between items-center ">
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="">Contacting with Me Regarding To*</label>
            <input
              className={`outline-none py-3 ${
                darkmode ? " bg-transparent " : "bg-white"
              } px-2 border-[2px] border-gray-400 rounded-[8px] sm:w-[350px] `}
              placeholder="Subject"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="">And Here is My Vision about What I Want*</label>
            <input
              className={`outline-none py-3 ${
                darkmode ? " bg-transparent " : "bg-white"
              } px-2 border-[2px] border-gray-400 rounded-[8px] sm:w-[350px] `}
              placeholder="Description About The Project"
              type="text"
            />
          </div>
        </section>

        <section className=" gap-12 sm:w-[730px] flex justify-center  items-center ">
          <div className="flex flex-col gap-2 w-full items-start">
            <label htmlFor="">Message*</label>
            <textarea
              className={`"outline-none py-3 h-[150px] px-4 ${
                darkmode ? " bg-transparent " : "bg-white"
              }-2 border-[2px] border-gray-400 rounded-[8px] sm:w-full `}
              placeholder="Tell About Something..."
              type="text"
            />
          </div>
        </section>

        <section className="flex w-full items-center mb-12 justify-center ">
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            className="flex capitalize bg-blue-600 text-white px-4 py-3  gap-2 rounded-md font-[500] text-[20] "
          >
            {/* {!btn ? "Send message" : "Message sent"} */}
            Submit
            <VscSend size={25} />
          </motion.button>
        </section>
      </section>
    </main>
  );
}

export default Form