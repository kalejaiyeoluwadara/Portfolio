import React,{useState,useEffect} from 'react'
import Body from '../body/body';
import Nav from '../nav/nav'
import About from '../about/about';
import info from '../services/info';
import Port from '../../portfolio/port';
import './admin.css'
import Skill from '../skills/skills';
import Contact from '../contact/contact';
import Input from '../input/input';
import Modal from '../services/modal';
import { motion, AnimatePresence } from "framer-motion";
import Services from '../services/services';
import Testimonials from '../test/test';
import Mobile from '../nav/mobile';
import Form from '../input/form';
function Admin() {
   const [modal, setModal] = useState(false);
   const [data, setData] = useState(0);
   const [width, setWidth] = useState(window.innerWidth);
   const [darkmode,setDarkMode] = useState(false);
     useEffect(() => {
       window.addEventListener('resize',() =>{
        setWidth(window.innerWidth)
       })
       return () =>{
        window.removeEventListener('resize',() =>{
        setWidth(window.innerWidth)
       })
       }
     }, []);
  return (
    <div className={`relative ${darkmode && "bg-gray-900 text-white"}`}>
      <div>
        {width > 600 && <Nav darkmode={darkmode} setDarkMode={setDarkMode} />}
        <Body darkmode={darkmode} />
        <About darkmode={darkmode} />
        <Skill darkmode={darkmode} />
        <AnimatePresence>
          {modal && (
            <motion.div>

              <Modal
                darkmode={darkmode}
                name={info[data].name}
                setModal={setModal}
                setData={setData}
                data={info[data].services}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <Services
          darkmode={darkmode}
          modal={modal}
          data={data}
          setData={setData}
          setModal={setModal}
        />
        <Port darkmode={darkmode} />
        <Contact darkmode={darkmode} />
        <Testimonials darkmode={darkmode} />
        {/* <Input darkmode={darkmode} /> */}
        <Form/>
      </div>
      {width <= 600 && <Mobile darkmode={darkmode} setDarkMode={setDarkMode} />}
    </div>
  );
}

export default Admin
