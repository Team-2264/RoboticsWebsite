import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
export default function MentorsAndCoaches() {
let windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
let year=params.get("year");
if (year==null){
    year=new Date().getFullYear();
    }
    const mentors = [
        {
            name: "Nira Rajan",
            title: "Head Coach",
            desc: "Nira is currently the head coach, She is very committed to the team and has been with the team for 7 years. Other then being in robotics she loves to garden, cook, bake, and spend time with her family!",
            imgSrc: "/mentorImages/headCoach.jpg",
            year: "2025"
        },
        {
            name: "Robyn Bjella",
            title: "Assistant Coach",
            desc: "This is the third year Robyn has been with the team and is a pivotal driver in this team's outreach. In her spare time Robyn loves to volunteer for the school district and design buildings.",
            imgSrc: "/mentorImages/assistantCoachTwo.jpg",
            year: "2024"
        },
        {
            name: "Satish Nayak",
            title: "Assistant Coach",
            desc: "Satish is a project manager at Medtronic and enjoys helping make improvements to streamline this team. Satish also likes to help the students explore using different tools.",
            imgSrc: "/mentorImages/assistantCoach.jpg",
            year: "2025"
        },
        {
            name: "Raj Rajan",
            title: "Assistant Coach",
            desc: "Raj has been with Trojan Robotics for 7 years now. He is a mechanical engineer and enjoys building the robot with students!",
            imgSrc: "/mentorImages/arulRajan.jpg",
            year: "2025"
        },
        {
            name: "Rob Simon",
            title: "Software and Mechanical Mentor",
            desc: "Rob is a legacy mentor and enjoys spending time with students and teaching them new things. Rob is also a engineer in the industry and help the students navigate through CAD.",
            imgSrc: "/mentorImages/rob_simon.jpg",
            year: "2025"
        },
        {
            name: "Nate Peterson",
            title: "Electrical & Programming Mentor",
            desc: "Nate has been a driving force for the team's software and electrical success for many years. He has always been there to bridge the knowledge gap of outgoing and new members year after year.",
            imgSrc: "/mentorImages/natePeterson.jpg",
            year: "2025"
        },
        {
            name: "Brian Bierman",
            title: "Mechanical Mentor",
            desc: "Brian has been intrumental to our team for several years. In helping students create a functioning robot in a timely manner.",
            imgSrc: "/mentorImages/brianBierman.jpg",
            year: "2025"
        },
        {
            name: "Jenny Zeroni",
            title: "Marketing Mentor",
            desc: "Jenny is the VP of Engineering and Operations at Venturemed Group. She has been with this team for four years, and is very instumental in helping the marketing team fundraise for money.",
            imgSrc: "/mentorImages/jennyZeroni.jpg",
            year: "2025"
        },
        {
            name: "Mahima Nayak",
            title: "Outreach Mentor",
            desc: "Mahima is a software engineer at Medtonic. This is her second year helping Trojan Robotics, and she has been influential in maintaining the outreach team.",
            imgSrc: "/mentorImages/mahimaNayak.jpg",
            year: "2025"
        },
        {
            name: "Dilshan Rajan",
            title: "Mechanical, Electrical, and Marketing Mentor",
            desc: "Dilshan is a junior at the UMN majoring in physiology and psychology. In the future, he plans to do an MD/PhD in biomedical engineering. He was the former head captain of this team and continues to come back and passionately mentors students.",
            imgSrc: "/mentorImages/dilshanRajan.jpg",
            year: "2025"
        },
        {
            name: "Dipesh Panchal",
            title: "Website and Programming Mentor",
            desc: "Dipesh has been an instumental FLL, FRC, and FTC Coach for 7+ years. Dipesh has been a master behind creating the fabulous webpage for Trojan Robotics. Outside of robotics he loves spending time with his family.",
           imgSrc: "/mentorImages/dipeshPanchal.JPG",
           year: "2025"
        },


    ]
    return (
        <div>
            <NavBar />
            <br></br>
            <div className="max-w-6xl mx-auto">
                <div >
                    <h1 className="font-bold text-center text-3xl">Coaches and Mentors</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-8 pb-4">

                    {
                        mentors.map((info) => {
                            return (
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    <img className="rounded-lg h-[185px] w-[185px] aspect-square" src={info.imgSrc} />
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