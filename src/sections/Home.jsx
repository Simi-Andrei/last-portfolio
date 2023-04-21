import React from "react";
import heroImage from "../assets/images/heroImage.png";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-between pt-20 md:pt-52 relative flex-wrap"
    >
      <div className="w-full md:w-1/2 text-center order-2 md:order-1">
        <h1 className="mb-4 font-light">
          <span className="text-xl md:text-2xl tracking-tighter">
            Hi there! I'm
          </span>
          <br />
          <span className="uppercase font-bold tracking-tighter text-3xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-md">
            Andrei Simigiu
          </span>
          <br />
          <span className="text-lg md:text-xl tracking-tighter">
            Frontend developer with passion for design
          </span>
        </h1>
        <a
          href="#aboutme"
          className="bg-cyan-800 hover:bg-cyan-700 text-stone-50 py-2 px-6 rounded-md transition-all duration-150 font-light"
        >
          Explore
        </a>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center order-1">
        <img src={heroImage} alt="home" className="w-5/6 brightness-95" />
      </div>
    </section>
  );
};

export default Home;

/* <svg viewBox="0 0 240 80">
  <text x="20" y="35" class="small">
    Welcome
  </text>
</svg>; */
