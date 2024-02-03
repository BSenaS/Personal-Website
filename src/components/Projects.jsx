import React from "react";
import { useLang } from "../context/LangThemeContext";

export function Projects() {
  const { textData, lang } = useLang();
  const txt = textData[lang].projects;
  const filteredProjects = [txt.project1, txt.project2, txt.project3];
  return (
    <div className="mx-4">
      <div className="text-5xl py-8">{txt.title}</div>
      <div className="flex justify-between">
        {filteredProjects.map((item, index) => {
          return (
            <div key={index} className="flex flex-col max-w-[300px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-[300px] h-[180px]"
              />
              <span className="text-3xl text-[#4338CA] py-4">{item.title}</span>
              <span className="text-sm text-[#6B7280] mb-4">{item.p1}</span>
              <div className="flex flex-row flex-wrap justify-between">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-6 py-1 text-[#3730A3] mb-2 border border-solid rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-row justify-between mt-4">
                <a
                  href="https://github.com/bsenas"
                  className="text-[#3730A3] font-medium underline"
                  target="blank"
                >
                  {item.links.git}
                </a>
                <a
                  href="https://github.com/bsenas"
                  className="text-[#3730A3] font-medium underline"
                  target="blank"
                >
                  {item.links.redirect}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
