import React from "react";
import ProjectApp from "../../Components/ProjectApp/ProjectApp";
import SkillApp from "../../Components/SkillApp/SkillApp";
import AboutApp from "../../Components/AboutApp/AboutApp";
import Contact from "../../Components/ContactApp/Contact";
import AppAbout from "../../Components/AppAbout/AppAbout";
import ProjectHome from "../ProjectHome/ProjectHome";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div id="home" className="home w-full max-w-[1024px] h-auto mx-auto mt-10 px-4 mb-32 pt-10">
        <div className="container flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex-1">
            <h1 className="text-[40px] lg:text-[42px] font-semibold text-white mb-10">Portfolio</h1>
            <h1 className="text-[24px] lg:text-[32px] font-semibold text-white">
              I'm a <span className="text-cyan-700">web developer</span>{" "}
              and <br className="hidden lg:block" />
              <span className="text-cyan-700">front-end developer</span>
            </h1>
            <p className="text-slate-400 mt-4 text-[14px] lg:text-[16px]">
              I craft responsive websites where technologies meet creativity
            </p>
            <button className="border border-cyan-700 mt-5 px-4 py-2 text-slate-400 hover:bg-cyan-900">
              <a href="#contacts">Contact me!!</a>
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div id="sections">
        <section id="projects" className="">
        <section id="about" className="">
          <AppAbout />
        </section>
          <SkillApp />
        </section>
        <section id="skills" className="">
         <ProjectHome/>
        </section>
        <section id="contacts" className="">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
