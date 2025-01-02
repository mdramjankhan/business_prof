"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Modal from "../modal/Modal";

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const [line, setLine] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY; // Use scrollY instead of pageYOffset

            // Determine navbar visibility
            setVisible(
                prevScrollPos > currentScrollPos || currentScrollPos < 10
            );

            // Update the previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <div className="sticky top-0 z-50 ">
            <nav
                className={`bg-base-300 glass w-full transition-transform duration-300 ease-in-out ${visible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <div className="navbar">
                            <div className="flex-none lg:hidden">
                                <label
                                    htmlFor="my-drawer-3"
                                    aria-label="open sidebar"
                                    className="btn btn-square btn-ghost"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-6 w-6 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </label>
                            </div>
                            <div className="mx-2 flex-1 px-2">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className="w-20 hidden lg:block"
                                />
                            </div>
                            <div className="hidden flex-none lg:block">
                                <ul className="menu menu-horizontal flex flex-row content-center">
                                    <li className="text-center">
                                        <Link href="/" className={`font-semibold text-lg ${line==0? " underline underline-offset-4":""}`} onClick={()=>{setLine(0)}}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className={`font-semibold text-lg ${line==1? " underline underline-offset-4":""}`} onClick={()=>{setLine(1)}}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="service" className={`font-semibold text-lg ${line==2? " underline underline-offset-4":""}`} onClick={()=>{setLine(2)}}>
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="contact" className={`font-semibold text-lg ${line==3? " underline underline-offset-4":""}`} onClick={()=>{setLine(3)}}>
                                            Contact Us
                                        </Link>
                                    </li>
                                    {/* <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-semibold transition duration-200 ease-linear">
                                        Get Help
                                    </button> */}
                                    <Modal/>                            
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer-3"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu bg-base-200 min-h-full w-80 p-4 gap-4">
                            <div>
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className="w-20 m-5"
                                />
                            </div>
                            <li className="text-center">
                                <Link href="/" className={`font-semibold text-lg ${line==0? " underline underline-offset-4":""}`} onClick={()=>{setLine(0)}}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={`font-semibold text-lg ${line==1? " underline underline-offset-4":""}`} onClick={()=>{setLine(1)}}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/service" className={`font-semibold text-lg ${line==2? " underline underline-offset-4":""}`} onClick={()=>{setLine(2)}}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className={`font-semibold text-lg ${line==3? " underline underline-offset-4":""}`} onClick={()=>{setLine(3)}}>
                                    Contact Us
                                </Link>
                            </li>
                            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-semibold transition duration-200 ease-linear">
                                Get Help
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
