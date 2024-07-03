import React from "react";
import list from "./list";
import { motion } from "framer-motion";
import {
  BsChevronLeft,
  BsChevronRight,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";
function Controls({ setState, state }) {
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
    <div className="w-[400px] sm:mt-0 mt-4 sm:w-screen px-12 sm:px-12 sm:-translate-x-[115px] flex sm:pl-0 pl-[12px] absolute top-[440px] sm:top-[300px] justify-between items-center">
      <motion.div
        whileTap={{
          scale: 0.4,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <BsChevronLeft
          onClick={Prev}
          className="text-blue-700  cursor-pointer font-extrabold"
          size={40}
        />
      </motion.div>
      <motion.div
        whileTap={{
          scale: 0.4,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <BsChevronRight
          onClick={Next}
          className="text-blue-700 cursor-pointer font-extrabold"
          size={40}
        />
      </motion.div>
    </div>
  );
}

export default Controls;
