
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import studentData from "../data/studentsData";

export default function Students() {
    const students = studentData.filter(
        (student) => student.year === "2027"
    );

    console.log("ALL STUDENTS:", studentData);
    console.log("2027 STUDENTS:", students);
    console.log("NUMBER OF 2027 STUDENTS:", students.length);

    return (
        <div>
            <NavBar />
            <br></br>

            <div className="max-w-6xl mx-auto">
                <h1 className="font-bold text-center text-3xl">
                    Trojan Robotics Leadership
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 pt-9 gap-8 pb-4">
                    {students.map((info, index) => (
                        <div
                            key={info.name + index}
                            className="grid grid-cols-1 md:grid-cols-3"
                        >
                            <img
                                className="rounded-lg shadow-2xl h-[185px] w-[185px] object-cover"
                                src={info.imgSrc}
                                alt={info.name}
                            />

                            <div className="md:col-span-2 md:pl-6">
                                <h1 className="font-bold text-xl">
                                    {info.name}
                                </h1>

                                <h1 className="font-bold text-base text-blue-800 pt-1">
                                    {info.title}
                                </h1>

                                <p className="text-gray-700 pt-2">
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
