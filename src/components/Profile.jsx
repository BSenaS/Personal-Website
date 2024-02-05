import React from "react";
import { useLang } from "../context/LangThemeContext";

export function Profile() {
  const { textData, lang } = useLang();
  const txt = textData[lang].profile;

  return (
    <div className="min-h-320 flex flex-col justify-between mx-4">
      <h2 className="font-medium text-4xl py-4 dark:text-[#AEBCCF]">
        {txt.title}
      </h2>
      <div className="flex flex-wrap justify-between">
        <div className="max-w-md pb-16 flex flex-col justify-between w-full lg:w-1/2">
          <h2 className="font-normal text-2xl py-4 text-[#4338CA] dark:text-[#B7AAFF]">
            {txt.title}
          </h2>
          <div className="flex flex-col ">
            <div className="flex items-center mb-4">
              <strong className="w-1/3 dark:text-white">
                {txt.basicinfo.birthdatekey}:
              </strong>
              <span className=" w-1/2 dark:text-white">
                {txt.basicinfo.birthdate}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <strong className="w-1/3 dark:text-white">
                {txt.basicinfo.locationkey}:
              </strong>
              <span className="w-1/2 dark:text-white">
                {txt.basicinfo.location}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <strong className="w-1/3 dark:text-white">
                {txt.basicinfo.edukey}:
              </strong>
              <span className=" w-1/2 dark:text-white">
                {txt.basicinfo.edu}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <strong className="w-1/3 dark:text-white">
                {txt.basicinfo.rolekey}:
              </strong>
              <span className=" w-1/2 dark:text-white">
                {txt.basicinfo.role}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div>
            <h2 className="py-4 font-normal text-2xl text-[#4338CA] dark:text-[#B7AAFF]">
              {txt.aboutme.title}
            </h2>
            <p className="py-3 text-[##6B7280] text-lg dark:text-white">
              {txt.aboutme.p1}
            </p>
            <p className="py-3 text-[##6B7280] text-lg dark:text-white">
              {txt.aboutme.p2}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr className="border-1 border-[#BAB2E7] my-4" />
      </div>
    </div>
  );
}
