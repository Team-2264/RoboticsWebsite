import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

export default function Members() {
    const mentors = [
        {
            name: "Axel Johnson",
            title: "Sophomore",
            imgSrc: "/studentImages/axelJohnson.jpg"
        },
        {
            name: "Evan Kropp",
            title: "Senior",
            imgSrc: "/StudentImages/evanKropp.jpg"
        },
        {
            name: "Jake Deininger",
            title: "Senior",
            imgSrc: "/studentImages/jakeDeininger.jpg"
        },
        {
            name: "Jennifer (Sieun) Sung",
            title: "Junior",
            imgSrc: "/studentImages/jenniferSung.JPG"
        },
        {
            name: "Akshath Mahesh",
            title: "Sophomore",
            imgSrc: "/studentImages/akshathMahesh.jpg"
        },
        {
            name: "Hayden Tretter",
            title: "Sophomore",
            imgSrc: "/studentImages/haydenTretter.jpg"
        },
        {
            name: "Mohan Atkuri",
            title: "Sophomore",
            imgSrc: "/studentImages/mohanAtkuri.jpg"
        },
        {
            name: "Naman Brahmbhatt",
            title: "Sophomore",
            imgSrc: "/studentImages/namanBrahmbhatt.jpg"
        },
        {
            name: "Noah Erikson",
            title: "Sophomore",
            imgSrc: "/studentImages/noahErikson.jpg"
        },
        {
            name: "Pughazhendhi (Pugar) Saravanan",
            title: "Sophomore",
            imgSrc: "/studentImages/pugarSaravanan.jpg"
        },
        {
            name: "Ricky Sala",
            title: "Sophomore",
            imgSrc: "/studentImages/rickySala.jpg"
        },
        {
            name: "Shubham Panchal",
            title: "Freshman",
            imgSrc: "/studentImages/shubhamPanchal.jpg"
        },
        {
            name: "Sreya Divakauni",
            title: "Freshman",
            imgSrc: "/studentImages/sreyaDivakauni.jpg"
        },
        


    ]
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