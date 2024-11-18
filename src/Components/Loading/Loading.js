import React from 'react'
import './Loading.css'
const Loading = () => {
  return (
    <div className="lg:w-[1024px] h-screen flex flex-col justify-center items-center mx-auto">
  <img src="/images/minecraft.png" className="lg:w-40 w-32 mb-3" />
  <p className="text-slate-400 text-center">
    Loading
    <span className="dot-animation">.</span>
    <span className="dot-animation">.</span>
    <span className="dot-animation">.</span>
  </p>
</div>
  
  )
}

export default Loading
