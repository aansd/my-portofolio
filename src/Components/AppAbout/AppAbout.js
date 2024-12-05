import React from 'react'

const AppAbout = () => {
  return (
    <div id="home" className="home w-full max-w-[1024px] h-auto mx-auto mt-10 px-4 mb-32 pt-10">
    <div className="container flex flex-col lg:flex-row items-center lg:items-start">
        
      <div className="flex-1 text-slate-400">
      <div className='flex mb-10'>
        <h1 className="text-cyan-700 lg:text-[32px]">#</h1>
        <span className="lg:text-[32px] text-slate-400 mr-3"><p>about-me</p></span>
        <div className=" border-t lg:w-[300px] border-cyan-700 lg:mt-6"></div>
        </div>
      <p className='mb-5'>Hello, I'm Septiyan Abdurrohman!
            </p>
            <p className='mb-5'>I am a front-end developer, Indonesia. I can develop responsive websites from scratch and develop them into modern, user-friendly web experiences.</p>
            <p className=''>Turning my creativity and knowledge into a website has been my passion for over a year. I have helped various clients to build their presence online. I always try to learn about the latest technologies and frameworks.</p>
        
      </div>
      <div className="flex-1 flex flex-col items-center lg:items-end mt-8 lg:mt-10">
        <img
          src="/images/me.png"
          className="w-[250px] h-[230px] lg:w-[389px] lg:h-[356px]"
          alt="Portfolio Owner"
        />
        <p className="text-slate-400 mt-0 border px-2 py-1 flex items-center gap-2 lg:mr-10">
          <span className="w-3 h-3 bg-cyan-700 inline-block"></span>
          Currently looking for work
        </p>
      </div>
    </div>
  </div>
  )
}

export default AppAbout
