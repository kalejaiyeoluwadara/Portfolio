import React from "react";
import img from "/pi.jpg";
import { FiDownload } from "react-icons/fi";
import Control from "../control";
import { motion, useInView } from "framer-motion";

function About({ darkmode }) {
  return (
    <div id="about" className="flex items-center justify-center">
      <div className="sm:h-[screen] sm:-translate-y-[100px] h-[90vh]  relative justify-center items-center flex flex-col sm:gap-[100px] gap-[30px] ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold sm:text-[50px] text-[30px] opacity-[0.9] ">
            About Me
          </h1>
          <p className="font-[500] sm:text-[20px] text-[15px] opacity-80 ">
            My introduction
          </p>
        </div>

        <div className="flex justify-between sm:flex-row flex-col gap-[40px] sm:gap-[120px] items-center">
          <div>
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              src={img}
              className="sm:h-[250px] h-[160px] w-[100%] sm:w-[400px] rounded-xl "
              alt=""
            />
          </div>

          <div className="flex flex-col  gap-12 px-4 sm:px-0 sm:items-start items-center">
            <p
              className={`sm:w-[420px] px-2 font-[500] text-[18px] text-gray-700  sm:text-start text-center w-[100%]  ${
                darkmode && " text-white"
              } `}
            >
              Web developer with extensive knowledge and years of experience,
              working in web technologies and UI / UX, delivering quality work.
            </p>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex gap-6"
            >
              <div className="flex flex-col w-[100px] text-center capitalize ">
                <h3 className="font-[600] opacity-[0.9] text-[25px] ">04+</h3>
                <p className="opacity-80 font-[500]">Years experience</p>
              </div>
              <div className="flex flex-col w-[100px] text-center capitalize ">
                <h3 className="font-[600] opacity-[0.9] text-[25px] ">20+</h3>
                <p className="opacity-80 font-[500]">complete projects</p>
              </div>
              <div className="flex flex-col w-[100px] text-center capitalize ">
                <h3 className="font-[600] opacity-[0.9] text-[25px] ">01+</h3>
                <p className="opacity-80 font-[500]">companies worked</p>
              </div>
            </motion.div>
            <motion.a
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.03,
              }}
              target="_blank"
              href="https://docs.google.com/document/d/1Eq6vPZnrJ7e2fJNjnZHt4BaxDTXlGqJd/edit?rtpof=true"
              className="bg-blue-600 w-[180px] flex justify-center gap-4 text-white rounded-md py-4 px-2"
            >
              Dowload CV <FiDownload size={20} />
            </motion.a>
          </div>
        </div>
        <Control />
      </div>
    </div>
  );
}

export default About;
