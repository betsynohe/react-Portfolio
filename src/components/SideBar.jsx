import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Perfil from '../assets/images/my-perfil.jpg'

const SideBar = () => {
    const [select, setSelect] = useState(0);
  
    const scroll = (section) => {
      if (section === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
  
    return (
      <div className="flex-none hidden lg:block  bg-black h-screen min-w-[25%] fixed ">
        <div className="nav flex  text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden">
          <div data-aos="slide-down">
            <NavLink to={"/activity"}>
              <img
                src={Perfil}
                alt="Betsy guitian"
                title="Discord Activity"
                className="rounded-full border-solid cursor-pointer  border-[8px] border-stone-600 min-h-fit mx-auto  max-w-[190px]"
              />
              <h3 className="text-white name py-4 font-medium ">
                Betsy Guitian
              </h3>
            </NavLink>
          </div>
          <NavLink
            to="#"
            onClick={() => {
              setSelect(0);
              scroll("#");
            }}
            className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 0 ? "text-blue-600 " : ""
            }`}
            data-aos="slide-right"
            data-aos-delay="200"
          >
            Home
          </NavLink>
          <NavLink
            to="#about"
            onClick={() => {
              setSelect(1);
              scroll("about");
            }}
            className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 1 ? "text-blue-600 " : ""
            }`}
            data-aos-delay="600"
            data-aos="slide-left"
          >
            Sobre mi
          </NavLink>
          <NavLink
            to="#resume"
            onClick={() => {
              setSelect(2);
              scroll("resume");
            }}
            className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 2 ? "text-blue-600 " : ""
            }`}
            data-aos="slide-right"
            data-aos-delay="1000"
          >
            Mis conocimientos
          </NavLink>
          <NavLink
            to="#projects"
            onClick={() => {
              setSelect(3);
              scroll("projects");
            }}
            className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 3 ? "text-blue-600 " : ""
            }`}
            data-aos="slide-left"
            data-aos-delay="1400"
          >
            Projectos
          </NavLink>
          <NavLink
            to="#contact"
            onClick={() => {
              setSelect(4);
              scroll("contact");
            }}
            className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 4 ? "text-blue-600 " : ""
            }`}
            data-aos="slide-right"
            data-aos-delay="1800"
          >
            Contacto
          </NavLink>
        </div>
        <div
          className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
          data-aos="slide-up"
          data-aos-delay="2300"
        >
          <div
            title="Github"
            onClick={() =>
              window.open("https://github.com/daniel-jebarson", "_blank")
            }
          >
            <FaGithub className="cursor-pointer hover:scale-105" />
          </div>
          <div
            title="Linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/daniel-jebarson-k-a727a822a",
                "_blank"
              )
            }
          >
            {" "}
            <FaLinkedin className="cursor-pointer hover:scale-105" />
          </div>
        </div>
      </div>
    );
  }
  
  export default SideBar;
