import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({ programName }) {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <div className="relative">
        <img
          src="/assets/images/NewTeamPhoto.jpeg"
          alt={programName}
          className="w-full h-auto object-cover sm:object-center sm:h-[500px] lg:h-[600px]"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-300">
            Trojan Robotics 2264
          </h1>

          <p className="mt-4 text-center text-lg sm:text-xl text-yellow-300 max-w-3xl">
            Trojan Robotics (FIRST Robotics Team 2264) is a community robotics team based in Plymouth, Minnesota
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4">
            <Link to="/events">
              <button className="px-6 py-3 bg-white text-blue-400 font-medium rounded-md shadow hover:bg-blue-50">
                Get Involved
              </button>
            </Link>
            <Link to="/donate">
              <button className="px-6 py-3 bg-yellow-400 bg-opacity-60 text-white font-medium rounded-md shadow hover:bg-opacity-70">
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
