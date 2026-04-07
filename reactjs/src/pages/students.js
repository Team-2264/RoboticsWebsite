import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import studentData from "../data/studentsData";

export default function Students() {
  const params = new URLSearchParams(window.location.search);
  const year = Number(params.get("year")) || new Date().getFullYear();

  return (
    <div>
      <NavBar />
      <br />

      <div className="max-w-6xl mx-auto">
        <h1 className="font-bold text-center text-3xl">
          Trojan Robotics Student Members
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-9 gap-8 pb-4">
          {studentData
            .filter((p) => Number(p.year) === year)
            .map((info) => (
              <div
                key={info.name}
                className="grid grid-cols-1 md:grid-cols-3"
              >
                <img
                  className="rounded-lg shadow-2xl h-[185px] w-[185px]"
                  src={info.imgSrc}
                  alt=""
                />

                <div className="md:col-span-2 md:pl-6">
                  <h1 className="font-bold text-xl">{info.name}</h1>
                  <h1 className="font-bold text-base text-blue-800 pt-1">
                    {info.title}
                  </h1>
                  <p className="font-xs text-gray-700 pt-2">
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
