import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
export default function MentorsAndCoaches() {
    const mentors = [
        {
            name: "Nira Rajan",
            title: "Head Coach",
            desc: "Nira has been mentoring with the team for 5 years now, and is now the head coach! Outside of robotics she loves spending time outdoors with her boys!",
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
        },
        {
            name: "Nate Peterson",
            title: "Electrical & Programming Mentor",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/mentorImages/natePeterson.jpg"
        },
        {
            name: "Brian Bierman",
            title: "Mechanical Mentor",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/mentorImages/brianBierman.jpg"
        },
        {
            name: "Jenny Zeroni",
            title: "Marketing and Mechanical Mentor",
            desc: "Jenny is a vice president at a medical device startup, and enjoys fabricating various different innovations. This is her fourth year with the team and is a key part in our marketing team's success.",
            imgSrc: "/mentorImages/jennyZeroni.jpg"
        },
        {
            name: "Mahima Nayak",
            title: "Outreach and Marketing Mentor",
            desc: "Mahima is an IT professional working at Medtronic. This is her second year working with FIRST robotics, and she enjoy working with creative individuals who think outside the box and learn throuh their experiences.",
            imgSrc: "/mentorImages/mahimaNayak.jpg"
        },
        {
            name: "Arul Rajan",
            title: "Mechanical Mentor",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/mentorImages/arulRajan.jpg"
        },
        {
            name: "Dilshan Rajan",
            title: "Mechanical and Electrical Mentor",
            desc: "Dilshan is a neuroscience student at the University of Minnesota Twin Cities. He was the former head captain of this team and enjoys building and working with heavy machinery.",
            imgSrc: "/mentorImages/dilshanRajan.jpg"
        },

    ]
    return (
        <div className>
            <NavBar />
            <br></br>
            <div>
                <div >
                    <h1 className="font-bold text-center text-3xl">Coaches and Mentors</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-8 pb-4 sm:justify-center">

                    {
                        mentors.map((info) => {
                            return (
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    <img className="rounded-lg h-[185px] w-[185px]" src={info.imgSrc} />
                                    <div className="md:col-span-2 md:pl-6">
                                        <h1 className="font-bold text-xl">{info.name}</h1>
                                        <h1 className="font-bold text-base text-blue-800 pt-1">{info.title}</h1>
                                        <p className="font-xs text-gray-700 pt-4">{info.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}