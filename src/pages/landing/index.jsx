import arrow from "../../assets/img/arrowDown.svg";
import Lifee from "../../assets/img/lifee.png";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import figma from "../../assets/img/figma.png";
import react from "../../assets/img/react.png";
import javascript from "../../assets/img/javascript.png";
import github from "../../assets/img/github.png";
import { BiLinkExternal } from "react-icons/bi";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
// import AnimatedTextWord from "../../components/Animatedword";
import { useState } from "react";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};


const Landing = () => {
    const [nav, setNav] = useState(false);
const handleClick = () => {
  setNav(!nav);
};

  return (
    <div className="text-white">
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
      <nav className="flex justify-between content-center p-5 mt-4">
        <div className="text-1xl md:text-2xl z-20">Samad Azeez</div>

        <div className="hidden md:block">
          <a
            href="#work"
            className="rounded-full outline hover:bg-gray-600 px-4 py-2"
          >
            Work
          </a>
          <a
            href="#about"
            className="rounded-full outline hover:bg-gray-600 px-4 py-2 mx-4"
          >
            About me
          </a>
          <a
            href="#contact"
            className="rounded-full outline hover:bg-gray-600 px-4 py-2"
          >
            Contact
          </a>
        </div>
        <div onClick={handleClick} className="cursor-pointer md:hidden z-20">
        {!nav ? <FaBars size="30"/> : <FaTimes size="30"/>}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 bg-[#151515] w-full h-screen flex flex-col justify-center items-center z-10"
        }
      >
        <li className="py-6 text-4xl">
        <a href="#work" onClick={handleClick}
         className="rounded-full outline hover:bg-gray-600 px-4 py-2 mx-4" >
            Work
          </a>
        </li>
        <li className="py-6 text-4xl">
        <a
            href="#about"
            onClick={handleClick} 
            className="rounded-full outline hover:bg-gray-600 px-4 py-2 mx-4"
          >
            About me
          </a>
        </li>
        <li className="py-6 text-4xl">
        <a
            href="#contact"
            onClick={handleClick} 
            className="rounded-full outline hover:bg-gray-600 px-4 py-2 mx-4"
          >
            Contact
          </a>
        </li>
        <div className="flex justify-between mt-10">
        <li>
            <a
              href="https://www.linkedin.com/in/samad-azeez-656b6621a/"
            >
              <FaLinkedin size="30" />
            </a>
          </li>
          <li >
            <a
              href="https://github.com/larrybabs"
            >
              <FaGithub size="30" />
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/samadolanrewaju"
              
            >
              <FaBehance size="30" />
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1qsdQHzkwByoAcbsLZy3hVEiWF8Djs81x8AmhrkaO-nQ/edit"
            >
               <BsFillPersonLinesFill size="30" />
            </a>
          </li>
        </div>
        </ul>

      </nav>

      <section className="pt-10" id="hero">
        <div className="p-4 text-center md:mt-20 relative">
          <p className="md:absolute left-[350px] text-2xl">Hi there! 👋🏽 I'm a</p>
          <h1 className="font-bold text-7xl md:text-[186px] leading-[100%] tracking-[-.085em] ">
            front - end designer.
            {/* <AnimatedTextWord text="hello world"/> */}
            <span className="md:text-[96px]">👨🏽‍💻</span>
          </h1>
          <div className="w-[230px] h-[220px] md:w-[624px] md:h-[472px] bg-[#BD6EC5] rounded-[30px] absolute -z-[2] bottom-0 right-[160px]"></div>
        </div>
      </section>

      <div className="hidden md:flex items-center">
        <img src={arrow} alt="" className="arrow-down" />
        <p className="mx-4">Scroll down</p>
      </div>

      <section id="about" className="my-20">
        <div className="p-4 flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 items-start">
            <div>
              <div className="sm:text-right">
                <p className="text-[20px] mt-4">ABOUT ME</p>
              </div>
            </div>
            <div>
              <p className="text-[30px] md:text-[37px] md:leading-[60px] w-full md:w-[680px]">
                I’m a Front-end Developer and a UI/UX Designer passionate about
                building new tech solutions and creating a seamless user
                experience. What would you do if you had a software expert
                available at your fingertips?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <h1 className="font-bold text-2xl p-5">Projects</h1>
        <hr />
        <div className="p-5 text-gray-300 flex flex-wrap justify-between items-center">
          <div>
            <p className="my-3 text-[22px]">Lifee Remit</p>
            <img
              src={Lifee}
              alt="Lifee remit project"
              className="project-img"
            />
            <div className="px-6 py-2 underline flex justify-between">
              <a href="https://github.com/larrybabs" target="_blank" rel="noreferrer" className="flex place-items-center">
                Code <BiLinkExternal />
              </a>
              <a href="https://www.lifeeremit.com/" target="_blank" rel="noreferrer" className="flex place-items-center">
                Demo <BiLinkExternal />
              </a>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <section id="skills">
        <h1 className="font-bold text-2xl p-5 mt-10">Skills</h1>

        <div className="flex justify-between flex-wrap p-10">
          <img
            src={html}
            alt="html"
            className="mb-10 md:opacity-50 hover:opacity-100"
          />
          <img
            src={css}
            alt="css"
            className="mb-10 md:opacity-50 hover:opacity-100"
          />
          <img
            src={javascript}
            alt="javascript"
            className="mb-10 md:opacity-50 hover:opacity-100"
          />
          <img
            src={react}
            alt="react"
            className="mb-10 md:opacity-50 hover:opacity-100"
          />
          <img
            src={figma}
            alt="figma"
            className="mb-10 md:opacity-50 hover:opacity-100"
          />
          <img
            src={github}
            alt="github"
            className="mb-10 md:opacity-50 hover:opacity-100"
          />
        </div>

        {/* <div className="marquee">
     <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
        
                <img src={css} alt="css" />
                <img src={html} alt="html" className="mx-20"/>
                <img src={html} alt="html" />
                <img src={html} alt="html" />
                <img src={html} alt="html" />
                <img src={html} alt="html" />
                <img src={html} alt="html" />
            
            </motion.div>
     </div> */}
      </section>
      <section id="contact">
        <div className="mt-40">
          <div className="marquee">
            {/* 3. Using framer motion */}
            <motion.div
              className="track"
              variants={marqueeVariants}
              animate="animate"
            >
              <h1 className="text-7xl md:text-[120px] p-0">
                <a href="mailto:samadazeezolanrewaju@gmail.com">
                  Let's Work Together. Let's Work Together. Let's Work Together.
                  Let's Work Together. Let's Work Together. Let's Work Together.
                  Let's Work Together
                </a>
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center">
          <div>
            <h1 className="font-bold text-9xl md:text-[146px] leading-[100%] tracking-[-.085em]">
              get in <br />
              touch
            </h1>
            <div>
              <ul className="flex justify-between my-5 mb-10">
                <li>
                  <a href="mailto:samadazeezolanrewaju@gmail.com">
                    <HiOutlineMail size="30" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/samad-azeez-656b6621a/">
                    <FaLinkedin size="30" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/larrybabs">
                    <FaGithub size="30" />
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/samadolanrewaju">
                    <FaBehance size="30" />
                  </a>
                </li>
                <li>
                  <a href="https://docs.google.com/document/d/1qsdQHzkwByoAcbsLZy3hVEiWF8Djs81x8AmhrkaO-nQ/edit">
                    <BsFillPersonLinesFill size="30" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" md:ml-40">
            <p className="text-3xl md:text-[42px] md:leading-[55px] w-full md:w-[599px] mb-10">
              Got a question, offer or project you want work or collaborate on?
              Feel free to reach out. Let’s create magic 🚀.
            </p>
            <a
              href="mailto:samadazeezolanrewaju@gmail.com"
              className="outline hover:bg-gray-600 p-4"
            >
              samadazeezolanrewaju@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="p-5 flex justify-between mt-40">
        <p>Website designed and converted by Samad Azeez</p>
        <p>Copyright © 2023 Samad Azeez</p>
      </section>
      {/* <h1 className="text-5xl font-bold text-white">Building greatness</h1> */}
    </div>
  );
};

export default Landing;
