import React from "react"
import NavBar from "../components/NavBar"
export default function OutReach() {
    const outReachSource = [
        {
            blogName: "Plymouth on Parade",
            author: "Avi bandi",
            date: "12/9/23",
            blog: "High cortisol is corelated with a broad set of symptoms, including weight gain (especially in the midsection and face), sleep problems, acne, intense cravings for sweet or salty foods, and difficulty maintaining energy levels throughout the day. One common way of describing the experience of high cortisol is feeling “wired and tired.” High cortisol is a real medical condition, and many of these symptoms can be telltale signs — not of a definitive diagnosis but of a need for further testing.",
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
                            <div>
                                <h1 className="text-center ">{blog.blogName}</h1>
                                <div className=" pb-4 mx-auto max-w-lg py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
                                    <h1 className="text-sm text-blue-700">{blog.author}</h1>
                                    <h1 className="text-sm text-blue-700">{blog.date}</h1>
                                </div>
                                <img
                                    classNamebg= "[length:200px_100px]"
                                    src={blog.imgSrc}
                                />
                            </div>
                        );
                    })
                }
                {/* {outReachSource.map((blog) =>
  
                    <div className="mx-auto max-w-lg py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
                        <h1>{`By: ${blog.author}`}</h1>
                        <h1>{blog.date}</h1>
                    </div>
                )} */}
                {/* {
            navBarViewOptions.map((title) => {
              return (
                <a key={title} href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  <Link to={`/${title.toLowerCase()}`}>{title}</Link>
                </a>
              );
            })
          } */}


            </div>
        </div>
    )
}