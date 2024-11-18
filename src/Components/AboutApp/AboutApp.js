import React from 'react'

const AboutApp = () => {
  return (
    <div id='about' className='lg:w-[1024px] w-full h-[508px] mx-auto px-6 pt-10'>
      <div className='container'>
        <div className='flex mb-5'>
        <h1 className="text-cyan-700 lg:text-[32px]">#</h1>
        <span className="lg:text-[32px] text-slate-400 mr-3">about-me</span>
        <div className=" border-t lg:w-[400px] border-cyan-700 lg:mt-6"></div>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
        <div className='text-slate-400 lg:w-[515px] w-full text-left'>
            <p className='mb-5'>Hello, I'm Septiyan Abdurrohman!
            </p>
            <p className='mb-5'>I am a front-end developer, Indonesia. I can develop responsive websites from scratch and develop them into modern, user-friendly web experiences.</p>
            <p className=''>Turning my creativity and knowledge into a website has been my passion for over a year. I have helped various clients to build their presence online. I always try to learn about the latest technologies and frameworks.</p>
        </div>
        <div className=''>
    
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutApp
