import React from 'react'


const LatestNews = () => {
    const newsData = [
        {
            title: "Hello world 1",
            author: "Name",
            desc: "Helloworld"
        },
        {
            title: "Hello world 2",
            author: "Name",
            desc: "Helloworld"

        },
        {
            title: "Hello world3 ",
            author: "Name",
            desc: "Helloworld"

        },
        {
            title: "Hello world4",
            author: "Name",
            desc: "Helloworld"
        },
    ]
    return (
        <div className="shadow-2xl w-full grid grid-cols-3 items-center justify-center gap-5">
            <div className='m-auto'>
                FEATURES
            </div>
            <div className='m-auto'>
                FEATURES
            </div>
            <div className='m-auto rounded-md shadow'>
                FEATURES
            </div>
            {/* 2 SPOTS FOR NEWS */}
            {/* {newsData.slice(0, 2).map((newsItem, index) => {
                return (
                    <div className=''>
                        <img
                            className="w-full h-32 object-cover"
                            src="/assets/images/teamHoustonPic.jpg"
                            alt={"backgorund"}
                        />
                        <div className="p-5">
                            <h2 className='font-bold text-xl'>{newsItem.title}</h2>
                            <p>{newsItem.title}</p>
                        </div>
                    </div>
                )
            })} */}

        </div>
    );
}

export default LatestNews;