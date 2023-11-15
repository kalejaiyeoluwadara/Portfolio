import React,{useState,useEffect} from 'react'
import './nav.css'
import Mobile from './mobile'
import {BsMoonFill,BsSun} from 'react-icons/bs'
const Nav = ({darkmode,setDarkMode}) =>{

    return (
      <div
        className={`glass flex items-center sm:w-screen fixed top-0 z-20 shadow-sm justify-center   ${
          darkmode && " glassb"
        }`}
      >
        <div className="sm:w-[80%] relative w-screen flex font-medium justify-between items-center px-2 py-6">
          <div className="font-bold text-[20px]">Dara</div>
          <div className="flex gap-3 sm:gap-8">
            <a href="#home">
              <p className="opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
                Home
              </p>
            </a>
            <a href="#about">
              <p className="text:bg-indigo-7 opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
                About
              </p>
            </a>
            <a href="#sk">
              <p className="text:bg-indigo-7 opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
                Skills
              </p>
            </a>
            <a href="#ser">
              {" "}
              <p className="text:bg-indigo-7 opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
                Services
              </p>
            </a>
            <a href="#portfolio">
              <p className="text:bg-indigo-7 opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
                Portfolio
              </p>
            </a>
            <a href="#contact">
              <p className="text:bg-indigo-7 opacity-[0.8] duration-500 font-[600] cursor-pointer active:text-indigo-500 hover:text-indigo-500">
                Contactme
              </p>
            </a>
            <div
              className="cursor-pointer"
              onClick={() => {
                setDarkMode(!darkmode);
              }}
            >
              {!darkmode ? (
                <BsMoonFill/>
              ) : (
                <BsSun/>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
export default Nav;
