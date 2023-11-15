import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import {motion, AnimatePresence} from 'framer-motion'
function Single({darkmode}) {
  return (
    <div>
      {/* singlecard */}
      <motion.div 
      whileTap={{
        scale:0.9
      }}
      transition={{
        duration:0.3
      }}
      className="flex gap-2  flex-col  h-[250px] justify-between px-6 py-6 rounded-md w-[450px] ">
        {/* innercard */}
        <div className="flex gap-4 justify-between  h-[auto]  py-4 rounded-md w-[90%] ">
          {/* img */}
          <div className="flex gap-2">
            <img
              src="/img2.svg"
              className="h-[50px] w-[50px] rounded-full bg-gray-100"
              alt=""
            />
            {/* innertext */}
            <div>
              <p className="font-bold  opacity-[0.8] capitalize">Coming soon</p>
              <p className="opacity-[0.8] ">Client</p>
            </div>
          </div>

          {/* stars */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((d, id) => {
              return (
                <AiOutlineStar
                  className={`text-gray-700  ${darkmode && " text-white"} `}
                  key={id}
                />
              );
            })}
          </div>
        </div>
        {/* paragraph */}
        <div
          className={`h-[auto] w-[80%] text-gray-600  ${
            darkmode && " text-white"
          } `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          laudantium repellat obcaecati, nisi cum ut ullam numquam
        </div>
        <div></div>
      </motion.div>
    </div>
  );
}

export default Single
