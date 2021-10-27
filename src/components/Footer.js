import React from 'react'
import logo from '../assets/imgs/logo.png'
import ig from '../assets/imgs/ig.svg'
import tw from '../assets/imgs/tw.svg'
import fcb from '../assets/imgs/fcb.svg'
import yt from '../assets/imgs/yt.svg'
import p from '../assets/imgs/pp.svg'

function Footer() {
    return (
        <div className='bg-darkBluue bg-opacity-90 text-bgg px-72'>
            <div className='flex flex-row justify-between py-16' style={{ borderBottom: '1px solid #eee' }}>
                <a href="/" className="flex flex-row justify-between gap-2 items-center">
                    <img className='w-16' src={logo} alt="CS" />
                    <h3 className="font-bold text-3xl leading-6 font-serif" >Neat<br />Service.</h3>
                </a>

                <div className='flex flex-row gap-2'>
                    <img src={ig} alt="#" />
                    <img src={tw} alt="#" />
                    <img src={yt} alt="#" />
                    <img src={fcb} alt="#" />
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-2 p-10 '>
                    <h3 className='text-base font-semibold tracking-wider'>Company</h3>
                    <div className='flex flex-col text-sm font-light gap-1 tracking-wider'>
                        <a href="/">Comapny</a>
                        <a href="/">Our Services</a>
                        <a href="/">Terms & Conditions</a>
                        <a href="/">Privacy Policy</a>
                    </div>
                </div>
                <div className='flex flex-col gap-2 p-10'>
                    <h3 className='text-base font-semibold tracking-wider'>Our Services</h3>
                    <div className='flex flex-col text-sm font-light gap-1 tracking-wider'>
                        <a href="/">House Cleaning</a>
                        <a href="/">Office Cleaning</a>
                        <a href="/">kitchen Cleaning</a>
                        <a href="/">Office Cleaning</a>
                        <a href="/">Bathroom Cleaning</a>
                        <a href="/">Residental Cleaning</a>
                        <a href="/">windows Cleaning</a>

                    </div>
                </div>
                <div className='flex flex-col gap-2 p-10 '>
                    <h3 className='text-base font-semibold tracking-wider'>Contact Info</h3>
                    <div className='flex flex-col text-sm font-light tracking-wider'>
                        <p>Location 2B St. Street, San Fransisco USA</p>
                        <p>Email: taous.dev@gmail.com</p>
                        <div className='flex flex-row gap-4 mt-4 items-center'>
                            <img src={p} alt="#" className='w-12' />
                            <div className='flex flex-col ' >
                                <p className="text-piink font-semibold">Call Us Now</p>
                                <p>+213698235548</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
