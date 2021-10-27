import React from 'react'
import img1 from '../assets/imgs/i1.png'
import img2 from '../assets/imgs/i2.png'
import img3 from '../assets/imgs/i3.png'
import img4 from '../assets/imgs/i4.png'
import arrow from '../assets/imgs/arr.svg'

function OurServices() {
    return (
        <div className='flex flex-col justify-center items-center py-24' style={{ background: "#CDF4FF"}} >
            <p className="text-sm text-piink font-semibold">Our Services</p>
            <h3 className="text-3xl py-4 font-bold max-w-lg leading-tight text-center text-darkBluue">We Work Many Fields to Clean Your Surrounding Area</h3>
            <div className="flex flex-row gap-6 mt-8">
                
                <div className="flex flex-col gap-2 items-center justify-center text-center bg-bgg p-10 rounded-md"  >
                    <img src={img1} className="w-20" alt="CS" />
                    <div className='flex flex-row gap-2 justify-center items-baseline'>
                        <h3 className="text-xl font-medium" >House Cleaning</h3>
                    </div>
                    <p className="text-base w-60 mt-2">Sed ut perspiciatis unde omnis natus error sitdol totam.</p>
                    <img src={arrow} className="w-7 mt-4" alt='CS' />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center text-center bg-bgg p-10 rounded-md">
                    <img src={img2} className="w-20" alt="CS" />
                    <div className='flex flex-row gap-2 justify-center items-baseline'>
                        <h3 className="text-xl font-medium" >Office Cleaning</h3>
                    </div>
                    <p className="text-base w-60 mt-2">Sed ut perspiciatis unde omnis natus error sitdol totam.</p>
                    <img src={arrow} className="w-7 mt-4" alt='CS' />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center text-center bg-bgg p-10 rounded-md">
                    <img src={img3} className="w-20" alt="CS" />
                    <div className='flex flex-row gap-2 justify-center items-baseline'>
                        <h3 className="text-xl font-medium" >Windows Cleaning</h3>
                    </div>
                    <p className="text-base w-60 mt-2">Sed ut perspiciatis unde omnis natus error sitdol totam.</p>
                    <img src={arrow} className="w-7 mt-4" alt='CS' />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center text-center bg-bgg p-10 rounded-md">
                    <img src={img4} className="w-20" alt="CS" />
                    <div className='flex flex-row gap-2 justify-center items-baseline'>
                        <h3 className="text-xl font-medium" >Plumbing Service</h3>
                    </div>
                    <p className="text-base w-60 mt-2">Sed ut perspiciatis unde omnis natus error sitdol totam.</p>
                    <img src={arrow} className="w-7 mt-4" alt='CS' />
                </div>

                

            </div>
        </div>
    )
}

export default OurServices
