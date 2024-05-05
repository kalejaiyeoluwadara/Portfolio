import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import {motion, AnimatePresence} from 'framer-motion'
import '../../App.css'
function Single({darkmode}) {
  return (
    <div>
      {/* singlecard */}
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        initial={{
          x: 100,
        }}
        whileInView={{
          x: 0,
          transition: {
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="flex gap-2 gls flex-col w-[300px] h-[300px]  sm:h-[350px] justify-between px-6 py-6 rounded-xl sm:w-[450px] "
      >
        {/* innercard */}
        <div className="flex gap-4 justify-between  h-[auto]  py-4 rounded-md w-[90%] ">
          {/* stars */}
          {/* <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((d, id) => {
              return (
                <AiOutlineStar
                  className={`text-gray-700  ${darkmode && " text-white"} `}
                  key={id}
                />
              );
            })}
          </div> */}
        </div>
        {/* paragraph */}
        <div
          className={`h-[auto] w-[100%] text-gray-600  ${
            darkmode && " text-white"
          } `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          laudantium repellat obcaecati, nisi cum ut ullam numquam
        </div>
        {/* img */}
        <div className="flex mt-8 gap-2">
          <img
            src="/img2.svg"
            className="h-[50px] w-[50px] mr-2 rounded-full bg-gray-100"
            alt=""
          />
          {/* innertext */}
          <div>
            <p className="font-bold  opacity-[1] capitalize">Michael Ojo</p>
            <p className="opacity-[0.8] font-[300] ">Software Developer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Single
