import CV from "../assets/resume/simigiuAndreiCV.pdf";
import { TbDownload } from "react-icons/tb";

const Header = () => {
  return (
    <div className="py-1 sticky top-0 left-0 bg-stone-50 z-50">
      <nav className="container mx-auto p-2 flex flex-col md:flex-row items-center justify-between font-light">
        <div>
          <a href="#home" className="uppercase tracking-tighter text-xl">
            Andrei Simigiu
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <ul className="flex items-center mt-2 md:mt-0">
            <li className="mr-3">
              <a
                href="#home"
                className="text-sm md:text-base hover:text-black transition-all duration-150"
              >
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                href="#aboutme"
                className="text-sm md:text-base hover:text-black transition-all duration-150"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                href="#experience"
                className="text-sm md:text-base hover:text-black transition-all duration-150"
              >
                Experience
              </a>
            </li>
            <li className="mr-3">
              <a
                href="#projects"
                className="text-sm md:text-base hover:text-black transition-all duration-150"
              >
                Projects
              </a>
            </li>
            <li className="mr-0 md:mr-3">
              <a
                href="#contact"
                className="text-sm md:text-base hover:text-black transition-all duration-150"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href={CV}
            download
            className="flex bg-cyan-800 text-white rounded-md py-1 px-2 text-sm hover:bg-cyan-700 transition-all duration-150 mt-3 md:mt-0"
          >
            <TbDownload className="text-lg mr-1" /> Resume
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
