import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { content } from "../data/content";
import { Link } from "react-router-dom";

const animationConfig = {
    button: {
        hover: { scale: 1.05, y: -2 },
        tap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 300 },
    },
    indicator: {
        hover: { scale: 1.2 },
        tap: { scale: 0.8 },
        transition: { duration: 0.2 },
    },
};

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");
    const autoplayDelay = 5000; // 5 seconds
    const autoplayTimerRef = useRef<NodeJS.Timeout>();

    const nextSlide = useCallback(() => {
        setDirection("right");
        setCurrentSlide((prev) => (prev + 1) % content.heroData.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection("left");
        setCurrentSlide(
            (prev) =>
                (prev - 1 + content.heroData.length) % content.heroData.length
        );
    }, []);

    // Always setup autoplay without pause logic
    useEffect(() => {
        autoplayTimerRef.current = setInterval(nextSlide, autoplayDelay);
        return () => {
            if (autoplayTimerRef.current) {
                clearInterval(autoplayTimerRef.current);
            }
        };
    }, [nextSlide]);

    return (
        <div className="relative w-full overflow-hidden h-screen bg-black">
            <AnimatePresence initial={false} custom={direction}>
                {content.heroData.map(
                    (slide, index) =>
                        index === currentSlide && (
                            <motion.div
                                key={slide.id}
                                custom={direction}
                                variants={{
                                    enter: (direction: string) => ({
                                        x:
                                            direction === "right"
                                                ? "100%"
                                                : "-100%",
                                        opacity: 0,
                                    }),
                                    center: { x: "0%", opacity: 1 },
                                    exit: (direction: string) => ({
                                        x:
                                            direction === "right"
                                                ? "-100%"
                                                : "100%",
                                        opacity: 0,
                                    }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 w-full h-full"
                            >
                                {/* Background Image with subtle scale animation */}
                                <motion.div
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 8, ease: "linear" }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-60" />
                                </motion.div>

                                {/* Content with staggered animations */}
                                <div className="relative h-full flex items-center">
                                    <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-center"
                                        >
                                            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8">
                                                {slide.title}
                                            </h1>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="text-lg font-normal text-gray-200 mb-12 max-w-2xl mx-auto"
                                            >
                                                {slide.description}
                                            </motion.p>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                <Link
                                                    to="/contact"
                                                    className="inline-flex items-center px-8 py-3 text-base font-medium rounded-xl text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300 shadow-md"
                                                >
                                                    Get Started
                                                    <ArrowRight className="ml-2 h-5 w-5" />
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
                <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={animationConfig.button}
                    onClick={prevSlide}
                    className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-8 w-8 text-white" />
                </motion.button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
                <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={animationConfig.button}
                    onClick={nextSlide}
                    className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-8 w-8 text-white" />
                </motion.button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {content.heroData.map((_, index) => (
                    <motion.button
                        key={index}
                        whileHover="hover"
                        whileTap="tap"
                        variants={animationConfig.indicator}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === currentSlide ? "bg-white" : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
