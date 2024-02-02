import React from "react";
import { useLang } from "../context/LangThemeContext";
import insta from "../assets/instaPP.jpg";
export function Hero() {
  const { textData, lang } = useLang();
  const txt = textData[lang].introduction;
  return (
    <div className="max-w-full	flex flex-wrap  justify-between mx-4 mb-4">
      {/* Left Div */}
      <div className="max-w-1/2 max-h-96 flex ">
        <div className="min-h-full flex flex-col justify-between">
          <div className="flex-wrap">
            <span className="text-4xl font-semibold ">{txt.greeting1}</span>
          </div>
          <div className="flex-wrap">
            <span className="text-5xl font-semibold leading-normal">
              {txt.greeting2}
            </span>
          </div>
          <div className="flex-wrap">
            <span className="text-2xl">{txt.greeting3}</span>
          </div>
          <div>
            <span className="text-[#777]">{txt.p1}</span>
          </div>
          <div className="min-h-min flex flex-col ">
            <div className="flex items-center">
              <a
                className="text-[#3730A3] border rounded-md px-6 py-2 text-lg font-medium "
                href="mailto:batuhansenasert@gmail.com"
              >
                {txt.iletişim1}
              </a>

              <a
                href="https://github.com/BSenaS"
                target="blank"
                className="text-[#3730A3] border rounded-md px-6 py-2 text-lg font-medium ml-2"
              >
                {txt.iletişim2}
              </a>
              <a
                href="https://www.linkedin.com/in/bssert/"
                target="blank"
                className="text-[#3730A3] border rounded-md px-6 py-2 text-lg font-medium ml-2"
              >
                {txt.iletişim3}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Right Div */}
      <div>
        <img
          src={insta}
          alt="instaPP"
          className="max-w-lg max-h-96 rounded-2xl object-contain flex flex-wrap"
        />
      </div>
    </div>
  );
}
