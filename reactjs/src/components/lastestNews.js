import React from 'react'
import Datebar from './dateBar';
import events from '../data/events';
import newsData from '../data/newsData';
import { Link } from 'react-router-dom';
const LatestNews = () => {
    // const newsData = [
    //     {
    //         title: "Trojan Robotics in Houston",
    //         desc: "Read about our competition in Houston!",
    //         date: "April 30, 2023",
    //         srcOfImage: "/assets/images/teamHoustonPic.jpg"
    //     },
    //     {
    //         title: "Iowa Regional",
    //         desc: "Read about our Houston qualifying tournament",
    //         date: "March 23, 2023",
    //         srcOfImage: "/assets/images/trojanRoboticsIowa2023.jpg"
    //     }

    // ]
    return (
        <div >
            <br></br>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 justify-center gap-5">
                <div className='h-full flex flex-col justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold'>Upcoming Events</h1>
                        <p className='text-gray-700 pt-1'>Join us and cheer us on in person!</p>
                        <Datebar month={events[0].month} date={events[0].date} name={events[0].name} location={events[0].location} />
                    </div>
                    <br></br>
                    <div>
                        <h1 className='text-2xl font-bold'>Upcoming Practices</h1>
                        <Datebar month="Mar" date="7" name="Mechanical Team Practice" location="Wayzata High School" />
                        <Datebar month="Mar" date="7" name="Mechanical Team Practice" location="Wayzata High School" />
                    </div>
                </div>
                <div className="col-span-2">
                    <h2 className='text-2xl font-bold'>Latest News</h2>
                    <p className='text-gray-700 pt-1 pb-1'>Latest news straight from Trojan Robotics</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {newsData.slice(0, 2).map((newsItem, index) => {
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
                                            <p className='text-sm text-gray-700'>{newsItem.date}</p>
                                            <br></br>
                                            <p className='text-gray-700'>{newsItem.desc}</p>
                                            <br></br>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                {/* 2 SPOTS FOR NEWS */}

            </div>
        </div>
    );
}

export default LatestNews;