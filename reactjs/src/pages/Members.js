import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import Memberdata from "../data/Memberdata";
export default function Members() {
let windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
let year=params.get("year");
if (year==null){
    year=new Date().getFullYear();
}
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
                        Memberdata.filter(p => {return p.year==year}).map((info) => {
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
