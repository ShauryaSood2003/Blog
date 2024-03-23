import { useState } from 'react';
import { carouselImages } from '../../config';
const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Set the initial active index


    const handlePrev = () => {
        setActiveIndex(prevIndex => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1)); // Handle previous button click
    };

    const handleNext = () => {
        setActiveIndex(prevIndex => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1)); // Handle next button click
    };

    return (
        <div id="controls-carousel" className="relative w-[100%] " data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {carouselImages.map((imageUrl, index) => (
                    <div key={index} className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`} data-carousel-item={index === activeIndex ? 'active' : ''}>
                        <img src={imageUrl} className="absolute block w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Carousel Image ${index + 1}`} />
                    </div>
                ))}
            </div>

            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrev}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                    <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNext}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
