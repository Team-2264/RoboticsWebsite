import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
export default function Students() {
    const students = [
        {
            name: "Rukshan Rajan",
            title: "Head Co-Captain",
            desc: "Rukshan has been doing robotics since he was in elementary school and loves working with his hands. In his free time he loves to mountain bike and participate in boy scouts.",
            imgSrc: "/studentImages/rukshanRajan.jpg"
        },
        {
            name: "Beck Bjella",
            title: "Head Co-Captain",
            desc: "Beck has always had a strong passion for programming and is instrumental as of leading the programming team year after year. In his free time he loves to code and play pickleball.",
            imgSrc: "/studentImages/beck.jpg"
        },
        {
            name: "Yoojin Nam",
            title: "Outreach Co-Captain and Social Media Lead",
            desc: "Yoojin is the driving force behind the social media presence of this team. She has implemented innovative methods to captivate the attention of our audience. She also led the development of our first ever outreach team!",
            imgSrc: "./studentImages/yoojinNam.jpg"
        },
        {
            name: "Avi Bandi",
            title: "Webmaster",
            desc: "Avi was instrumental in creating the new outreach subdivision and was instrumental in creating our new website. In his free time he loves to program and have fun with his friends.",
            imgSrc: "/studentImages/aviBandi.JPG"
        },
        {
            name: "Evan Hsieh",
            title: " Co-Webmaster",
            desc: "Evan is a brilliant designer with expertise in website design. He played a pivotal role in assisting Avi in creating the new Trojan Robotics website. In addition to his design skills, Evan enjoys playing Valorant and competing in violin competitions.",
            imgSrc: "/studentImages/evanHsieh.JPG"
        },
        {
            name: "Neev Zeroni",
            title: "Mechanical Co-Captain",
            desc: "Neev has been with the team for 4 years now and enjoys teaching people about mechanical engineering. Outside of school Neev is a big advocate for gun violence and loves to ski.",
            imgSrc: "/studentImages/neevZeroni.jpg"
        },
        {
            name: "Ankush Nayak",
            title: "Mechanical Co-Captain",
            desc: "Ankush is a stellar robotics member that everyone can go to when they need help on a project or just with personel advice. In his free time he likes to play basketball.",
            imgSrc: "/studentImages/ankushNayak.jpg"
        },
        {
            name: "Viswas Vallabaneni",
            title: "Marketing Co-Captain",
            desc: "Viswas has been with the team for two years now and loves creating new connections. In the future viswas plans to major in communications and sales.",
            imgSrc: "/studentImages/viswasValla.jpg"
        },
        {
            name: "Lakshmi Kandikonda",
            title: "Marketing Co-Capatain",
            desc: "Lakshmi has been instrumental to our team's marketing success and in the future hopes to pursue a major in the stem field. In her free time she loves to hand out with her friends and bake.",
            imgSrc: "/studentImages/lakshmiKandikonda.jpg"
        },
        {
            name: "Eva Roberts",
            title: "Saftey Captain",
            desc: "Eva always love creating something out of seemingly nothing, especially with a team. She aspires to be an aerospace engineer one day!",
            imgSrc: "/studentImages/evaRoberts.jpg"
        },


    ]
    return (
        <div>
            <NavBar />
            <br></br>
            <div className="max-w-6xl mx-auto">
                <div >
                    <h1 className="font-bold text-center text-3xl">Trojan Robotics Captains</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-9 gap-8 pb-4">

                    {
                        students.map((info) => {
                            return (
                                <div className="grid grid-cols-1 md:grid-cols-3">

                                    <img className="rounded-lg shadow-2xl h-[185px] w-[185px]" src={info.imgSrc} />
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