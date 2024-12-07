import React from 'react'
const SkillApp = () => {
  return (
    <div className='skill w-full lg:w-[1024px] h-[365px] mx-auto lg:mt-60 md:mt-[600px] mt-[10px] px-6 lg:mb-30 mb-96'>
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
                <p className=' text-slate-400'> <div className='flex mb-2'><img src='/images/js.png' className='w-[30px] mr-3'/> javascript </div>
                   
                  <div className='flex'> <img src='/images/php.png' className='w-[30px] mr-3'/> PHP</div>
                  </p>
                </div>
            </div>
            </div>
           <div>
           <div className=''>
            <div className='border'>
                <h1 className='text-center text-slate-400'>Database</h1>
                </div>
                <div className='border border-t-0 p-2'>
                <p className='text-slate-400'>
                   <div className='flex mb-2'> <img src='/images/mongo.png' className='w-[30px] mr-3'/> MongoDB</div>
                   <div className='flex'> <img src='/images/mysql.png' className='w-[30px] mr-3'/> Mysql</div>
                   </p>
                </div>
            </div>
           <div className='mt-5'>
            <div className='border'>
                <h1 className='text-center text-slate-400'>Other</h1>
                </div>
                <div className='border border-t-0 p-2'>
                <p className='text-slate-400'>
                <div className='flex mb-2'> <img src='/images/html.png' className='w-[30px] mr-3'/> HTML</div>
                <div className='flex mb-2'> <img src='/images/css.png' className='w-[30px] mr-3'/> CSS</div>
                <div className='flex mb-2'> <img src='/images/scss.png' className='w-[30px] mr-3'/> SCSS</div>
                </p>
                </div>
            </div>
           </div>
           <div className='lg:mt-0 mt-[-172px]'>
           <div className=''>
            <div className='border'>
                <h1 className='text-center text-slate-400'>Tools</h1>
                </div>
                <div className='border border-t-0 p-2'>
                <p className='text-slate-400'>
                <div className='flex mb-2'> <img src='/images/vs.png' className='w-[30px] mr-3'/> Visual Studio</div>
                <div className='flex mb-2'> <img src='/images/git.png' className='w-[30px] mr-3'/> Git</div>
                <div className='flex mb-2'> <img src='/images/laragon.png' className='w-[30px] mr-3'/>Laragon</div>
                <div className='flex mb-2'> <img src='/images/boostsrap.png' className='w-[30px] mr-3'/>Bootstrap</div>
                <div className='flex mb-2'> <img src='/images/tailwind.png' className='w-[30px] mr-3'/> Tailwind</div>
                <div className='flex mb-2'> <img src='/images/nodejs.png' className='w-[30px] mr-3'/> NodeJs</div>
                </p>
                </div>
            </div>
           <div className=' mt-5'>
            <div className='border'>
                <h1 className='text-center text-slate-400'>framework</h1>
                </div>
                <div className='border border-t-0 p-2'>
                <p className=' text-slate-400'>
                <div className='flex mb-2'> <img src='/images/react.png' className='w-[30px] mr-3'/> ReactJs</div>
                <div className='flex mb-2'> <img src='/images/expres.png' className='w-[30px] mr-3 '/>ExpressJs</div>
                <div className='flex mb-2'> <img src='/images/vue.png' className='w-[30px] mr-3'/>VueJs</div>
                <div className='flex mb-2'> <img src='/images/laravel.png' className='w-[30px] mr-3'/>Laravel</div>
                </p>
                </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default SkillApp
