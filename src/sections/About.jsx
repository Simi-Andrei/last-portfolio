import { useState } from "react";
import me from "../assets/images/simigiuAndrei.jpeg";
import { HiCode, HiOutlineSwitchHorizontal } from "react-icons/hi";
import { MdSkateboarding } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section
      id="aboutme"
      className="mt-32 bg-gradient-to-tr from-slate-950 to-cyan-800 py-10 px-2 xl:px-64"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="uppercase text-lg tracking-tighter font-light text-center text-stone-50 mb-10"
      >
        About me
      </motion.h2>
      <div className="flex items-start justify-between flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 px-2 md:px-10 py-10"
        >
          <img
            src={me}
            alt="simigiu andrei"
            className="rounded-2xl w-96 brightness-90 ms-auto"
          />
          <div className="mt-3 text-stone-50 text-right">
            <p className="uppercase tracking-tighter">Andrei Simigiu</p>
            <p className="text-sm font-light">Frontend developer</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 px-2 md:px-10 py-10"
        >
          <div className="w-20 me-auto rounded-full h-10 shadow-inner relative bg-stone-50">
            <button
              onClick={() => setToggle(!toggle)}
              className={`bg-cyan-800 w-8 h-8 rounded-full mt-1 ml-1 transition-all duration-150 text-xs text-white ${
                toggle === false && "translate-x-10"
              }`}
            >
              <HiOutlineSwitchHorizontal className="text-lg mx-auto text-stone-50" />
            </button>
            <HiCode
              className={`absolute top-2.5 left-3 text-xl pointer-events-none transition-all duration-150 ${
                toggle === true && "opacity-0"
              }`}
              fill="#000"
            />
            <MdSkateboarding
              className={`absolute top-2.5 right-3 text-xl pointer-events-none transition-all duration-150 ${
                toggle === false && "opacity-0"
              }`}
              fill="#000"
            />
          </div>
          <div className="w-full lg:w-96 lg:h-96 mt-4 rounded-2xl text-black p-6 shadow-inner bg-stone-50">
            {toggle === true ? (
              <div>
                <h3 className="text-center uppercase tracking-tighter font-bold text-cyan-800">
                  Day to day life
                </h3>
                <p className="mt-6 font-light">
                  Very curious individual, always feeling the urge to know
                  everything, no matter if it is the lastest juicy gossip or
                  what the President eats for breakfast. Love to travel, play
                  video games and eat. In my youths, I used to draw/ sketch a
                  lot (I do have an artistic bent) and also go out skateboarding
                  (I didn't use to eat that much back then). I like to spend my
                  free time with friends or watching movies, series and not the
                  least, <span className="text-cyan-800 font-bold">coding</span>
                  .
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-center uppercase tracking-tighter font-bold text-cyan-800">
                  Developer life
                </h3>
                <p className="mt-6 font-light">
                  A couple of years ago I started{" "}
                  <span className="text-cyan-800 font-bold">coding</span> using
                  HTML and CSS to create/ design web pages. Started to follow
                  Udemy courses which grabbed my interest even more after adding
                  JavaScript to the stack. At the moment I am using ReactJS to
                  develop single page applications with different
                  functionalities and features and also a couple of MERN Stack
                  applications such as E-Commerce with React-Context or
                  React-Redux.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
