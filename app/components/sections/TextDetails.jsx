"use client"
import Image from 'next/image'
import React from 'react'
import mainImg from "../../../public/assets/main_img.png"
import { Typewriter } from 'react-simple-typewriter'


export default function TextDetails() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-[99%] overflow-hidden">

                <Image
                    src={mainImg} alt='main-img'
                    className="max-w-sm rounded-lg" />

                <div>
                    <h1 className="text-2xl font-bold">We fix your problems</h1>
                    <h1 className="text-5xl font-bold hidden md:block">
                        Anesur Khan{' '}
                        <span style={{ color: 'white', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Dish Mistri', 'Wiring Mistri', '', 'Electrician']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={200}
                                deleteSpeed={50}
                                delaySpeed={1500}

                            />
                        </span>
                    </h1>
                    <div className='md:hidden'>

                    <h1 className="text-5xl font-bold">
                        Anesur Khan
                    </h1>
                    <h1 className="text-5xl font-bold" style={{ color: 'white' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Dish Mistri', 'Wiring Mistri', '', 'Electrician']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={200}
                                deleteSpeed={50}
                                delaySpeed={1500}

                            />
                        </h1>
                    </div>
                    <p className="py-6 md:w-[80%] text-lg">
                    Expert Dish & Wiring Solutions: I specialize in installation and repair of all major DTH brands including Dish TV, Sun Direct, Tata Sky, Airtel Digital TV, and Free Dish. Offering comprehensive wiring services for homes and businesses, plus expert electrical work. Your one-stop solution for reliable entertainment and electrical needs.
                    </p>
                    <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-semibold transition duration-200 ease-linear">
                        Get Help
                    </button>
                </div>
            </div>
        </div>
    )
}
