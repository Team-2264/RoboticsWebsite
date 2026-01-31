import React from "react";
import timelineData from "../data/timelineData";

export default function Timeline() {
  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;

  // Function to extract year from any date string
  const getYear = (dateStr) => {
    const match = dateStr.match(/\d{4}/); // find 4-digit number
    return match ? parseInt(match[0], 10) : null;
  };

  const filteredData = timelineData.filter((item) => {
    const year = getYear(item.date);
    return year === currentYear || year === previousYear;
  });

  return (
    <div className="flex flex-col bg-white mx-auto px-5">
      <h1 className="font-bold text-4xl text-yellow-500 mb-10">
        What We've Been Up To:
      </h1>

      <div className="flex overflow-x-auto pb-10">
        <div className="flex flex-nowrap gap-12">
          {filteredData.map((item, index) => (
            <div key={index} className="w-80 shrink-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full sm:ring-8 ring-white">
                  <div className="w-2.5 h-2.5 bg-blue-300 rounded-full" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5" />
              </div>

              <div className="mt-3">
                <h3 className="text-lg font-semibold text-blue-900">
                  {item.title}
                </h3>
                <time className="block mb-2 text-sm text-gray-400">
                  {item.date}
                </time>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
          {filteredData.length === 0 && (
            <p className="text-gray-500">No events for this year or last year.</p>
          )}
        </div>
      </div>
    </div>
  );
}








