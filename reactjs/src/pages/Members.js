import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import Memberdata from "../data/Memberdata";
export default function Members() {
    // const members = [
    //     {
    //         name: "Evan Kropp",
    //         title: "Senior, Mechanical Team",
    //         desc: "Evan does occasional programming projects and his favorite subject is math. He is majoring in computer science next year.",
    //         imgSrc: "/studentImages/evanKropp.jpg"
    //     },
    //     {
    //         name: "Jake Deininger",
    //         title: "Senior, Programming Team",
    //         desc: "Jake enjoys creating things with computers and plans on majoring in computer engineering.",
    //         imgSrc: "/studentImages/jakeDeininger.jpg"
    //     },
    //     {
    //         name: "Jennifer (Sieun) Sung",
    //         title: "Junior, Programming Team",
    //         desc: "Jennifer loves to inspire and encourage people to join STEM.",
    //         imgSrc: "/studentImages/jenniferSung.JPG"
    //     },
    //     {
    //         name: "Axel Johnson",
    //         title: "Sophomore, Mechanical Team",
    //         desc: "Some of Axel's interests include math, science, and engineering, and he enjoys working on complex projects. Axel hopes to end up in a career like mechanical or electrical engineering. ",
    //         imgSrc: "/studentImages/axelJohnson.jpg"
    //     },
    //     {
    //         name: "Akshath Mahesh",
    //         title: "Sophomore, Mechanical Team",
    //         desc: "Akshath is into building things and enjoys hands-on work. Akshath's dream is to build something that’ll make everyone’s life easier!",
    //         imgSrc: "/studentImages/akshathMahesh.jpg"
    //     },
    //     {
    //         name: "Hayden Tretter",
    //         title: "Sophomore, Mechanical Team",
    //         desc: "Hayden uses his 3D printer to do Maker projects, and he wants to go into mechanical engineering.",
    //         imgSrc: "/studentImages/haydenTretter.jpg"
    //     },
    //     {
    //         name: "Mohan Atkuri",
    //         title: "Sophomore, Programming Team",
    //         desc: "Mohan thoroughly enjoys computer science and taekwondo, and aspires to become either a computational biologist, a neurosurgeon, or an electrical engineer. He's also a big fan of donuts and sparkling water.",
    //         imgSrc: "/studentImages/mohanAtkuri.jpg"
    //     },
    //     {
    //         name: "Naman Brahmbhatt",
    //         title: "Sophomore, Mechanical Team",
    //         desc: "Naman is a black belt in karate and snowboards in his free time. He wants to major in mechanical engineering.",
    //         imgSrc: "/studentImages/namanBrahmbhatt.jpg"
    //     },
    //     {
    //         name: "Noah Erikson",
    //         title: "Sophomore, Mechanical Team",
    //         desc: "Noah loves all things coding, 3d modeling, 3d printing, electronics, and mechanics. He hopes to become a mechanical, electrical, or computer engineer. Outside of school he does karate, he's a first degree black belt and teaches classes as well.",
    //         imgSrc: "/studentImages/noahErikson.jpg"
    //     },
    //     {
    //         name: "Pughazhendhi (Pugar) Saravanan",
    //         title: "Sophomore, Mechanical Team",
    //         desc: "As an engineer at heart, Pugar loves anything physics, chemistry, and working with his hands.",
    //         imgSrc: "/studentImages/pugarSaravanan.jpg"
    //     },
    //     {
    //         name: "Ricky Sala",
    //         title: "Sophomore, Programming Team",
    //         desc: "Ricky enjoys programming, playing video games, and making pixel arts. He is currently considering a career in computer science. ",
    //         imgSrc: "/studentImages/rickySala.jpg"
    //     },
    //     {
    //         name: "Shubham Panchal",
    //         title: "Freshman, Mechanical Team",
    //         desc: "Ever since Shubham was young he's loved robotics and problem solving. He hopes to be a mechanical engineer, designing products for the future. Shubham is also part of the math team, Science Olympiad, and Science Bowl clubs.",
    //         imgSrc: "/studentImages/shubhamPanchal.jpg"
    //     },
    //     {
    //         name: "Sreya Divakauni",
    //         title: "Freshman, Marketing Team",
    //         desc: "This is Sreya's 5th year doing robotics and ever since she started she has always loved making and working with robots.",
    //         imgSrc: "/studentImages/sreyaDivakauni.jpg"
    //     },
        


    // ]
    return (
        <div>
            <NavBar />
            <br></br>
            <div className="max-w-6xl mx-auto">
                <div >
                    <h1 className="font-bold text-center text-3xl">Members</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-8 pb-4">

                    {
                        Memberdata.map((info) => {
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
