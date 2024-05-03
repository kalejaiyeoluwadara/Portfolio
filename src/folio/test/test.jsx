import React from 'react'
import Single from './single';
import './test.css'
import {motion} from 'framer-motion';
import Head from '../head'
function Testimonials({darkmode}) {
  return (
    <motion.div
   
    id="portfolio" className="flex items-center mt-20 justify-center">
      <div className="sm:h-[70vh] w-[80%] relative  justify-start items-center flex flex-col gap-10">
        <Head h1={"Testimonials"} p={"My clients saying"} />

        <motion.div
        className="tests flex cursor-move  w-full h-auto overflow-x-scroll">
            {[1,2,3,4,5,6].map((d,id) =>{
                return <Single darkmode={darkmode} key={id}/>;
            })}
        </motion.div>
      </div>
      {/* cardcontainer */}
    </motion.div>
  );
}

export default Testimonials
