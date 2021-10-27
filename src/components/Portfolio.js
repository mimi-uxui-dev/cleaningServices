import React from 'react'
import p1 from '../assets/imgs/p1.png'
import p2 from '../assets/imgs/p2.png'
import p3 from '../assets/imgs/p3.png'
import p4 from '../assets/imgs/p4.png'
import arrow from '../assets/imgs/arr_w.svg'

function Portfolio() {
    return (
        <div className='bg-bgg border-yelloww flex flex-col justify-center items-center py-24'  >
            <p className="text-sm text-piink font-semibold">Our Portfolio</p>
            <h3 className="text-3xl py-4 font-bold max-w-lg leading-tight text-center text-darkBluue">
                Have a Look We Will Make Any Place Absolutely Clean, Neat
            </h3>

            <div className='flex flex-row gap-8 w-full mt-8 px-4'>

                <div className="flex flex-col gap-2 relative top-0 left-0">
                    <img src={p1} className='rounded-md ' alt="CS" />
                    <div className='absolute bottom-0 left-0 p-4 text-bgg'>
                        <h4 className='text-2xl font-semibold pb-2'>Office Cleaning</h4>
                        <p className='text-sm tracking-wide' >Commercial Service</p>
                        <img src={arrow} className='w-8 mt-4' alt="CS" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 relative top-0 left-0">
                    <img src={p2} className='rounded-md ' alt="CS" />
                    <div className='absolute bottom-0 left-0 p-4 text-bgg'>
                        <h4 className='text-2xl font-semibold pb-2'>Office Cleaning</h4>
                        <p className='text-sm tracking-wide' >Commercial Service</p>
                        <img src={arrow} className='w-8 mt-4' alt="CS" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 relative top-0 left-0">
                    <img src={p3} className='rounded-md ' alt="CS" />
                    <div className='absolute bottom-0 left-0 p-4 text-bgg'>
                        <h4 className='text-2xl font-semibold pb-2'>Office Cleaning</h4>
                        <p className='text-sm tracking-wide' >Commercial Service</p>
                        <img src={arrow} className='w-8 mt-4' alt="CS" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 relative top-0 left-0">
                    <img src={p4} className='rounded-md ' alt="CS" />
                    <div className='absolute bottom-0 left-0 p-4 text-bgg'>
                        <h4 className='text-2xl font-semibold pb-2'>Office Cleaning</h4>
                        <p className='text-sm tracking-wide' >Commercial Service</p>
                        <img src={arrow} className='w-8 mt-4' alt="CS" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Portfolio
