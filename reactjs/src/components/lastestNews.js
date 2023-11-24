import React from 'react'
import Datebar from './dateBar';

const LatestNews = () => {
    const newsData = [
        {
            title: "Trojan Robotics in Houston",
            desc: "Read about our competition in Houston!",
            date: "April 30, 2023"
        },
        {
            title: "Iowa Regional",
            desc: "Read about our Houston qualifying tournament",
            date: "March 23, 2023"
        }

    ]
    return (
        <div >
            {/* <div className='grid grid-cols-1 sm:grid-cols-3'>
                <h1 className='text-2xl font-bold'>Upcoming Events</h1>
                <div>
                    <h1 className='text-2xl font-bold font-sans'>Latest News</h1>
                    <br></br>
                    <p className='text-gray-700'>All the latest Trojan Robotics news, straight from the team</p>
                </div>
            </div> */}
            <br></br>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 justify-center gap-5">
                <div className='shawdow-2xl'>
                    <h1 className='text-2xl font-bold'>Upcoming Events</h1>
                    <Datebar />
                    <Datebar />
                    <br></br>
                    <h1 className='text-2xl font-bold'>Upcoming Practices</h1>
                    <Datebar />
                    <Datebar />

                </div>
                {/* 2 SPOTS FOR NEWS */}
                {newsData.slice(0, 2).map((newsItem, index) => {
                    return (
                        
                        <div className='shadow-2xl rounded-lg'>
                            <img
                                className="w-full h-32 object-cover"
                                src="/assets/images/teamHoustonPic.jpg"
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
                    )
                })}
            </div>
        </div>
    );
}

export default LatestNews;