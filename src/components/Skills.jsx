import React from "react";
import { useLang } from "../context/LangThemeContext";
import "./Skills.css";

export function Skills() {
  const { textData, lang } = useLang();
  const txt = textData[lang].skills;
  const logos = [...txt.skillerim, ...txt.skillerim]; // Logoların döngüsünü sağlamak için kopyasını ekledik

  return (
    <div
      id="skills"
      className="max-w-full flex flex-wrap mx-4 mb-4 sm:justify-between sm:mt-16"
    >
      <h1 className="min-w-full text-5xl font-medium mb-8">
        <span className="dark:text-[#AEBCCF]">{txt.title}</span>
      </h1>
      <section className="logos-slide">
        <div className="animate-slide">
          {logos.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 text-center items-center mb-2 mr-6 cursor-pointer"
            >
              <img
                src={skill.icon}
                alt={skill.icon}
                className="w-[80px] h-[80px] rounded-lg"
              />
              <span className="font-medium text-md text-[#4338CA] dark:text-[#B7AAFF]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr className="w-full border-1 border-[#BAB2E7] my-4" />
    </div>
  );
}
