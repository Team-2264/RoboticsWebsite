import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import OutReachData from "../data/OutReachData"
export default function OutReach() {
    // const outReachSource = [
    //     {
    //         blogName: "Wayzata Highschool Football Games",
    //         author: "Yoojin Nam",
    //         date: "9/12/24, 9/20/24, 10/10/24",
    //         blog: "Our team further connects with our school's student body by participating in football games and shooting T-shirts to the student section! The interactions with the crowd not only strengthen our bond with the community, but gives us energy we need for our team spirit.",
    //         imgSrc: "/mentorImages/headCoach.jpg"
    //     },
    //     {
    //         blogName: "Wayzata Homecoming Block Party",
    //         author: "Dhriti Edpuganti",
    //         date: "9/20/24",
    //         blog: "In the block party, we showcased our robot and we showed school pride by coming and cheering on our school!",
    //         imgSrc: "/mentorImages/headCoach.jpg"
    //     },
    //     {
    //         blogName: "Oakwood Elementary Science Fair",
    //         author: "Lakshmi Kandikonda",
    //         date: "2/27/24",
    //         blog: "As a part of our outreach program dedicated to promoting STEAM, our robotics team hosted a booth at Oakwood Elementary’s Science Fair! We had engaging mini-games such as frisbee toss that was related to this year's FRC challenge. This not only served as an entertainment for the 1st to 5th graders, but also helped them get interested in robotics. Additionally, we proudly presented our local FLL and FTC teams, showcasing their robots at the event as well. Overall, our participation in Oakwood Elementary's Science Fair marked a successful outreach effort!",
    //         imgSrc: "/mentorImages/headCoach.jpg"
    //     },
    //     {
    //         blogName: "Wayzata Homecoming Block Party",
    //         author: "Avi bandi",
    //         date: "12/9/23",
    //         blog: "Our robotics team recently traveled to Plymouth to take part in a local parade. We towed a float showcasing our team's technical prowess and engaged with the community along the lively parade route. At our booth, we went beyond just talking about robotics – we provided a hands-on experience for little kids, letting them interact with our robots to inspire an early interest in science and technology. This event not only highlighted our team's achievements in robotics but also deepened our ties with the local community, fostering a sense of connection and enthusiasm for STEM.",
    //         imgSrc: "/mentorImages/headCoach.jpg"
    //     },
    //     {
    //         blogName: "Trojan Robotics at Plymouth on Parade",
    //         author: "Avi bandi",
    //         date: "12/9/23",
    //         blog: "Our robotics team recently traveled to Plymouth to take part in a local parade. We towed a float showcasing our team's technical prowess and engaged with the community along the lively parade route. At our booth, we went beyond just talking about robotics – we provided a hands-on experience for little kids, letting them interact with our robots to inspire an early interest in science and technology. This event not only highlighted our team's achievements in robotics but also deepened our ties with the local community, fostering a sense of connection and enthusiasm for STEM.",
    //         imgSrc: "/mentorImages/headCoach.jpg"
    //     }

    //     // As a part of our outreach program dedicated to promoting STEAM, our robotics team hosted a booth at Oakwood Elementary’s Science Fair! We had engaging mini-games such as frisbee toss that was related to this year's FRC challenge. This not only served as an entertainment for the 1st to 5th graders, but also helped them get interested in robotics. Additionally, we proudly presented our local FLL and FTC teams, showcasing their robots at the event as well. Overall, our participation in Oakwood Elementary's Science Fair marked a successful outreach effort!


    // ]
    return (
        <div>
            <NavBar />
            <div>
                <h1 className="text-center font-bold text-2xl pt-4 pb-6">Community Outreach Blog</h1>
                {
                    OutReachData.map((blog) => {
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