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
              <img
                  src="/assets/images/NewTeamPhoto.jpeg"
                  alt={programName}
                  className='scale-125 pr-15'
                />
                              
                
              
              <div className="relative px-4 py-16 m:px-6 bg-blue-900 sm:py-6 lg:px-8">
              
                <h1 className='text-center text-5xl text-yellow-300 object-right '><b>Trojan Robotics 2264</b><span className='text-yellow-300 object-right'></span></h1>

                {/* <img
                  src={`/img/logos/${programName}-white.png`}
                  alt={programName}
                  className="w-48 mx-auto"
                /> */}
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-yellow-300 sm:max-w-3xl">
                  Trojan Robotics (FIRST Robotics Team 2264) is a community robotics team based in Plymouth, Minnesota
                </p>

                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 ">
                    <Link to="/events">
                      <h1
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-400 bg-white hover:bg-blue-50 sm:px-8"
                      >
                        Get involved
                      </h1>
                    </Link>
                    <Link to="/donate">
                      <h1
                        offset={26.9}
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-400 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Donate
                      </h1>
                    </Link>  
                    
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