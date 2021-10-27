import React from 'react'
import cake from '../assets/imgs/c.svg'
import team from '../assets/imgs/u.svg'
import medal from '../assets/imgs/m.svg'

function FunFacts() {
    return (
        <div className='bg-bgg border-yelloww flex flex-col justify-center items-center py-24' >
            <p className="text-sm text-piink font-semibold">Fun Fact</p>
            <h3 className="text-3xl py-4 font-bold max-w-lg leading-tight text-center text-darkBluue">Experiences on Cleaning Area With Successful Project</h3>
            <div className="flex flex-row gap-20 mt-8">
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                    <img src={cake} className="w-12" alt="CS" />
                    <div className='flex flex-row gap-2 justify-center items-baseline'>
                        <h3 className="text-4xl" >10</h3>
                        <p>Years</p>
                    </div>
                    <p className="text-lg w-60">We have more than 10+ years working experience.</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center text-center">
                    <img src={team}  className="w-12" alt="CS" />
                    <div className='flex flex-row gap-2 justify-center items-baseline'>
                        <h3 className="text-4xl" >+160</h3>
                        <p>Employee</p>
                    </div>
                    <p className="text-lg w-60">We have more than 160+ employees working near you.</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center text-center">
                    <img src={medal} className="w-12" alt="CS" />
                    <div className='flex flex-row gap-2 justify-center items-baseline'>
                        <h3 className="text-4xl" >20</h3>
                        <p>Years</p>
                    </div>
                    <p className="text-lg w-60">We have done many projects & get awards 20+ times.</p>
                </div>

            </div>
        </div>
    )
}

export default FunFacts
