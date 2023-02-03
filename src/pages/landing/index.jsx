import React from 'react';

const Landing = () => {
  return (
    <div>
      <div className="lines">
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      <div className="bg-lines"></div>
      </div>
       <nav className="text-white flex justify-between content-center p-5 mt-4">
           <div className="text-2xl">Samad Azeez</div>
           <div>
            <a href="/" className="rounded-full outline hover:bg-gray-600 px-4 py-2">Work</a>
            <a href="/" className="rounded-full outline hover:bg-gray-600 px-4 py-2 mx-4">About me</a>
            <a href="/" className="rounded-full outline hover:bg-gray-600 px-4 py-2">Contact</a>
            
           </div>
       </nav>
       
       <section className="text-white pt-10">
           <div className="text-center mt-20 relative">
               <p className="absolute left-[350px] text-2xl">Hi there! 👋🏽 I'm a</p>
           <h1 className="font-bold text-[186px] leading-[100%] tracking-[-.085em] ">front - end developer.<span className="text-[96px]">👨🏽‍💻</span></h1>
           <div className="w-[624px] h-[472px] bg-[#BD6EC5] rounded-[30px] absolute -z-10 bottom-0 right-[160px]"></div>
           </div>
       </section>
       {/* <h1 className="text-5xl font-bold text-white">Building greatness</h1> */}
    </div>
  );
}

export default Landing;
