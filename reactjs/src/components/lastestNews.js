import React from 'react'


const LatestNews = () => {
    const newsData = [
        {
            title: "Hello World",
            author: "Name",
            desc: "Helloworld",
            date: "December 10, 2023"
        },
        {
            title: "Hello world 2",
            author: "Name",
            desc: "Helloworld",
            date: "December 10, 2023"
        }

    ]
    return (
        <div className="w-full grid grid-cols-3 items-center justify-center gap-5">
            <div className='m-auto shawdow-2xl'>
                FEATURES
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
                            <p className='text-gray-700'>{newsItem.desc}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}

export default LatestNews;