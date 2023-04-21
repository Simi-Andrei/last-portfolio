import techieProject from "../assets/images/techieProject.png";
import groceryApp from "../assets/images/groceryApp.png";
import weatherApp from "../assets/images/weatherApp.png";
import vremeaITSchool from "../assets/images/vremeaITSchool.png";
import artiSimi from "../assets/images/artiSimi.png";
import hungryMe from "../assets/images/hungryMe.png";
import firstPortfolio from "../assets/images/firstPortfolio.png";
import abstractLines from "../assets/images/abstractLines.png";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      image: weatherApp,
      title: "Weather App",
      description:
        "React App using weather API to search for the current weather and for the next 7 days forecast with different endpoints. Very precise on location and time. (it may take a while for first load if inactive for several hours)",
      stack: "HTML, CSS, Tailwind CSS, JavaScript, React, WeatherAPI",
      demo: "https://react-weather-app-8yy2.onrender.com/",
      code: "https://github.com/Simi-Andrei/react-weather-app",
    },
    {
      id: 4,
      image: firstPortfolio,
      title: "Previous Portfolio Website",
      description:
        "This is my first portfolio. Basic presentation website with dark/light mode which I thought I need to refactor after founding new ways of creating more user-friendly and advanced layouts.",
      stack: "HTML, CSS, Tailwind CSS, JavaScript, React",
      demo: "https://andrei-simigiu-portfolio.netlify.app/",
      code: "https://github.com/Simi-Andrei/my-portfolio",
    },
    {
      id: 5,
      image: vremeaITSchool,
      title: "ITSchool Weather App",
      description:
        "React App created during taking the ITSchool Frontend Development course using weather API to search for the current weather and for the next 5 days forecast with different endpoints. Very precise on location and time. (not live momentarily)",
      stack: "HTML, CSS, Bootstrap, JavaScript, React, WeatherAPI",
      demo: "#home",
      code: "#home",
    },
    {
      id: 6,
      image: artiSimi,
      title: "ArtiSimi Presentation Website",
      description:
        "Basic presentation website with an artistic style. You can search different events near your location such as expositions, concerts and art galleries. (not live momentarily)",
      stack: "HTML, CSS, JavaScript",
      demo: "#home",
      code: "#home",
    },
    {
      id: 7,
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
    transform: `translateX(-${activeIndex * 360}px)`,
  };

  return (
    <section className="my-32">
      <h2 className="uppercase text-lg tracking-tighter font-light text-center my-10">
        Projects
      </h2>
      <div className="flex items-start justify-end">
        <div className="w-1/2 h-[604px] px-10 flex items-center justify-end">
          <div className="w-full md:w-1/2 ms-auto">
            <h3 className="text-right text-xl tracking-tighter mb-6">
              {slides[activeIndex].title}
            </h3>
            <div className="h-32">
              <p className="text-right text-stone-700 text-sm">
                {slides[activeIndex].description}
              </p>
            </div>
            <div className="h-20 mb-6">
              <p className="text-right text-lg tracking-tighter">Tech stack</p>
              <p className="text-right text-cyan-800 font-bold tracking-tighter drop-shadow-sm">
                {slides[activeIndex].stack}
              </p>
            </div>
            <div className="text-right">
              <a
                href={slides[activeIndex].demo}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-800 text-white rounded-md py-2 px-4 text-sm hover:bg-cyan-700 transition-all duration-150 mr-4"
              >
                Live Demo
              </a>
              <a
                href={slides[activeIndex].code}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 text-white rounded-md py-2 px-4 text-sm hover:bg-slate-800 transition-all duration-150"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-10 flex overflow-hidden h-[580px] items-center">
            {slides.map((slide) => (
              <div
                style={style}
                className={`flex items-center justify-center min-w-[360px] h-[520px] p-4 transition-all duration-500 ease-in-out ${
                  activeIndex === slide.id - 1 && "scale-150"
                }`}
                key={slide.id}
              >
                <div
                  className={`w-full h-full transition-all duration-500 px-2 py-6 rounded-2xl relative shadow-md shadow-grey-200 ${
                    activeIndex === slide.id - 1 &&
                    "scale-105 -translate-y-[12px]"
                  }`}
                >
                  <div>
                    <img
                      src={slide.image}
                      alt="project"
                      className="rounded-xl"
                    />
                    <img
                      src={abstractLines}
                      alt=""
                      className="absolute bottom-0 left-0 rounded-2xl"
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
              className="disabled:opacity-0 disabled:pointer-events-none bg-stone-100/100 rounded-full p-4 mr-4 shadow-sm shadow-stone-200"
            >
              <BsChevronLeft className="text-3xl" />
            </button>
            <button
              onClick={() => setActiveIndex(activeIndex + 1)}
              disabled={activeIndex === 6}
              className="disabled:opacity-0 disabled:pointer-events-none bg-stone-100/100 rounded-full p-4 ml-4 shadow-sm shadow-stone-200"
            >
              <BsChevronRight className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
