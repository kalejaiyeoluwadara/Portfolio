import React from 'react'
import { VscSend } from "react-icons/vsc";
import {motion} from 'framer-motion'
function Input() {
  const [btn,setBtn] = React.useState(false);
  const [msg,setMsg] = React.useState('');
  const handleClick =() =>{
   if(msg !== ' '){
    
     setBtn(true);
     setMsg("");
   }
   else{

   }
  }
  const handleChange =(e)=>{
    setMsg(e.target.value)
  }
  return (
    <div id='input' className="h-[65vh] sm:w-[80%] w-[100%] ">
      <div className="flex flex-col sm:justify-end sm:items-end items-center gap-12">
        <textarea
        placeholder='send a message...'
        value={msg}
          name="msg"
          onChange={handleChange}
          id="msg"
          cols="30"
          className="rounded-md text-black outline-none font-[500] px-3 py-2 sm:w-[400px] w-[90%] h-[250px] bg-gray-200"
          rows="10"
        ></textarea>
        <motion.button 
        whileTap={{
          scale:0.6
        }}
        onClick={handleClick}
        className="flex capitalize bg-blue-600 text-white px-4 py-3  gap-2 rounded-md font-[500] text-[20] ">
          {!btn ? 'Send message' :'Message sent'}
          <VscSend size={25} />
        </motion.button>
      </div>
    </div>
  );
}

export default Input
