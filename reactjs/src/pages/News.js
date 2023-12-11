import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";

export default function News() {

    const newsData = [
        {
            title: "Trojan Robotics in Houston",
            desc: "Read about our competition in Houston!",
            date: "April 30, 2023",
            srcOfImage: "/assets/images/teamHoustonPic.jpg"
        },
        {
            title: "Iowa Regional",
            desc: "Read about our Houston qualifying tournament",
            date: "March 23, 2023",
            srcOfImage: "/assets/images/trojanRoboticsIowa2023.jpg"
        },
        {
            title: "Trojan Robotics in Houston",
            desc: "Read about our competition in Houston!",
            date: "April 30, 2023",
            srcOfImage: "/assets/images/teamHoustonPic.jpg"
        },
        {
            title: "Iowa Regional",
            desc: "Read about our Houston qualifying tournament",
            date: "March 23, 2023",
            srcOfImage: "/assets/images/trojanRoboticsIowa2023.jpg"
        }

    ]


    return (
        <div>
            <NavBar />
            <br></br>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold">Trojan Robotics News</h1>
                <p className="text-gray-700 pt-2">All the latest Trojan Robotics news straight form the team!</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 pt-6">
                    {newsData.map((newsItem, index) => {
                        return (
                            <Link to={`/article/${index}`}>
                                <div className='shadow-2xl rounded-lg h-full'>
                                    <img
                                        className="w-full h-32 object-cover rounded-t-lg"
                                        src={newsItem.srcOfImage}
                                        alt={"backgorund"}
                                    />
                                    <div className="p-5">
                                        <h2 className='font-bold text-xl'>{newsItem.title}</h2>
                                        <p className='text-sm text-gray-700 pt-1'>{newsItem.date}</p>
                                        <p className='text-gray-700 pt-4'>{newsItem.desc}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <br></br>
            <Footer />
        </div>

    )
}

