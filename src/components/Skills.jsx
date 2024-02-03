import React from "react";
import { useLang } from "../context/LangThemeContext";

export function Skills() {
  const { textData, lang } = useLang();
  const txt = textData[lang].skills;
  return (
    <div className="max-w-full flex flex-wrap mx-4 mb-4 justify-between">
      <h1 className="min-w-full pt-16 text-5xl font-medium mb-8">
        {txt.title}
      </h1>
      {txt.skillerim.map((skill, index) => {
        return (
          <div key={index} className="flex flex-wrap flex-col max-w-72 ">
            <h2 className="font-medium text-3xl text-[#4338CA] pb-4">
              {skill.name}
            </h2>
            <p className="text-sm pb-4 text-[#6B7280]">{skill.desc}</p>
          </div>
        );
      })}
      <div className="w-full">
        <hr className="border-1 border-[#BAB2E7] my-4" />
      </div>
    </div>
  );
}
