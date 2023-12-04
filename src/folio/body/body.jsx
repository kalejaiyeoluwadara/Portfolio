import React from 'react'
import img from '/img2.svg'
import {BsGithub,BsLinkedin,BsTwitterX,BsTwitter,BsArrowDownShort} from 'react-icons/bs'
import {VscSend} from 'react-icons/vsc'
import './body.css'
import {motion,AnimatePresence, easeIn, spring} from 'framer-motion'
function Body({darkmode,setDarkMode}) {
  return (
    <motion.div
    initial={{
      opacity:0
    }}
    animate={{
      opacity:1,
    }}
    transition={{
      duration:0.7,
      ease:'easeInOut'
    }}
    layout
      id="home"
      className="flex sm:items-center items-start  sm:justify-center"
    >
      <div className=" flex relative   mt-12 sm:mt-[200px] sm:h-[screen] sm:-translate-y-[150px] -translate-y-20 h-[90vh] items-center justify-center sm:justify-center sm:items-center gap-8 sm:gap-[190px] sm:px-0 px-6 w-[100%] sm:w-[80%]">
        <motion.div       
        className="mob  px-8 sm:px-0 flex flex-col gap-8">
          <a href="https://github.com/kalejaiyeoluwadara" target="_blank" >
            <BsGithub
              size={25}
              className={` ${darkmode ? "text-blue-600 ": "text-gray-700"}`}
            />
          </a>
          <a href="https://www.linkedin.com/in/oluwadara-kalejaiye-346095260" target="_blank">
            <BsLinkedin
              size={25}
              className={` ${darkmode ? "text-blue-600 ": "text-gray-700"}`}
            />
          </a>
          <a href="https://twitter.com/dara_kalejaiye?t=PkQCkUQ202_3DCeNUhNLuw&s=09" target="_blank">
            <BsTwitterX
              size={25}
              className={` ${darkmode ? "text-blue-600 ": "text-gray-700"}`}
            />
          </a>
        </motion.div>
        <div className="flex   sm:w-[100%] flex-col-reverse sm:flex-row relative">
          <div className="flex sm:w-[400px]  w-screen flex-col gap-2 mt-6">
            {/*section*/}
           <div className="mb-2">
           <h1
              className={`font-bold text-gray-800 sm:text-[50px] sm:text text-[33px]  ${
                darkmode && " text-white"
              } `}
            >
              Hi, I'am Dara
            </h1>
            <h3
              className={`font-medium sm:text-[22px] text-[22px]  text-black opacity-[0.8]  ${
                darkmode && " text-white"
              } `}
            >
              Frontend developer
            </h3></div>
            <p
              className={`sm:w-[100%] w-[80%]  text-black sm:text-[16px] text-[16px] opacity-[0.7] font-medium  ${
                darkmode && " text-white"
              } `}
            >
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <a href="#contact">
              <button
                className="bg-blue-600 px-4
            h-[50px] w-[140px] text-[14px]
            flex items-center justify-around  sm:h-[50px] sm:w-[150px] sm:mt-[40px] mt-[30px] text-white font-bold rounded-md"
              >
                Contact Me <VscSend size={20} className="font-[900]  " />
              </button>
            </a>
          </div>
          <motion.div
             initial={{
              y:-500
            }}
            animate={{
              y:0
            }}
            whileInView={{
              y:0,
            }}
            transition={{
              // duration:0.6,
              type:'spring',
              // ease:'ease'
            }}
          className="box sm:h-[300px] h-[200px] ml-12 sm:w-[300px] w-[200px] bg-blue-700 flex items-center justify-center ">
            <img
              src={img}
              className="sm:h-[600px] h-[300px]  sm:w-[600px] w-[300px] -rotate-1 -translate-y-1 "
              alt=""
            />
          </motion.div>
          <a href="#about">
            <p className="absolute cursor-pointer hover:text-blue-700 duration-300 flex items-center justify-center -bottom-[60px] left-0">
              scroll down <BsArrowDownShort className="text-blue-" />
            </p>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Body
