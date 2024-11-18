import React from "react";

const ProjectApp = () => {
  return (
    <div id="projects" className="project w-full lg:w-[1024px] h-[518px] mx-auto px-6 mb-80 pt-10">
      <div className="container flex justify-between">
        <div className="flex">
          <h1 className="text-cyan-700 lg:text-[32px]">#</h1>
          <span className="lg:text-[32px] text-slate-400 mr-3">Project</span>
          <div className=" border-t lg:w-[400px] border-cyan-700 lg:mt-6"></div>
        </div>
        <h1 className="lg:mt-5 text-slate-400 lg:text-[16px] text-[12px]">
          <a href="/project">View All {"-->"}</a>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div>
          <div className="border">
            <img src="/images/e-web.png" className="p-2" />
          </div>
          <div className="border border-t-0">
            <p className="text-slate-400 px-2">react.js tailwind css </p>
          </div>
          <div className="border border-t-0 text-slate-400 px-4 py-5">
            <h1 className="text-[24px] mb-3">Electronic Web</h1>
            <p className="mb-3">
              Developing a responsive web frontend using the React JS framework
              and Tailwind CSS
            </p>
            <button className="border px-3 py-1 hover:bg-slate-900">
              <a
                href="https://e-web-git-main-aansds-projects.vercel.app/"
                target="blank_"
              >
                live {"<->"}{" "}
              </a>
            </button>
          </div>
        </div>
        <div>
          <div className="border">
            <img src="/images/webtoko.png" className="p-2" />
          </div>
          <div className="border border-t-0">
            <p className="text-slate-400 px-2">Vue js bootstrap css </p>
          </div>
          <div className="border border-t-0 text-slate-400 px-4 py-5">
            <h1 className="text-[24px] mb-3">Web API sistemtoko.com</h1>
            <p className="mb-3">
              developed a responsive web frontend using the vue js framework and
              bootstrap, which took the api from postman sistemtoko.com
            </p>
            <button className="border px-3 py-1 hover:bg-slate-900">
              <a href="https://frontend-vue-five.vercel.app/"
              target="blank_"
              >
                live {"<->"}{" "}
              </a>
            </button>
          </div>
        </div>
        <div>
          <div className="border">
            <img src="/images/weding.png" className="p-2" />
          </div>
          <div className="border border-t-0">
            <p className="text-slate-400 px-2">javascript html css </p>
          </div>
          <div className="border border-t-0 text-slate-400 px-4 py-5">
            <h1 className="text-[24px] mb-3">Weding invitation</h1>
            <p className="mb-3">
              Wedding invitation web development using responsive JavaScript HTML and CSS
            </p>
            <button className="border px-3 py-1 hover:bg-slate-900">
              <a href="https://aansd.github.io/wedingInvitation/"
               target="blank_"
              >
                live {"<->"}{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectApp;
