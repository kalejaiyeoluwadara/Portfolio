import React from 'react'
import { BsArrowUpShort,BsArrowLeftShort } from "react-icons/bs";
function Control() {
  return (
    <div className="px-1 py-1 absolute -right-[130px] bottom-5 text-white rounded-md bg-blue-500">
      <a href="#home">
        <BsArrowUpShort size={30} />
      </a>
    </div>
  );
}

export default Control
