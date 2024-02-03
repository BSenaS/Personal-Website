import React from "react";
import { useLang } from "../context/LangThemeContext";

export function Profile() {
  const { textData, lang } = useLang();
  const txt = textData[lang].profile;

  return (
    <div className="min-h-320 flex flex-col justify-between mx-4">
      <h2 className="font-medium text-4xl py-4">{txt.title}</h2>
      <div className="flex flex-wrap justify-between">
        <div className="max-w-md pb-16 flex flex-col justify-between w-full lg:w-1/2">
          <h2 className="font-normal text-2xl py-4 text-[#4338CA]">
            {txt.title}
          </h2>
          <div className="flex flex-col ">
            <div className="flex items-center mb-4">
              <strong className="pr-2">{txt.basicinfo.birthdatekey}:</strong>
              <span>{txt.basicinfo.birthdate}</span>
            </div>
            <div className="flex items-center mb-4">
              <strong className="pr-2">{txt.basicinfo.locationkey}:</strong>
              <span>{txt.basicinfo.location}</span>
            </div>
            <div className="flex items-center mb-4">
              <strong className="pr-2">{txt.basicinfo.edukey}:</strong>
              <span>{txt.basicinfo.edu}</span>
            </div>
            <div className="flex items-center mb-4">
              <strong className="pr-2">{txt.basicinfo.rolekey}:</strong>
              <span>{txt.basicinfo.role}</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div>
            <h2 className="py-4 font-normal text-2xl text-[#4338CA]">
              {txt.aboutme.title}
            </h2>
            <p className="py-3 text-[##6B7280] text-lg">{txt.aboutme.p1}</p>
            <p className="py-3 text-[##6B7280] text-lg">{txt.aboutme.p2}</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr className="border-1 border-[#BAB2E7] my-4" />
      </div>
    </div>
  );
}
