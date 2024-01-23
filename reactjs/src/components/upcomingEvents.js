import React from 'react'
import Datebar from './dateBar';
import events from '../data/events';

const upcomingEvents = () => {

    return (
        <div >
            <br></br>
            <div>
                <div className='h-full flex flex-col justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold'>Upcoming Events</h1>
                        <p className='text-gray-700 pt-1'>Join us and cheer us on in person!</p>
                        <Datebar month={events[0].month} date={events[0].date} name={events[0].name} location={events[0].location} />
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default upcomingEvents;