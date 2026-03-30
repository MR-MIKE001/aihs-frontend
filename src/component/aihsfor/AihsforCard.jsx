import React from "react";
import AihsIcon from "./AihsIcon";

const infoData = [
  {
    title: "Housing Policy",
    detail:
      "National and regional housing policies, regulations, and initiatives that impact the housing industry.",
    icon: "house",
  },
  {
    title: "Real Estate Investment",
    detail:
      "Trends and opportunities in real estate investment, including residential, commercial, and mixed-use projects.",
    icon: "estate",
  },
  {
    title: "Building Innovation",
    detail:
      "Innovative building techniques, sustainable construction practices, and advancements in architectural design.",
    icon: "building",
  },
  {
    title: "Youth & Future",
    detail:
      "Engaging the next generation of housing professionals and exploring the future of housing in Africa.",
    icon: "youth",
  },
];

function AihsforCard() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:pl-8  sm:grid-cols-2 lg:grid-cols-4 md:gap-55 md:gap-y-10">
      {infoData.map((item, index) => (
        <div
          key={index}
          className="flex w-[200px] flex-col items-start gap-4 rounded-lg bg-gray-300 px-4 py-6 text-sm text-gray-300 shadow-md sm:max-w-sm md:max-w-none"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
            <AihsIcon icon={item.icon} />
          </div>
          <div>
            <p className="text-base font-semibold text-gray-800">
              {item.title}
            </p>
            <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AihsforCard;
