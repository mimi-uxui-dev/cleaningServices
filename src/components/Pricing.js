import React from 'react'
import check from '../assets/imgs/check.svg'
import arrow from '../assets/imgs/arr.svg'

function Pricing() {
    return (
        <div className='bg-bgg border-yelloww flex flex-col justify-center items-center py-24' style={{ background: "#F4F9FB" }} >
            <p className="text-sm text-piink font-semibold">Our Pricing</p>
            <h3 className="text-3xl py-4 font-bold max-w-lg leading-tight text-center text-darkBluue">
                Simple Plan For Everyone
            </h3>

            <div className="flex flex-row gap-20 mt-8">

                <div className="flex flex-col gap-4 bg-bgg p-10 rounded-md">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-2xl">Baisc Plan</h3>
                        <p className="text-base">Perfect for Residential Services</p>
                    </div>
                    <div className="flex flex-row text-center justify-center items-baseline my-2">
                        <h3 className='text-4xl font-semibold'>$80</h3><p>/Mo</p>
                    </div>
                    <div className="text-base flex flex-col gap-2 ">
                        <div className="flex flex-row justify-between gap-4"><p>Fully Profetional Cleaner</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Living Room Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Bed Room Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Bathroom Cleaning</p> <img src={check} className="opacity-30" alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Windows & Door Cleaning</p> <img src={check} className="opacity-30" alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Roof Cleaning</p> <img src={check} className="opacity-30" alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Kitchen Cleaning</p> <img src={check} className="opacity-30" alt="CS" /></div>
                    </div>
                    <button className="flex flex-row gap-2 justify-center mx-auto items-center font-medium tracking-wide text-sm rounded-lg text-bgg bg-bluue hover:bg-darkBluue transition-all px-4 py-2 max-w-max mt-2">
                        <img src={arrow} className="w-5" alt="CS" /> Book Now
                    </button>
                </div>

                <div className="flex flex-col gap-4 bg-bgg p-10 rounded-md">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-2xl">Smart Plan</h3>
                        <p className="text-base">Perfect for Large & Small Company</p>
                    </div>
                    <div className="flex flex-row text-center justify-center items-baseline my-2">
                        <h3 className='text-4xl font-semibold'>$150</h3><p>/Mo</p>
                    </div>
                    <div className="text-base flex flex-col gap-2 ">
                        <div className="flex flex-row justify-between gap-4"><p>Fully Profetional Cleaner</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Living Room Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Bed Room Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Bathroom Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Windows & Door Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Roof Cleaning</p> <img src={check} className="opacity-30" alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Kitchen Cleaning</p> <img src={check} className="opacity-30" alt="CS" /></div>
                    </div>
                    <button className="flex flex-row gap-2 justify-center mx-auto items-center  font-medium tracking-wide text-sm rounded-lg text-bgg bg-bluue hover:bg-darkBluue transition-all px-4 py-2 max-w-max mt-2">
                        <img src={arrow} className="w-5" alt="CS" /> Book Now
                    </button>
                </div>

                <div className="flex flex-col gap-4 bg-bgg p-10 rounded-md">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-2xl">Silver Plan</h3>
                        <p className="text-base">Perfect for Residential Services</p>
                    </div>
                    <div className="flex flex-row text-center justify-center mx-auto items-baseline my-2">
                        <h3 className='text-4xl font-semibold'>$250</h3><p>/Mo</p>
                    </div>
                    <div className="text-base flex flex-col gap-2 ">
                        <div className="flex flex-row justify-between gap-4"><p>Fully Profetional Cleaner</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Living Room Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Bed Room Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Bathroom Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Windows & Door Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Roof Cleaning</p> <img src={check} alt="CS" /></div>
                        <div className="flex flex-row justify-between gap-4"><p>Kitchen Cleaning</p> <img src={check} alt="CS" /></div>
                    </div>
                    <button className="flex flex-row gap-2 justify-center mx-auto items-center  font-medium tracking-wide text-sm rounded-lg text-bgg bg-bluue hover:bg-darkBluue transition-all px-4 py-2 max-w-max mt-2">
                        <img src={arrow} className="w-5" alt="CS" /> Book Now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Pricing
