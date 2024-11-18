import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
const AppNavbar = () => {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    let menuActive = show ? "left-0" : "-left-full"
    const isActive = (path) => (location.pathname === path ? "text-white" : "text-slate-400");
  return (
    <div className='navbar w-full fixed top-[-10px] lg:left-40 lg:w-[1024px] lg:mx-auto py-7 px-5'>
      <div className='container flex justify-between'>
            <h1 className='text-white flex'>Portofolio</h1>
            <ul className={`flex transition-all lg:gap-10 md:gap-8 md:w-auto md:static fixed ${menuActive} md:h-full md:translate-y-0 md:transition-none md:p-0 md:m-0 md:flex-row top-1/4 -translate-y-1/2 flex-col px-5 py-6 text-cyan-700 lg:bg-transparent md:bg-transparent bg-slate-900 rounded`}>
            <li className="mb-2">
            <a href="/" className={isActive("/")}>
              <span className='text-cyan-700'>#</span><span>home</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="/project" className={isActive("/project")}>
            <span className='text-cyan-700'>#</span><span>projects</span>
            </a>
          </li>
          {/* <li className="mb-2">
            <a href="#about" className={isActive("#about")}>
            <span className='text-cyan-700'>#</span><span>about-me</span>
            </a>
          </li>
          <li>
            <a href="#contacts" className={isActive("#contacts")}>
            <span className='text-cyan-700'>#</span><span>contacts</span>
            </a>
          </li> */}
            </ul>
            <div className='lg:ml-[-500px]'>
                <li className="list-none md:hidden block cursor-pointer text-slate-400"
                   onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </li>
              </div>
      </div>
    </div>
  )
}

export default AppNavbar
