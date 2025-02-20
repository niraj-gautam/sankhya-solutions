import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { content } from "../data/content";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide((prev) => (prev + 1) % content.heroData.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide(
                (prev) =>
                    (prev - 1 + content.heroData.length) %
                    content.heroData.length
            );
            setTimeout(() => setIsTransitioning(false), 500);
        }
    }, [isTransitioning]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <div
            className="relative w-full overflow-hidden "
            style={{
                height: "100vh",
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Slides */}
            {content.heroData.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transform duration-300 ease-in-out ${
                        index === currentSlide
                            ? "translate-x-0 z-10"
                            : index < currentSlide
                            ? "-translate-x-full z-0"
                            : "translate-x-full z-0"
                    }`}
                    style={{
                        transition: "transform 300ms ease-in-out",
                    }}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-full object-cover "
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center ">
                        <div className=" mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 ">
                                    {slide.title}
                                </h1>
                                <p className="text-lg  font-normal text-gray-200 mb-12 max-w-2xl mx-auto ">
                                    {slide.description}
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-3  text-base font-medium rounded-xl text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300 shadow-md  "
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows - Hidden on mobile */}
            <button
                onClick={prevSlide}
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 z-20"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-8 w-8 text-white" />
            </button>
            <button
                onClick={nextSlide}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 z-20 "
                aria-label="Next slide"
            >
                <ChevronRight className="h-8 w-8 text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {content.heroData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300  ${
                            index === currentSlide ? "bg-white" : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
