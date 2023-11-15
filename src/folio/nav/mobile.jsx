import React,{useState,useEffect} from 'react'
import Reveal from '../../reveal';
import { BsMoonFill, BsSun, BsBriefcase } from "react-icons/bs";
import {BiHome} from "react-icons/bi"
import { CiImageOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import {motion,AnimatePresence,useInView} from 'framer-motion'
import { AiOutlineAppstoreAdd,AiOutlineFileText, AiOutlineClose } from "react-icons/ai";
import './nav.css'
const Mobile = ({darkmode,setDarkMode}) =>{
    const [width, setWidth] = useState(window.innerWidth);
    const [apps,setApps] = useState(false);
        useEffect(() => {
    }, []);

    const links = [
      {
        name: "Home",
        link: "#home",
        icons: BiHome,
      },
      {
        name: "About",
        link: "#about",
        icons: GoPerson,
      },
      {
        name: "Skills",
        link: "#sk",
        icons: CiImageOn,
      },
      {
        name: "Services",
        link: "#ser",
        icons: AiOutlineFileText,
      },
      {
        name: "Portfolio",
        link: "#portfolio",
        icons: BsBriefcase,
      },
      {
        name: "Contactme",
        link: "#contact",
        icons: VscSend,
      },
    ];
    return (
      <div className="flex flex-col items-center fixed  bottom-0 z-20  shadow-sm justify-center">
        <div
          className={`shad  relative text-black h-[70px]  sm:w-[80%]  w-screen flex font-medium justify-between items-start px-6 py-6   ${
            darkmode ? " glassb text-white" : "glass"
          }`}
        >
          <h1>Dara</h1>
          <div className="flex gap-4">
            <div
              onClick={() => {
                setDarkMode(!darkmode);
              }}
            >
              {!darkmode ? <BsMoonFill size={20} /> : <BsSun size={20} />}
            </div>
            <AiOutlineAppstoreAdd
              onClick={() => {
                setApps(true);
              }}
              size={20}
            />
          </div>
        </div>
        <AnimatePresence>
          {apps && (
            <motion.div
              initial={{
                y: 200,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                ease: "linear",
              }}
              exit={{
                y: 200,
              }}
              className={`round shad h-[248px] gap-5  flex flex-col  items-center absolute bottom-0 z-10  w-[100%]      ${
                darkmode ? " glassb text-white" : "glass"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between w-[80%] px-4 py-6 ">
                {links.map((d, id) => {
                  const Icon = d.icons;
                  return (
                    <a href={d.link} key={id}>
                      <div className="flex items-center justify-center h-[80px] w-[80px] gap-2 flex-col">
                        <Icon size={30} />
                        <p>{d.name}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div className=" w-[80%] flex justify-end items-end">
                <span
                  className={`font-[400] -translate-y-8 -translate-x-8 text-gray-600 text-[30px]   ${
                    darkmode && " text-white"
                  }`}
                >
                  <AiOutlineClose
                    onClick={() => {
                      setApps(false);
                    }}
                    key={25}
                  />
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
}
export default Mobile