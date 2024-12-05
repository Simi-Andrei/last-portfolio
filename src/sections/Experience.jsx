import toque from "../assets/images/toque.png";
import instructor from "../assets/images/instructor.png";
import cogs from "../assets/images/cogs.png";
import exPhoto1 from "../assets/images/exPhoto1.png";
import exPhoto2 from "../assets/images/exPhoto2.png";
import exPhoto3 from "../assets/images/exPhoto3.png";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import jsonwebtoken from "../assets/images/jsonwebtoken.png";
import { motion } from "framer-motion";

const Experience = () => {
  const frontendSkills = [
    { id: "1", icon: <FaHtml5 />, skill: "HTML5", color: "#e34c26" },
    { id: "2", icon: <FaCss3Alt />, skill: "CSS3", color: "#264de4" },
    { id: "3", icon: <SiBootstrap />, skill: "Bootstrap", color: "#563d7c" },
    { id: "4", icon: <SiJavascript />, skill: "JavaScript", color: "#f0db4f" },
    {
      id: "5",
      icon: <SiTailwindcss />,
      skill: "TailwindCSS",
      color: "#38bdf8",
    },
    { id: "6", icon: <FaReact />, skill: "React", color: "#38bdf8" },
    { id: "7", icon: <SiRedux />, skill: "Redux", color: "#764abc" },
  ];

  const backendSkills = [
    { id: "1", icon: <FaNodeJs />, skill: "NodeJS", color: "#3c873a" },
    {
      id: "2",
      icon: <SiExpress />,
      skill: "ExpressJS",
      color: "#000",
    },
    { id: "3", icon: <SiMongodb />, skill: "MongoDB", color: "#3FA037" },
    { id: "4", icon: <SiJavascript />, skill: "JavaScript", color: "#f0db4f" },
  ];

  return (
    <section id="experience" className="mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="uppercase text-lg tracking-tighter font-light text-center mb-10"
      >
        Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-start justify-evenly flex-wrap"
      >
        <div className="w-full md:w-80 lg:w-96 py-4 px-6">
          <div className="border border-stone-200 shadow shadow-stone-200 rounded-2xl p-4">
            <div className="h-64 p-10 relative">
              <div className="z-10">
                <img src={toque} alt="toque" className="relative z-10" />
              </div>
              <img
                src={exPhoto1}
                alt="color"
                className="absolute top-10 left-0"
              />
            </div>
            <div className="h-16">
              <h3 className="text-center text-lg font-bold text-cyan-800">
                ITSchool Frontend development course
              </h3>
            </div>
            <div className="text-center text-sm md:h-32">
              <p>
                - 100 hours of live teaching, interactive exercises and multiple
                projects
              </p>
              <p>- weekly homework with different tasks</p>
              <p>- certificate of completion, diploma</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-80 lg:w-96 py-4 px-6">
          <div className="border border-stone-200 shadow shadow-stone-200 rounded-2xl p-4">
            <div className="h-64 p-10 relative">
              <img
                src={instructor}
                alt="instructor"
                className="relative z-10"
              />
              <img
                src={exPhoto2}
                alt="color"
                className="absolute top-10 left-0"
              />
            </div>
            <div className="h-16">
              <h3 className="text-center text-lg font-bold text-cyan-800">
                Numerous Udemy courses and lessons
              </h3>
            </div>
            <div className="text-center text-sm md:h-32">
              <p>- 2-3 years of taking Udemy courses</p>
              <p>- learned the basics first and advanced technologies after</p>
              <p>- desire to learn more everyday</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-80 lg:w-96 py-4 px-6">
          <div className="border border-stone-200 shadow shadow-stone-200 rounded-2xl p-4">
            <div className="h-64 p-10 relative">
              <img src={cogs} alt="cogs" className="relative z-10" />
              <img
                src={exPhoto3}
                alt="color"
                className="absolute top-10 left-0"
              />
            </div>
            <div className="h-16">
              <h3 className="text-center text-lg font-bold text-cyan-800">
                Different tutorials, videos and docs
              </h3>
            </div>
            <div className="text-center text-sm md:h-32">
              <p>- many tutorials on different subjects</p>
              <p>- many sources of information and inspiration</p>
              <p>- developed the ability to find what I need quickly</p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="border-stone-200 px-6 lg:px-32 xl:px-72">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase text-lg tracking-tighter font-light text-center mt-32 mb-10"
        >
          Tech stack
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-between"
        >
          <div className="w-full md:w-[48%] lg:w-[49%]">
            <h3 className="font-bold tracking-tighter mb-4 text-center text-cyan-800 uppercase">
              Frontend
            </h3>
            <div className="flex flex-wrap justify-center">
              {frontendSkills.map(({ id, icon, skill, color }) => (
                <div key={id} className="w-1/3 p-0.5 lg:p-2">
                  <div className="border border-stone-200 rounded-md p-2 flex flex-col items-center justify-between cursor-pointer hover:shadow-md transition-all duration-200">
                    <span
                      className="text-5xl mb-2"
                      style={{ color: `${color}` }}
                    >
                      {icon}
                    </span>
                    <span className="text-xs">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[48%] lg:w-[49%] mt-10 md:mt-0">
            <h3 className="font-bold tracking-tighter mb-4 text-center uppercase text-cyan-800">
              Backend
            </h3>
            <div className="flex flex-wrap justify-center">
              {backendSkills.map(({ id, icon, skill, color }) => (
                <div key={id} className="w-1/3 p-0.5 lg:p-2">
                  <div className="border border-stone-200 rounded-md p-2 flex flex-col items-center justify-between cursor-pointer hover:shadow-md transition-all duration-200">
                    <span
                      className="text-5xl mb-2"
                      style={{ color: `${color}` }}
                    >
                      {icon}
                    </span>
                    <span className="text-xs">{skill}</span>
                  </div>
                </div>
              ))}
              <div className="w-1/3 p-0.5 lg:p-2">
                <div className="border border-stone-200 rounded-md p-2 flex flex-col items-center justify-between cursor-pointer hover:shadow-md transition-all duration-200">
                  <img src={jsonwebtoken} className="w-14" alt="jsonwebtoken" />
                  <span className="text-xs">jsonwebtoken</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
