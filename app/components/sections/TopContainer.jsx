import React from 'react';
import TextDetails from './TextDetails';
import Image from 'next/image';


export default function TopContainer() {
    return (
        <div className='w-full sm:h-[900px] lg:h-[540px] gradient-background overflow-hidden flex items-center content-center'>
            <TextDetails/>
        </div>
    )
}
