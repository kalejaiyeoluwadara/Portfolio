import React, { useState } from "react";
import Head from "../head";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { CiServer } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { LiaPython } from "react-icons/lia";
import Control from "../control";

// Skills component
const SkillBar = ({ type, percentage }) => {
  return (
    <div className="w-[300px] flex flex-col gap-2 mb-4">
      <div className="flex w-full justify-between">
        <h4 className="font-semibold">{type}</h4>
        <p className="opacity-80">{percentage}%</p>
      </div>
      <div className="w-full h-[6px] bg-gray-200 rounded-full">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${percentage}%`,
          }}
          transition={{ duration: 1 }}
          style={{ width: `${percentage}%` }}
          className="h-full bg-indigo-600 rounded-full"
        />
      </div>
    </div>
  );
};

// Categories component
const Section = ({ name, yearsOfExperience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-center gap-3 mb-10"
    >
      {name === "Frontend developer" && (
        <span className="text-4xl text-indigo-600">{"{ }"}</span>
      )}
      {name === "Designer" && (
        <MdOutlineDesignServices size={35} className="text-indigo-600" />
      )}
      {name === "Backend developer" && (
        <CiServer size={35} className="text-indigo-600" />
      )}
      {name === "Web Scrapping" && (
        <LiaPython size={35} className="text-indigo-600" />
      )}

      <div className="flex flex-col">
        <h1 className="font-semibold text-lg opacity-80">{name}</h1>
        <p className="font-medium text-base opacity-80">
          More than {yearsOfExperience}{" "}
          {yearsOfExperience <= 1 ? "year" : "years"}
        </p>
      </div>
    </motion.div>
  );
};

// Main Component
function Skill() {
  const [fr, setFr] = useState(false);
  const [ds, setDs] = useState(false);
  const [br, setBr] = useState(false);
  return (
    <div id="sk" className="flex items-center mt-10  justify-center">
      <div className="h-[auto] sm:w-[80%] w-[100%] sm:px-0 px-4 relative justify-start items-center flex flex-col gap-10">
        <Head h1={"Skills"} p={"My technical skills"} />
        <div className="flex flex-wrap   gap-12">
          <div className="flex flex-col w-[350px]">
            <div className="flex flex-col w-full gap-2 items-end">
              <div className="flex justify-between w-full">
                <Section name={"Frontend developer"} yearsOfExperience={3} />
                <motion.div
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => {
                    setFr(!fr);
                  }}
                >
                  {fr ? (
                    <BsChevronUp
                      size={20}
                      className="text-indigo-600 cursor-pointer translate-y-4"
                    />
                  ) : (
                    <BsChevronDown
                      size={20}
                      className="text-indigo-600 cursor-pointer translate-y-4"
                    />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {fr && (
                  <motion.div
                    className="flex flex-col items-end justify-end"
                    initial={{
                      x: -60,
                      height: 0,
                    }}
                    transition={{
                      // type: "spring",
                      // damping: 7,
                      ease: "linear",
                      duration: 0.2,
                    }}
                    animate={{
                      x: 0,
                      height: "auto",
                      transition: {
                        duration: 0.5,
                        staggerChildren: 0.2, // Add staggerChildren property
                      },
                    }}
                    exit={{
                      x: -60,
                      opacity: 0,
                      height: 0,
                    }}
                  >
                    <SkillBar type={"React Native"} percentage={50} />
                    <SkillBar type={"Next Js"} percentage={70} />
                    <SkillBar type={"React"} percentage={70} />
                    <SkillBar type={"Tailwind"} percentage={75} />
                    <SkillBar type={"Javascript"} percentage={80} />
                    <SkillBar type={"TypeScript"} percentage={30} />
                    <SkillBar type={"HTML"} percentage={90} />
                    <SkillBar type={"CSS"} percentage={70} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col w-[350px]">
            <div className="flex flex-col w-full gap-2 items-end">
              <div className="flex justify-between w-full">
                <Section name={"Designer"} yearsOfExperience={1} />
                <motion.div
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => {
                    setDs(!ds);
                  }}
                >
                  {ds ? (
                    <BsChevronUp
                      size={20}
                      className="text-indigo-600 cursor-pointer translate-y-4"
                    />
                  ) : (
                    <BsChevronDown
                      size={20}
                      className="text-indigo-600 cursor-pointer translate-y-4"
                    />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {ds && (
                  <motion.div
                    className="flex flex-col items-end justify-end"
                    initial={{
                      x: -60,
                      height: 0,
                    }}
                    transition={{
                      // type: "spring",
                      // damping: 7,
                      ease: "linear",
                      duration: 0.2,
                    }}
                    animate={{
                      x: 0,
                      height: "auto",
                      transition: {
                        duration: 0.5,
                        staggerChildren: 0.2, // Add staggerChildren property
                      },
                    }}
                    exit={{
                      x: -60,
                      opacity: 0,
                      height: 0,
                    }}
                  >
                    <SkillBar type={"Figma"} percentage={80} />
                    <SkillBar type={"Blender"} percentage={65} />
                    <SkillBar type={"Photoshop"} percentage={70} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col w-[350px]">
            <div className="flex flex-col w-full gap-2 items-end">
              <div className="flex justify-between w-full">
                <Section name={"Backend developer"} yearsOfExperience={1} />
                <motion.div
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => {
                    setBr(!br);
                  }}
                >
                  {br ? (
                    <BsChevronUp
                      size={20}
                      className="text-indigo-600 cursor-pointer translate-y-4"
                    />
                  ) : (
                    <BsChevronDown
                      size={20}
                      className="text-indigo-600 cursor-pointer translate-y-4"
                    />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {br && (
                  <motion.div
                    initial={{
                      x: -60,
                      height: 0,
                    }}
                    transition={{
                      // type: "spring",
                      // damping: 7,
                      ease: "linear",
                      duration: 0.2,
                    }}
                    animate={{
                      x: 0,
                      height: "auto",
                      transition: {
                        duration: 0.5,
                        staggerChildren: 0.2, // Add staggerChildren property
                      },
                    }}
                    exit={{
                      x: -60,
                      opacity: 0,
                      height: 0,
                    }}
                    className="flex flex-col justify-start items-start sm:items-end  sm:justify-end"
                  >
                    <SkillBar type={"Node"} percentage={60} />
                    <SkillBar type={"Express"} percentage={40} />
                    <SkillBar type={"Mongo db"} percentage={30} />
                    <SkillBar type={"Firebase"} percentage={70} />
                    <SkillBar type={"Appwrite"} percentage={50} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* New section */}
          <div className="flex flex-col w-[350px]">
            <div className="flex flex-col w-full gap-2 items-end">
              <div className="flex justify-between w-full">
                <Section name={"Web Scrapping"} yearsOfExperience={1} />
                <motion.div
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => {
                    setFr(!fr);
                  }}
                >
                  {fr ? (
                    <BsChevronUp
                      size={20}
                      className="text-indigo-600 cursor-pointer translate-y-4"
                    />
                  ) : (
                    <BsChevronDown
                      size={20}
                      className="text-indigo-600 cursor-pointer translate-y-4"
                    />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {fr && (
                  <motion.div
                    className="flex flex-col items-end justify-end"
                    initial={{
                      x: -60,
                      height: 0,
                    }}
                    transition={{
                      // type: "spring",
                      // damping: 7,
                      ease: "linear",
                      duration: 0.2,
                    }}
                    animate={{
                      x: 0,
                      height: "auto",
                      transition: {
                        duration: 0.5,
                        staggerChildren: 0.2, // Add staggerChildren property
                      },
                    }}
                    exit={{
                      x: -60,
                      opacity: 0,
                      height: 0,
                    }}
                  >
                    <SkillBar type={"Selenium"} percentage={90} />
                    <SkillBar type={"Request"} percentage={70} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
