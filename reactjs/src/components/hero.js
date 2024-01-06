import React from 'react'
import { Link } from 'react-router-dom'
import pdf from "../documents/donate.pdf"
export default function Hero({ programName }) {
  return (
    <div>
      <div className="lg:pt-5">
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
          <div className="max-w-7xl mx-auto">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover "
                  src="/assets/images/teamHoustonPic.jpg"
                  alt={programName}
                />
                <div
                  className="absolute inset-0 bg-yellow-900 bg-opacity-70"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                <h1 className='text-center text-5xl text-blue-400'>Trojan Robotics <span className='text-white'>2264</span></h1>

                {/* <img
                  src={`/img/logos/${programName}-white.png`}
                  alt={programName}
                  className="w-48 mx-auto"
                /> */}
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-200 sm:max-w-3xl">
                  Trojan Robotics FIRST Robotics Team 2264 is a community robotics team based in Plymouth, Minnesota
                </p>

                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link to="/events">
                      <h1
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-400 bg-white hover:bg-blue-50 sm:px-8"
                      >
                        Get involved
                      </h1>
                    </Link>
                    <a href={pdf} target='_blank'>
                      <h1
                        offset={26.9}
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Donate
                      </h1>
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}