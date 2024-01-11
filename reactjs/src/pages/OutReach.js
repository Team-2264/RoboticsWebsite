import React from "react"
import NavBar from "../components/NavBar"
export default function OutReach() {
    const outReachSource = [
        {
            blogName: "Wayzata Homecoming Block Party",
            author: "Avi bandi",
            date: "12/9/23",
            blog: "Our robotics team recently traveled to Plymouth to take part in a local parade. We towed a float showcasing our team's technical prowess and engaged with the community along the lively parade route. At our booth, we went beyond just talking about robotics – we provided a hands-on experience for little kids, letting them interact with our robots to inspire an early interest in science and technology. This event not only highlighted our team's achievements in robotics but also deepened our ties with the local community, fostering a sense of connection and enthusiasm for STEM.",
            imgSrc: "/mentorImages/headCoach.jpg"
        },
        {
            blogName: "Trojan Robotics at Plymouth on Parade",
            author: "Avi bandi",
            date: "12/9/23",
            blog: "Our robotics team recently traveled to Plymouth to take part in a local parade. We towed a float showcasing our team's technical prowess and engaged with the community along the lively parade route. At our booth, we went beyond just talking about robotics – we provided a hands-on experience for little kids, letting them interact with our robots to inspire an early interest in science and technology. This event not only highlighted our team's achievements in robotics but also deepened our ties with the local community, fostering a sense of connection and enthusiasm for STEM.",
            imgSrc: "/mentorImages/headCoach.jpg"
        }
    ]
    return (
        <div>
            <NavBar />
            <div>
                <h1 className="text-center font-bold text-2xl pt-4 pb-6">Community Outreach Blog</h1>
                {
                    outReachSource.map((blog) => {
                        return (
                            <div className="max-w-lg mx-auto">
                                <h1 className="text-center font-bold text-xl text-blue-800">{blog.blogName}</h1>
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