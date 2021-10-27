import React from 'react'
import plane from "../assets/imgs/plane.svg"
import bgg from '../assets/imgs/bgg.png'
function Subs() {
    
    return (
        <div className='flex flex-col justify-center items-center py-32' style={{ backgroundImage: `url(${bgg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
            <h3 className='text-darkBluue text-4xl font-semibold'>Subscribe to Out Newsletter</h3>
            <div className='flex flex-row gap-0 mt-8'>
                <input type="email" className='w-full pl-4' placeholder='Email..' style={{ width: "100%", minWidth: '320px' }}  />
                <img src={plane} alt="CS" className='bg-bluue p-2 hover:bg-darkBluue transition-all' />
            </div>
        </div>
    )
}

export default Subs
