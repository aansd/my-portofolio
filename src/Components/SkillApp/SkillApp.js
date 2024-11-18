import React from 'react'
const SkillApp = () => {
  return (
    <div className='skill w-full lg:w-[1024px] h-[365px] mx-auto lg:mt-60 md:mt-[600px] mt-[1200px] px-6 lg:mb-30 mb-40'>
      <div className='container'>
        <div className='flex'>
        <h1 className="text-cyan-700 lg:text-[32px]">#</h1>
        <span className="lg:text-[32px] text-slate-400 mr-3">Skill</span>
        <div className=" border-t lg:w-[400px] border-cyan-700 lg:mt-6"></div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 mt-5'>
            <div className='w-[200px] lg:block hidden'>
            </div>
            <div>
            <div className=''>
                <div className='border'>
                <h1 className='text-center text-slate-400'>Langue</h1>
                </div>
               <div className='border border-t-0 p-2'>
                <p className=' text-slate-400'>javascript <br/> php</p>
                </div>
            </div>
            </div>
           <div>
           <div className=''>
            <div className='border'>
                <h1 className='text-center text-slate-400'>Database</h1>
                </div>
                <div className='border border-t-0 p-2'>
                <p className='text-slate-400'>MongoDB <br/> Mysql</p>
                </div>
            </div>
           <div className='mt-5'>
            <div className='border'>
                <h1 className='text-center text-slate-400'>Other</h1>
                </div>
                <div className='border border-t-0 p-2'>
                <p className=' text-slate-400'>HTML CSS <br/> SCSS </p>
                </div>
            </div>
           </div>
           <div className='lg:mt-0 mt-[-107px]'>
           <div className=''>
            <div className='border'>
                <h1 className='text-center text-slate-400'>Tools</h1>
                </div>
                <div className='border border-t-0 p-2'>
                <p className='text-slate-400'>VScode Git Laragon bootstrap Tailwind node.js</p>
                </div>
            </div>
           <div className=' mt-5'>
            <div className='border'>
                <h1 className='text-center text-slate-400'>framework</h1>
                </div>
                <div className='border border-t-0 p-2'>
                <p className=' text-slate-400'>React.js Express.js Vue.js Laravel</p>
                </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default SkillApp
