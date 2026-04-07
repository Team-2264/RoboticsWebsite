import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import mentors from "../data/MentorAndCoachesData";

export default function MentorsAndCoaches() {
  const params = new URLSearchParams(window.location.search);
  let year = params.get("year");

  if (!year) {
    year = new Date().getFullYear().toString();
  }

  return (
    <div>
      <NavBar />

      <div className="max-w-6xl mx-auto px-4 pt-8">
        <h1 className="font-bold text-center text-3xl">
          Coaches and Mentors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {mentors
            .filter(p => p.year === year)
            .map((info, index) => (
              <div
                key={`${info.name}-${index}`}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
              >
                <img
                  className="rounded-lg h-[185px] w-[185px] aspect-square mx-auto md:mx-0"
                  src={info.imgSrc}
                  alt={info.name}
                />

                <div className="md:col-span-2 md:pl-6 text-center md:text-left">
                  <h2 className="font-bold text-xl">{info.name}</h2>
                  <h3 className="font-bold text-base text-blue-800 pt-1">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-700 pt-4">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
