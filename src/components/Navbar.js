import React from 'react'
import logo from '../assets/imgs/logo.png'
import search from '../assets/imgs/search.svg'
import chat from '../assets/imgs/chat.svg'

function Navbar() {
    return (
        <div className="z-10 flex flex-row justify-between items-center px-72 py-4 bg-red-100 text-darkBluue w-full fixed top-0 left-0" style={{ background: '#fff' }}>
            <div className="flex flex-row justify-between gap-16 items-center">
                <a href="/" className="flex flex-row justify-between gap-2 items-center">
                    <img className='w-16' src={logo} alt="CS" />
                    <h3 className="font-bold text-3xl leading-6 font-serif" >Neat<br/>Service.</h3>
                </a>
                <div className="flex flex-row justify-between gap-6 items-center font-semibold " >
                    <a href="/" className='menuItemHover py-4'>Home</a>
                    <a href="/" className='menuItemHover py-4'>About</a>
                    <a href="/" className='menuItemHover py-4'>Services</a>
                    <a href="/" className='menuItemHover py-4'>Blog</a>
                    <a href="/" className='menuItemHover py-4'>Contact</a>
                    <img src={search} className='w-6' alt="CS" />
                </div>
            </div>

            <div className="flex flex-row justify-start items-center font-semibold gap-4 ">
                <p className="opacity-95">+213 9999-555-11</p>
                <button className="flex flex-row gap-1 justify-start items-center  font-medium tracking-wide text-sm rounded-lg text-bgg bg-piink hover:bg-darkBluue transition-all px-4 py-2">
                    <img src={chat} className="w-5" alt="CS"  /> Let's Talk 
                </button>
            </div>
        </div>
    )
}

export default Navbar
