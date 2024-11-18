import React from "react";

const Contact = () => {
  return (
    <div id="contacts" className="lg:w-[1000px] w-full h-[228px] mx-auto lg:px-0 px-6 lg:mb-10 mb-52 pt-10">
      <div className="container">
        <div className="flex">
          <h1 className="text-cyan-700 lg:text-[32px]">#</h1>
          <span className="lg:text-[32px] text-slate-400 mr-3">contacts</span>
          <div className=" border-t lg:w-[400px] border-cyan-700 lg:mt-6"></div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="text-slate-400 text-left max-w-[500px]">
            <p>
              I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
            </p>
          </div>
          <div className="text-slate-400 w-[300px] lg:ml-48 mt-5">
            <div className="border pl-3 py-2">
              <h1>Message me here</h1>
              <div className="flex mt-3">
                <img src="/images/Discord.png" />
                <p className="ml-2">abdurrohman#9542</p>
              </div>
              <div className="flex mt-3">
                <img src="/images/Email.png" />
                <p className="ml-2">septiyanjobs@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
