import React from "react";


const Datebar = ({name, month, date, location}) => {
    return (
        <div>
            <ul className='mt-4 grid grid-cols-1 gap-5 sm:gap-6'>
                <li className="col-span-1 flex rounded-md shadow-sm">
                    <div className='flex w-16 flex-col items-center justify-center bg-yellow-400 rounded-l-md fond-medium text-black'>
                        <div className='font-semibold'>{month}</div>
                        <div className='font-semibold'>{date}</div>
                    </div>
                    <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                        <div className="flex-1 truncate px-4 py-2 text-sm">
                            <p className="truncate font-medium text-blue hover:text-gray-700">{name}</p>
                            <p className='text-gray-500'>{location}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Datebar