import React from 'react'

import newsData from '../data/newsData';
import { Link } from 'react-router-dom';
const LatestNews = () => {

    return (
        <div >
            <br></br>
            <div>
                
                <div className="col-span-2">
                    <h2 className='text-2xl font-bold'>Latest News</h2>
                    <p className='text-gray-700 pt-1 pb-1'>Latest news straight from Trojan Robotics</p>
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-5'>
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

            </div>
        </div>
    );
}

export default LatestNews;