import React from 'react'
import calendar from '../assets/imgs/CalendarPlus.svg'
import play from '../assets/imgs/Play.svg'
import hero from '../assets/imgs/hero.png'

function AboveTheFold() {
    return (
        <div className="h-screen flex flex-col justify-center px-96" style={{ backgroundImage: `url(${hero})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <p className="text-sm text-piink font-semibold">We Are Since 1990</p>
            <h1 className="text-6xl py-4 font-bold max-w-2xl leading-tight text-darkBluue">
                Best Cleaning Service Agency in the Town
            </h1>
            <p className="max-w-2xl font-medium text-lg text-darkBluue" >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ad molestiae quaerat, fugit illum nam explicabo ullam nostrum.
            </p>
            <div className="flex flex-row gap-8 items-center mt-16 ">
                <a href="" className="flex flex-row gap-4 items-center justify-start font-medium tracking-wide text-sm rounded-lg text-bgg bg-bluue hover:bg-darkBluue transition-all px-4 py-2" >
                        <img src={calendar} className="w-6" alt="CS" />
                        Book a Schedule
                    
                </a>
                <a href="" className="flex flex-row gap-4 items-center text-darkBluue font-semibold hover:text-bluue transition-all">
                    <img src={play} className='w-10' alt="CS" />
                    Watch Video
                </a>
            </div>
        </div>
    )
}

export default AboveTheFold
