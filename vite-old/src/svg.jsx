import React from 'react'

function Svg({img,size}) {
  return (
   <img 
   style={{
    color:'white'
   }}
   src={img} className={`h-${size}px text-white `} alt="" />
  )
}

export default Svg
