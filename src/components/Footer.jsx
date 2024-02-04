import React from "react";
import { useLang } from "../context/LangThemeContext";

export function Footer() {
  const { textData, lang } = useLang();
  const txt = textData[lang].footer;
  return (
    <div>
      <div className="max-w-6xl justify-center mx-auto py-20">
        <div className="text-4xl font-semibold	max-w-[540px] leading-tight flex-wrap mb-8">
          {txt.title}
        </div>
        <div className="flex justify-between flex-wrap ">
          <div className="inline-flex mb-4">
            <span className="mr-2">👉</span>
            <a
              href="mailto:batuhansenasert@gmail.com"
              className="font-medium text-[#AF0C48] text-xl underline"
            >
              {txt.links.email}
            </a>
          </div>
          <div className="inline-flex flex-wrap gap-x-4">
            <a
              href="https://twitter.com/berserkFan_"
              className="font-medium text-lg"
            >
              {txt.links.blog}
            </a>
            <a
              href="https://github.com/BSenaS"
              className="font-medium text-lg text-[#00AB6B]"
            >
              {txt.links.git}
            </a>
            <a
              href="https://www.linkedin.com/in/bssert/"
              className="font-medium text-lg text-[#0077B5]"
            >
              {txt.links.linkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
