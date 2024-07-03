import React from "react";
import img from "/pi.jpg";
import "./port.css";
import Controls from "./controls";
import Single from "./single";
import Head from "../folio/head";
import list from "./list";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsChevronLeft,
  BsChevronRight,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";
const Cont = ({ setState, state }) => {
  return (
    <div className="flex w-full items-center sm:mb-10 justify-center gap-2">
      {list.map((d, id) => {
        return (
          <motion.div
            whileTap={{
              scale: 1.5,
            }}
            whileHover={{
              scale: 1.8,
            }}
            key={id}
            className={`h-2 w-2 cursor-pointer rounded-full  ${
              state == id ? "bg-blue-700" : "bg-blue-200"
            }  hover:opacity-[1] `}
            onClick={() => {
              setState(id);
            }}
          ></motion.div>
        );
      })}
    </div>
  );
};
function Port() {
  const [state, setState] = React.useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="portfolio"
      className="flex relative items-center justify-center"
    >
      <div className="h-[auto] sm:mt-20 sm:w-[80%] w-screen relative  justify-start items-center flex flex-col gap-10">
        <Head h1={"Portfolio"} p={"Most recent works"} />

        {/* single */}
        <div className="flex x-[600px] flex-col gap-8 w-full">
          <div className="">
            <Single state={state} setState={setState} />
          </div>

          <Controls setState={setState} state={state} />
          <Cont state={state} setState={setState} />
        </div>
      </div>
    </motion.div>
  );
}

export default Port;
