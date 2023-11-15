import React,{useState} from 'react'
import { MdOutlineDesignServices } from "react-icons/md";
import { CiServer } from "react-icons/ci";
import Modal from './modal';
import {motion} from 'framer-motion'
import { BsArrowRightShort } from "react-icons/bs";
function Single({name,data,id,setModal,modal,setData}) {

   
  return (
      <motion.div
      initial={{opacity:0,scale:0.7}}
      whileInView={{opacity:1,scale:1}}
      // transition={{duration:0.7}}
      whileTap={{
        scale:0.7
      }}
      whileHover={{
        scale:1.1
      }}
      onClick={() =>{
        setModal(true)
        setData(id)
        console.log(dara);
      }}
      className="h-[300px] cursor-pointer hover:opacity-[0.8] duration-[0.3s]  w-[300px] shadow-md rounded-md gap-4 pt-[20px] px-8 flex flex-col items-start justify-center ">
      {name === "Frontend developer" && (
        <p className="text-[30px] opacity-[0.8] text-indigo-800 ">{"<>"}</p>
      )}
      {name === "UI/UX designer" && (
        <MdOutlineDesignServices
          size={35}
          className="text-[30px] opacity-[0.8] text-indigo-800"
        />
      )}
      {name === "Backend developer" && (
        <CiServer
          size={35}
          className="text-[30px] opacity-[0.8] text-indigo-800"
        />
      )}
      <h2 className="font-[600] w-[100px] capitalize text-[20px]  opacity-90 ">
        {name}
      </h2>
      <p className="text-indigo-800 flex gap-2 items-center capitalize">
        View More <BsArrowRightShort size={20} />
      </p>
    </motion.div>
  );
}

export default Single
