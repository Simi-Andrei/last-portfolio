import techieProject from "../assets/images/techieProject.png";
import groceryApp from "../assets/images/groceryApp.png";
import weatherApp from "../assets/images/weatherApp.png";
import vremeaITSchool from "../assets/images/vremeaITSchool.png";
import artiSimi from "../assets/images/artiSimi.png";
import hungryMe from "../assets/images/hungryMe.png";
import firstPortfolio from "../assets/images/firstPortfolio.png";
import abstractLines from "../assets/images/abstractLines.png";
import slackCloneProject from "../assets/images/slackCloneProject.png";
import docsCloneProject from "../assets/images/docsCloneProject.png";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: docsCloneProject,
      title: "NextJS14 Slack Clone",
      description:
        "Developed a real-time collaborative document editing application using Next.js with Convex as the database and Liveblocks for live synchronization. Designed to function as a Google Docs clone, the app supports multi-user editing, real-time presence tracking, threaded comments, and document organization features. Focused on robust backend integration, efficient state management, and seamless user experience in a collaborative environment.",
      stack:
        "NextJS 14, Convex DB, Clerk Authentication, TailwindCSS, Shadcn/ui, Liveblocks, nuqs",
      demo: "https://docs-clone-olive.vercel.app/",
      code: "https://github.com/Simi-Andrei/docs-clone",
    },
    {
      id: 2,
      image: slackCloneProject,
      title: "NextJS14 Slack Clone",
      description:
        "Full stack application created with NextJS14, Convex as a real time database and many different packages and features. You can create workspaces and channels and direct message other members. You can also login and authenticate using credentials, Github provider and Google provider.",
      stack:
        "NextJS 14, Convex DB, TailwindCSS, Shadcn/ui, quill, nuqs, jotai, emoji-picker-react",
      demo: "https://nextjs14-slack-clone.vercel.app/",
      code: "https://github.com/Simi-Andrei/nextj14-slack-clone",
    },
    {
      id: 3,
      image: techieProject,
      title: "techie E-commerce App",
      description:
        "MERN Full Stack E-commerce platform where you can explore different categories, add items to cart and place order. Pay for orders via PayPal and from the admin screens you can mark your order as delivered. As an admin you can also edit and delete products and edit users. (it may take a while for first load if inactive for several hours)",
      stack:
        "MongoDB, Mongoose, ExpressJS, jsonwebtoken, HTML, CSS, Tailwind CSS, JavaScript, React, Redux",
      demo: "https://itschool-techie-project.onrender.com/",
      code: "https://github.com/Simi-Andrei/itschool-mern-techie-project",
    },
    {
      id: 4,
      image: groceryApp,
      title: "Grocery App",
      description:
        "MERN Full Stack app where you can add different products to your list. You can add, edit and delete them. Perfect for when you go shopping and want to make sure you buy everything you need. (it may take a while for first load if inactive for several hours)",
      stack:
        "MongoDB, Mongoose, ExpressJS, HTML, CSS, Tailwind CSS, JavaScript, React, Formik, Yup, Context",
      demo: "https://mern-context-crud-app.onrender.com/",
      code: "https://github.com/Simi-Andrei/mern-context-crud-app",
    },
    {
      id: 5,
      image: weatherApp,
      title: "Weather App",
      description:
        "React App using weather API to search for the current weather and for the next 7 days forecast with different endpoints. Very precise on location and time. (it may take a while for first load if inactive for several hours)",
      stack: "HTML, CSS, Tailwind CSS, JavaScript, React, WeatherAPI",
      demo: "https://react-weather-app-8yy2.onrender.com/",
      code: "https://github.com/Simi-Andrei/react-weather-app",
    },
    {
      id: 6,
      image: firstPortfolio,
      title: "Previous Portfolio Website",
      description:
        "This is my first portfolio. Basic presentation website with dark/light mode which I thought I need to refactor after founding new ways of creating more user-friendly and advanced layouts.",
      stack: "HTML, CSS, Tailwind CSS, JavaScript, React",
      demo: "https://andrei-simigiu-portfolio.netlify.app/",
      code: "https://github.com/Simi-Andrei/my-portfolio",
    },
    {
      id: 7,
      image: vremeaITSchool,
      title: "ITSchool Weather App",
      description:
        "React App created during taking the ITSchool Frontend Development course using weather API to search for the current weather and for the next 5 days forecast with different endpoints. Very precise on location and time. (not live momentarily)",
      stack: "HTML, CSS, Bootstrap, JavaScript, React, WeatherAPI",
      demo: "#home",
      code: "#home",
    },
    {
      id: 8,
      image: artiSimi,
      title: "ArtiSimi Presentation Website",
      description:
        "Basic presentation website with an artistic style. You can search different events near your location such as expositions, concerts and art galleries. (not live momentarily)",
      stack: "HTML, CSS, JavaScript",
      demo: "#home",
      code: "#home",
    },
    {
      id: 9,
      image: hungryMe,
      title: "HungryMe Restaurant Ordering App",
      description:
        "React App developed for placing online order from a fast foodrestaurant. You can browse different categories such as Pizza, Burgers, Soups and not the least, good wines and cakes. (not live momentarily)",
      stack: "HTML, CSS, JavaScript, React",
      demo: "#home",
      code: "#home",
    },
  ];

  const style = {
    transform: `translateX(-${
      activeIndex *
      `${
        window.innerWidth <= 425
          ? 330
          : window.innerWidth <= 768
          ? 340
          : window.innerWidth <= 1024
          ? 468
          : window.innerWidth >= 1440 && 470
      }`
    }px)`,
  };

  return (
    <section
      id="projects"
      className="my-32 bg-gradient-to-tr from-cyan-800 to-slate-950 pt-10 "
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="uppercase text-lg tracking-tighter font-light text-center mb-10 text-stone-50"
      >
        Projects
      </motion.h2>
      <div className="flex items-start justify-end flex-wrap p-2 text-stone-50 pb-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 h-[642px] px-2 md:px-10 flex items-center justify-end order-2 md:order-1"
        >
          <div className="w-full xl:w-1/2 ms-auto min-h-[400px]">
            <h3 className="text-right text-2xl tracking-tighter mb-6">
              {slides[activeIndex].title}
            </h3>
            <div className="min-h-32">
              <p className="text-right text-sm">
                {slides[activeIndex].description}
              </p>
            </div>
            <div className="min-h-20 my-6">
              <p className="text-right text-lg tracking-tighter">Tech stack</p>
              <p className="text-right text-cyan-500 font-bold tracking-tighter">
                {slides[activeIndex].stack}
              </p>
            </div>
            <div className="text-right">
              <a
                href={slides[activeIndex].demo}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 text-stone-50 rounded-md py-2 px-4 text-sm hover:bg-cyan-600 transition-all duration-150 mr-4"
              >
                Live Demo
              </a>
              <a
                href={slides[activeIndex].code}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-950 text-stone-50 rounded-md py-2 px-4 text-sm hover:bg-slate-900 transition-all duration-150"
              >
                Source Code
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 order-1 md:order-2"
        >
          <div className="p-4 flex overflow-hidden h-[580px] items-center">
            {slides.map((slide) => (
              <div
                style={style}
                className="flex items-center justify-center min-w-[330px] md:min-w-[340px] lg:min-w-[468px] xl:min-w-[470] h-[460px] p-6 transition-all duration-500 ease-in-out"
                key={slide.id}
              >
                <div
                  className={`w-full h-full transition-all duration-500 py-4 rounded-2xl relative shadow-md shadow-cyan-950 bg-transparent ${
                    activeIndex === slide.id - 1 &&
                    "scale-110 -translate-y-[20px]"
                  }`}
                >
                  <div>
                    <img
                      src={slide.image}
                      alt="project"
                      className="relative z-10"
                    />
                    <div className="bg-gray-100/60 w-24 h-24 mt-10 relative z-10 mx-auto rounded-full p-1 grid place-items-center">
                      <div className="bg-white w-full h-full rounded-full grid place-items-center p-1">
                        <div className="border border-gray-100 w-full h-full rounded-full grid place-items-center">
                          <p className="text-3xl text-cyan-800 font-bold tracking-tighter cursor-default">
                            AS
                          </p>
                        </div>
                      </div>
                    </div>
                    <img
                      src={abstractLines}
                      alt="abstract"
                      className="absolute bottom-0 left-0 rounded-2xl opacity-90"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => setActiveIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="disabled:opacity-0 disabled:pointer-events-none bg-cyan-400/50 rounded-full p-4 mr-4"
            >
              <BsChevronLeft className="text-3xl" />
            </button>
            <button
              onClick={() => setActiveIndex(activeIndex + 1)}
              disabled={activeIndex === 6}
              className="disabled:opacity-0 disabled:pointer-events-none bg-cyan-400/50 rounded-full p-4 ml-4"
            >
              <BsChevronRight className="text-3xl" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
