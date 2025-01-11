import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import OutReachData from "../data/OutReachData"
export default function OutReach() {
let windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
let year=params.get("year");
if (year==null){
    year=new Date().getFullYear();
}
    return (
        <div>
            <NavBar />
            <div>
                <h1 className="text-center font-bold text-2xl pt-4 pb-6">Community Outreach Blog</h1>
                {
                    OutReachData.filter(p => {return p.year==year}).map((blog) => {
                        return (
                            <div className="max-w-lg mx-auto">
                                <h1 className="text-center font-bold text-xl text-trojan-blue">{blog.blogName}</h1>
                                <div className=" pb-4  py-12 px-4 md:flex md:items-center md:justify-between lg:px-8">
                                    <h1 className="text-sm">{`By: ${blog.author}`}</h1>
                                    <h1 className="text-sm">{blog.date}</h1>
                                </div>
                                {/* <div className="h-[300px] overflow-hidden rounded-lg shadow-xl">
                                    <img
                                        src={blog.imgSrc}
                                    />
                                </div> */}
                                <p className="pt-4 pl-1">{blog.blog}</p>
                                <br></br>
                            </div>
                        );
                    })
                }



            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}