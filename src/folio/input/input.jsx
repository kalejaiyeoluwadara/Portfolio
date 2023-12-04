import React,{useState,useEffect} from 'react'
import { VscSend } from "react-icons/vsc";
import {motion,AnimatePresence} from 'framer-motion'
import { IoCheckmarkDone } from "react-icons/io5";
import { db } from '../../config/firebase';
import { addDoc, getDocs,deleteDoc,doc, collection } from 'firebase/firestore';
function Input() {
  const [btn,setBtn] = React.useState(false);
  const [msg,setMsg] = React.useState('');
  const collectionRef = collection(db, 'messages');
  const [msgList, setMsgList] = useState([]);
  const [error, setError] = useState(null);
  const [modal,setModal] = useState(false);

  const handleClick = async () => {
    const date = new Date();
    try {
      if(msg!==""){
      await addDoc(collectionRef, { message: msg });
      setModal(true);
        setTimeout(() => {
          setModal(false);
        }, 5000);
      }
      else{
        setError("Message field empty")
      }
    } catch (err) {
      console.error(err);
      setError("Failed to add the message"); // Set an error message
    }
    setMsg("");
  }
  const handleChange =(e)=>{
    setMsg(e.target.value)
  }
  // useEffect(() =>{
  //   console.log(msgList);
  // },[])


  const getMessages = async () => {
    try {
      const snapShot = await getDocs(collectionRef);
      const filteredData = snapShot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setMsgList(filteredData);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch messages"); // Set an error message
    }
  }

  
  return (
    <div id='input' className="min-h-[65vh] relative sm:w-[80%] w-[100%] ">
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
          scale:0.9
        }}
        onClick={handleClick}
        className="flex capitalize bg-blue-600 text-white px-4 py-3  gap-2 rounded-md font-[500] text-[20] ">
          {!btn ? 'Send message' :'Message sent'}
          <VscSend size={25} />
        </motion.button>
      </div>
      {modal && <AnimatePresence><Modal/></AnimatePresence> }
      {/*<Messages/>*/}
    </div>
  );
}

const Modal = () =>{
  return(
    <motion.div 
    initial={{
      opacity:0,
      y:-200
    }}
    animate={{
      opacity:1,
      y:0
    }}
    transition={{
      duration:0.8
    }}
    exit={{
      opacity:0,
      y:-200
    }}
    className=' fixed flex z-40 items-center justify-center top-0 w-screen h-[200px]' >
     <section className='bg-green-600 flex text-center items-center justify-center rounded-[6px] w-[250px] h-[60px] '>
     <p className='text-white flex items-center justify-center gap-3 '>Message sent 😃👍 <IoCheckmarkDone size={25} /></p>
     </section>
    </motion.div>
  )
}
const Messages = () =>{
  return(
    <div className='h-[30vh] mt-4 flex items-center justify-center '>
      Hello
    </div>
  )
}
export default Input
