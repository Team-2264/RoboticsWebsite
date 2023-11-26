import React from "react";
import NavBar from "../components/NavBar";

export default function MentorsAndCoaches() {
    const mentors = [
        {
            name: "Nira Rajan",
            title: "Head Coach",
            desc: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
            imgSrc: "/mentorImages/headCoach.jpg"
        },
        {
            name: "Satish Nayak",
            title: "Assistant Coach",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/mentorImages/assistantCoach.jpg"
        },
        {
            name: "Robyn Bjella",
            title: "Assistant Coach",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/mentorImages/assistantCoachTwo.jpg"
        },
        {
            name: "Rob Simon",
            title: "Software and Mechanical Mentor",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/mentorImages/rob_simon.jpg"
        }

    ]
    return (
        <div className>
            <NavBar />
            <br></br>
            <div>
                <div >
                    <h1 className="font-bold text-center text-3xl">Coaches and Mentors</h1>
                </div>
                <div className="grid grid-cols-1 gap-8 lg: grid-cols-2 pt-8">
                {/* <div className="grid grid-cols-1"> */}

                    {
                        mentors.map((info) => {
                            return (
                                <div className="">
                                    <div className="grid grid-cols-3 gap-6 pt-8">

                                        <div class="aspect-w-3 aspect-h-4 h-0">
                                            <img className="rounded-lg w-full h-f shadow-2xl" src={info.imgSrc} />
                                        </div>
                                        <div className="col-span-2">
                                            <h1 className="font-bold text-2xl">{info.name}</h1>
                                            <h1 className="text-blue-800 text-base">{info.title}</h1>
                                            <h1 className="text-gray-700 text-xs">{info.desc}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}