import React from "react";
import { useLang } from "../context/LangThemeContext";
import insta from "../assets/instaPP.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  const { textData, lang } = useLang();
  const txt = textData[lang].introduction;
  //To write objects in to type-animation i had to use variable names.
  const fullDev = txt.greeting3;
  const frontDev = txt.greeting4;
  const backDev = txt.greeting5;
  return (
    <div className="flex flex-wrap  justify-between mx-4 mb-4 grow">
      {/* Left Div */}
      <div className="w-full sm:max-w-1/2 sm:max-h-96 flex ">
        <div className="flex flex-col justify-between">
          <div className="flex-wrap">
            <span className="text-4xl font-semibold dark:text-[#aebccf]">
              {txt.greeting1}
            </span>
          </div>
          <div className="flex-wrap">
            <span className="text-5xl font-semibold leading-normal dark:text-[#aebccf]">
              {txt.greeting2}
            </span>
          </div>
          <div className="flex-wrap">
            {/* Animated typewriter */}
            <TypeAnimation
              sequence={[frontDev, 1000, backDev, 1000, fullDev, 1000]}
              speed={50}
              className="text-2xl dark:text-[#aebccf]"
              repeat={Infinity}
            />
          </div>
          <div>
            <span className="text-[#777] dark:text-white ">{txt.p1}</span>
          </div>
          <div className="flex flex-col ">
            <div className="flex items-center flex-wrap justify-center gap-2 sm:justify-start py-4 sm:py-0">
              <a
                className="text-[#3730A3] border rounded-md px-6 py-2 text-lg font-medium dark:text-[#E1E1FF] dark:bg-[#E1E1FF]"
                href="mailto:batuhansenasert@gmail.com"
              >
                <span className="dark:text-[#000000]">{txt.iletişim1}</span>
              </a>

              <a
                href="https://github.com/BSenaS"
                target="blank"
                className="text-[#3730A3] border rounded-md px-6 py-2 text-lg font-medium ml-2 flex items-center dark:bg-[#383838]"
              >
                <FaGithub className="mr-2 dark:text-[#BAB2E7]" size={17} />
                <span className="dark:text-[#E1E1FF]">{txt.iletişim2}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bssert/"
                target="blank"
                className="text-[#3730A3] border rounded-md px-6 py-2 text-lg font-medium ml-2 flex items-center dark:bg-[#383838]"
              >
                <FaLinkedinIn className="mr-2 dark:text-[#BAB2E7]" size={17} />
                <span className="dark:text-[#E1E1FF]">{txt.iletişim3}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Right Div */}
      <div className="flex mx-auto lg:mr-0 py-4 sm:py-0 ">
        <img
          src={insta}
          alt="instaPP"
          className="max-w-lg max-h-96 rounded-2xl  object-contain"
        />
      </div>
    </div>
  );
}
