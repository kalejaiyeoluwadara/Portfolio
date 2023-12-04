import React from 'react'
import img from "/pi.jpg";
import list from './list';
import Controls from './controls';
import {
  BsChevronLeft,
  BsChevronRight,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
function Single({state,setState}) {
     const checkState = (state) => {
    if (state >= list.length) {
      return 0;
    } else if (state < 0) {
      return list.length - 1;
    } else {
      return state;
    }
  };

  const Next = () => {
    setState((prevState) => checkState(prevState + 1));
  };

  const Prev = () => {
    setState((prevState) => checkState(prevState - 1));
  };

  return (
    <AnimatePresence>
      <motion.div
      key={state}
      initial={{opacity:0}}
      animate={{opacity:1,x:0}}
      transition={{duration:0.6}}
      exit={{opacity:0,x:'100%'}}
      layout='true' className="flex mt-12  gap-8 items-center relative  sm:w-full sm:justify-around justify-center">
        {/* mob */}
        <div className="flex sm:flex-row sm:gap-[50px] flex-col-reverse items-center justify-center">
          <div className=" flex flex-col  sm:gap-5 mt-12 items-start">
            <h1 className="font-[600] w-[100%] opacity-[0.9] text-[28px] ">
              {list[state].name}
            </h1>
            <p className="w-[300px] sm:mb-0 mb-6 opacity-[0.8] font-[500] ">
              {list[state].info}
            </p>
            <motion.a target="_blank" href={list[state].link}>
              <motion.button
                whileTap={{
                  scale: 0.95,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="px-5 py-3  flex gap-2 items-center rounded-md bg-blue-700 text-white font-[500] "
              >
                Demo <BsArrowRightShort size={30} />
              </motion.button>
            </motion.a>
          </div>
          <div className="flex sm:block sm:mb-0 mb-4 items-center relative overflow-hidden justify-center">
              <img
              
                key={state}
                // initial={{
                //   // opacity: 0,
                //   y:10
                // }}
                // animate={{
                //   // opacity: 1,
                //   y:0
                // }}
                transition={{
                  duration: 1,
                }}
                exit={{
                  // opacity: 0,
                  // y:300
                }}
                src={list[state].img}
                className="h-[250px] top-0 left-0 w-[90%] sm:w-[400px] rounded-xl "
                alt=""
              />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Single
