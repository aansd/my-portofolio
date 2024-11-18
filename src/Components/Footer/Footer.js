import React from 'react'

const Footer = () => {
  return (
    <div className='lg:w-[1024px] w-full lg:h-[144px] h-full mx-auto mt-2 pb-3'>
      <div className='container text-slate-400'>
        <div className='flex justify-between lg:flex-row flex-col text-center'>
            <div className=''>
                <h1>Web developer and front-end developer</h1>
            </div>
            <div className='lg:mt-0 mt-5'>
                <h1>Media</h1>
                <ul className='flex gap-3 items-center justify-center mt-2'>
                    <li><a href='https://github.com/aansd' target='blank_'><img src='/images/Github.png'/></a></li>
                    <li><a href='https://www.linkedin.com/in/septiyan-abdurrohman-0898b9315/' target='blank_'><img src='/images/Linkedin.png'/></a></li>
                    <li><a href='https://www.instagram.com/gendaanmu_/' target='blank_'><img src='/images/instaram.png'/></a></li>
                </ul>
            </div>
        </div>
        <div className='mt-20'>
            <h1 className='text-center'>© Copyright 2024. Made by Septiyan </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
