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
            desc: "Satish is a project manager at Medtronic and enjoys helping make improvements to streamline this team. He was a pivotal driver in raising funds last year, allowing the team to attend Houston.",
            imgSrc: "/mentorImages/assistantCoach.jpg"
        },
        {
            name: "Robyn Bjella",
            title: "Assistant Coach",
            desc: "This is the third year Robyn has been with the team and is a pivotal driver in this team's outreach. In her spare time Robyn loves to volunteer for the school district and design buildings.",
            imgSrc: "/mentorImages/assistantCoachTwo.jpg"
        },
        {
            name: "Rob Simon",
            title: "Software and Mechanical Mentor",
            desc: "Rob is a legacy mentor and enjoys spending time with students and teaching them new things. Rob is also a engineer in the industry and this year he was pivotal to helping us build our new robot cart from a old stretcher bed.",
            imgSrc: "/mentorImages/rob_simon.jpg"
        },
        {
            name: "Nate Peterson",
            title: "Electrical & Programming Mentor",
            desc: "Nate has been with the team for a very long time and has been the driving force of the team's software and electrtical success. He has always been there to bridge the knowledge gap of outgoing and new members year after year.",
            imgSrc: "/mentorImages/natePeterson.jpg"
        },
        {
            name: "Brian Bierman",
            title: "Mechanical Mentor",
            desc: "Brian has been with the team for a very long time and has always been instrumental for us getting a functioning robot produced and in a timley mannger. Fun fucat: his daugher was the head captain of this team when she was in high school!",
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
            desc: "Arun has been with Trojan Robotics for 5 years now. He is a mechanical engineer and enjoys building and fabricating. In his spare time he enjoys spending time with his two boys outside! ",
            imgSrc: "/mentorImages/arulRajan.jpg"
        },
        {
            name: "Dilshan Rajan",
            title: "Mechanical and Electrical Mentor",
            desc: "Dilshan is a neuroscience student at the University of Minnesota Twin Cities. He was the former head captain of this team and enjoys building and working with heavy machinery.",
            imgSrc: "/mentorImages/dilshanRajan.jpg"
        },
        {
            name: "Dipesh Panchal",
            title: "Programming and Website Mentor",
            desc: "Dipesh has been mentoring with FIRST for four years and is now with us for robotics. Outside of robotics he loves spending time with his family and microcontrollers.",
            imgSrc: "/mentorImages/dipeshPanchal.jpg"
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
                <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-8 pb-4 sm:justify-center">

                    {
                        mentors.map((info) => {
                            return (
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    <img className="aspect-square rounded-lg h-[185px] w-[185px]" src={info.imgSrc} />
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