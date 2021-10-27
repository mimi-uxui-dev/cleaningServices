import React from 'react'
import aus from '../assets/imgs/aboutus.png'
import img1 from '../assets/imgs/img1.svg'
import img2 from '../assets/imgs/img2.svg'


function About() {
    return (
        <div className='flex flex-row  gap-16 justify-center items-center px-72 py-24 bg-bgg'>
            <div>
                <img src={aus} className="rounded-md" style={{ maxWidth: "600px"}} alt='CS' /> 
            </div>
            <div className='flex flex-col gap-4'>
                <p className="text-sm text-piink font-semibold">Abou Us</p>
                <h3 className="text-3xl  font-bold max-w-lg leading-tight text-darkBluue">We Will Make Absolutely Any Place Clean, Neat</h3>
                <div className="flex flex-row gap-4  items-start mt-4">
                    <img src={img1} alt="CS" /> 
                    <div>
                        <h3 className="text-lg font-medium">We Provide Qualified & Expert</h3>
                        <p className="text-sm font-normal tracking-wide mt-2 w-96">Aenean sollicitudin lorem quis bibendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit duis sed odio sit amet nibh vulputate cursus.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-start"> 
                    <img src={img2} alt="CS" /> 
                    <div>
                        <h3 className="text-lg font-medium">WModern Tools & Technology Use</h3>
                        <p className="text-sm font-normal tracking-wide mt-2 w-96">Aenean sollicitudin lorem quis bibendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit duis sed odio sit amet nibh vulputate cursus.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About
