import React from 'react'

function Head({h1,p}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-[45px] opacity-[0.9]">{h1}</h1>
      <p className="font-[500] text-[18px] opacity-80 ">{p}</p>
    </div>
  );
}

export default Head
