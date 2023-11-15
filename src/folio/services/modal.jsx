import React from 'react'
import {BsCheck} from 'react-icons/bs'
import {
  
  AiOutlineClose,
} from "react-icons/ai";
import {motion} from 'framer-motion'
function Modal({data,name,setModal,darkmode}) {
  return (
    <motion.div
      className="modal h-screen sm:h-screen w-full fixed top-0  z-30 flex items-center justify-center "
      exit={{
        y: "-100vh",
      }}
      initial={{
        y: "-100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
        // ease:'ease',
      }}
    >
      <div
        className={` flex flex-col gap-4  h-[auto] w-[380px] px-6 py-5 rounded-md ${
          darkmode ? "bg-gray-800 text-white":'bg-white'
        } `}
      >
        <div className="flex justify-between items-start pt-3">
          <p className="font-[600] capitalize opacity-90 w-[100px]">{name}</p>
          <p
            onClick={() => {
              setModal(false);
            }}
            className="font-[600] opacity-[0.7] text-[21px] cursor-pointer "
          >
            <AiOutlineClose size={25} />
          </p>
        </div>
        {data.map((d, id) => {
          return (
            <div className="">
              <div
                key={id}
                className=" flex gap-4 items-center font-[500] text-[14px] "
              >
                <div className="border px-1 py-1 rounded-full opacity-[0.8] ">
                  <BsCheck className="opacity-[0.8]" />
                </div>
                <p className="text-[16px] opacity-[0.8] ">{d}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Modal
