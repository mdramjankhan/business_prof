"use client";
import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import Card from '../frequent/Card';
import dishtv from "../../../public/assets/images/dishTv.webp"
import airtel from "../../../public/assets/images/airted.jpg"
import tata from "../../../public/assets/images/tataplay.jpg"
import dd from "../../../public/assets/images/freedish.png"
import videocon from "../../../public/assets/images/d2h.jpg"
import sun from "../../../public/assets/images/sun.jpg"


export default function CarouselLane() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1, // Changed to 1 for smoother transitions
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1, // Changed to 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        }
    };


    const dthProviders = [
        {
            dishName: "Dish TV",
            description: "Get crystal-clear picture quality and a wide selection of channels with Dish TV.\nI can help you with new connections, troubleshooting, and repairs.",
            image: dishtv,
        },
        {
            dishName: "Airtel Digital TV",
            description: "Experience seamless entertainment with Airtel Digital TV's advanced features and reliable service.\nI provide installation, maintenance, and repair services.",
            image: airtel,
        },
        {
            dishName: "Sun Direct",
            description: "Enjoy a wide array of South Indian channels and quality entertainment with Sun Direct.\nI offer sales and expert technical support.",
            image: sun,
        },
        {
            dishName: "Videocon d2h",
            description: "Get great value and a wide selection of channels with Videocon d2h.\nI handle sales, installations, and any technical issues you may encounter.",
            image: videocon,
        },
        {
            dishName: "Tata Play",
            description: "Experience superior entertainment with Tata Play's innovative features and reliable service.\nI'm your one-stop shop for sales and expert technical assistance.",
            image: tata,
        },
        {
            dishName: "DD Free Dish",
            description: "Get access to free television channels with DD Free Dish.\nI can assist with installation and basic troubleshooting.",
            image: dd,
        },
        
    ];

    return (
        <div className="relative"> {/* Added relative positioning for dots */}
            <Carousel
                swipeable
                draggable
                showDots
                responsive={responsive}
                ssr
                infinite
                autoPlay
                autoPlaySpeed={3000} // Adjusted speed
                keyBoardControl
                customTransition="all .5s ease-in-out" // Corrected transition
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="overflow-hidden" // Prevents content overflow during transitions
            >

                    {dthProviders.map((provider, index) => (
                        <Card
                            key={index} // Important: Add a unique key
                            title={provider.dishName}
                            desc={provider.description}
                            imgSource={provider.image}
                        />
                    ))}
            </Carousel>
        </div>
    );
}