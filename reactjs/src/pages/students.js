import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
export default function Students() {
    const students = [
        {
            name: "Rukshan Rajan",
            title: "Head Co-Captain",
            desc: "Nira has been mentoring with the team for 5 years now, and is now the head coach! Outside of robotics she loves spending time outdoors with her boys!",
            imgSrc: "/studentImages/rukshanRajan.jpg"
        },
        {
            name: "Beck Bjella",
            title: "Head Co-Captain",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/studentImages/beck.jpg"
        },
        {
            name: "Yoojin Nam",
            title: "Outreach Co-Captain and Social Media Lead",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "./studentImages/yoojinNam.jpg"
        },
        {
            name: "Avi Bandi",
            title: "Outreach Co-Captain and Webmaster",
            desc: "Hey guys, I do absoultley nothing and take the credit for everything. Nice for air force academy admissions. test test test stset test stes test test ",
            imgSrc: "/studentImages/aviBandi.jpg"
        },
        {
            name: "Neev Zeroni",
            title: "Mechanical Co-Captain",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/studentImages/neevZeroni.jpg"
        },
        {
            name: "Ankush Nayak",
            title: "Mechanical Co-Captain",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/studentImages/ankushNayak.jpg"
        },
        {
            name: "Viswas Vallabaneni",
            title: "Marketing Co-Captain",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/studentImages/viswasValla.jpg"
        },
        {
            name: "Lakshmi Kandikonda",
            title: "Marketing Co-Capatain",
            desc: "Nira has been with trojan robotics for 3 years now and is now at the top of the food chain!",
            imgSrc: "/studentImages/lakshmiKandikonda.jpg"
        },
        {
            name: "Eva Roberts",
            title: "Saftey Captain",
            desc: "I love working with my hands and aspire to be an aerospace engineer one day!",
            imgSrc: "/studentImages/evaRoberts.jpg"
        },


    ]
    return (
        <div className>
            <NavBar />
            <br></br>
            <div>
                <div >
                    <h1 className="font-bold text-center text-3xl">Trojan Robotics Team Members</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-9 gap-8 pb-4">

                    {
                        students.map((info) => {
                            return (
                                <div className="grid grid-cols-1 md:grid-cols-3">

                                    <img className="rounded-lg shadow-2xl" src={info.imgSrc} />
                                    <div className="md:col-span-2 md:pl-6">
                                        <h1 className="font-bold text-xl">{info.name}</h1>
                                        <h1 className="font-bold text-base text-blue-800 pt-1">{info.title}</h1>
                                        <p className="font-xs text-gray-700 pt-2">{info.desc}</p>
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