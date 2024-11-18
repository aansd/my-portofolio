import React from "react";
import ProjectApp from "../../Components/ProjectApp/ProjectApp";
import SkillApp from "../../Components/SkillApp/SkillApp";
import AboutApp from "../../Components/AboutApp/AboutApp";
import Contact from "../../Components/ContactApp/Contact";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div id="home" className="home w-full max-w-[1024px] h-auto mx-auto mt-10 px-4 mb-32 pt-10">
        <div className="container flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex-1">
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
          <div className="flex-1 flex flex-col items-center lg:items-end mt-8 lg:mt-0">
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

      {/* Other Sections */}
      <div id="sections">
        <section id="projects" className="">
        <section id="about" className="">
          <AboutApp />
        </section>
          <ProjectApp />
        </section>
        <section id="skills" className="">
          <SkillApp />
        </section>
        <section id="contacts" className="">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
