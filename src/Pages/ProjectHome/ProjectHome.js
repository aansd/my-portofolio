import React from 'react'
import ProjectOne from '../../Components/ProjectOne/ProjectOne'
import ProjectTwo from '../../Components/ProjectTwo/ProjectTwo'
import ProjectThree from '../../Components/ProjectThree/ProjectThree'

const ProjectHome = () => {
  return (
    <div className='w-full max-w-[1024px] mx-auto px-5' >
       <div className='flex mb-10'>
        <h1 className="text-cyan-700 lg:text-[32px]">#</h1>
        <span className="lg:text-[32px] text-slate-400 mr-3"><p>project</p></span>
        <div className=" border-t lg:w-[300px] border-cyan-700 lg:mt-6"></div>
        </div>
        <div className=''>
            <ProjectOne/>
        </div>
        <div className=''>
            <ProjectTwo/>
        </div>
        <div className=''>
            <ProjectThree/>
        </div>
    </div>
  )
}

export default ProjectHome
