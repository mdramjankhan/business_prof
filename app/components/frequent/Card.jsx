"use client"
import React from 'react';
import Image from 'next/image';
export default function Card({ title, desc, imgSource }) {
    return (
        <div className="card glass m-4 h-[500px]  "> {/* Removed size classes */}
            <figure>
                <Image
                    src={imgSource}
                    alt="product"
                    className={`w-full h-[230px] md:h-[250px]`}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Know More</button> */}
                    <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                        Know More
                    </button>
                </div>
            </div>
        </div>
    );
}