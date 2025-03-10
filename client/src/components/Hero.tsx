import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchHeroSlides } from "../services/api";

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
    const [heroData, setHeroData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState("right");
    const autoplayDelay = 5000; // 5 seconds
    const autoplayTimerRef = useRef();

    useEffect(() => {
        const loadHeroData = async () => {
            setLoading(true);
            try {
                const response = await fetchHeroSlides();
                console.log("Data from Strapi:", response);

                // Extract the slides array from the response
                const slides = response.data || [];

                // Sort by order field if available
                const sortedSlides = slides.sort(
                    (a, b) => (a.Order || 0) - (b.Order || 0)
                );
                setHeroData(sortedSlides);
            } catch (error) {
                console.error("Error loading hero data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadHeroData();
    }, []);

    const nextSlide = useCallback(() => {
        if (heroData.length === 0) return;
        setDirection("right");
        setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, [heroData]);

    const prevSlide = useCallback(() => {
        if (heroData.length === 0) return;
        setDirection("left");
        setCurrentSlide(
            (prev) => (prev - 1 + heroData.length) % heroData.length
        );
    }, [heroData]);

    // Always setup autoplay without pause logic
    useEffect(() => {
        if (heroData.length <= 1) return;

        autoplayTimerRef.current = setInterval(nextSlide, autoplayDelay);
        return () => {
            if (autoplayTimerRef.current) {
                clearInterval(autoplayTimerRef.current);
            }
        };
    }, [nextSlide, heroData]);

    if (loading) {
        return (
            <div className="w-full h-screen bg-black flex items-center justify-center">
                <p className="text-white">Loading...</p>
            </div>
        );
    }

    if (heroData.length === 0) {
        return (
            <div className="w-full h-screen bg-black flex items-center justify-center">
                <p className="text-white">No hero slides available</p>
            </div>
        );
    }

    return (
        <div className="relative w-full overflow-hidden h-screen bg-black">
            <AnimatePresence initial={false} custom={direction}>
                {heroData.map(
                    (slide, index) =>
                        index === currentSlide && (
                            <motion.div
                                key={slide.id}
                                custom={direction}
                                variants={{
                                    enter: (direction) => ({
                                        x:
                                            direction === "right"
                                                ? "100%"
                                                : "-100%",
                                        opacity: 0,
                                    }),
                                    center: { x: "0%", opacity: 1 },
                                    exit: (direction) => ({
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
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            duration: 8,
                                            ease: "linear",
                                        }}
                                        className="absolute inset-0 "
                                    >
                                        {slide.Image &&
                                        slide.Image.length > 0 ? (
                                            <img
                                                src={`${
                                                    import.meta.env
                                                        .VITE_STRAPI_API_URL ||
                                                    "http://localhost:1337"
                                                }${slide.Image[0].url}`}
                                                alt={slide.Alt || slide.Title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-800"></div>
                                        )}
                                        <div className="absolute inset-0 bg-black bg-opacity-60" />
                                    </motion.div>
                                </AnimatePresence>

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
                                                {slide.Title}
                                            </h1>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="text-lg font-normal text-gray-200 mb-12 max-w-2xl mx-auto"
                                            >
                                                {slide.Description}
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
            {heroData.length > 1 && (
                <>
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
                        {heroData.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover="hover"
                                whileTap="tap"
                                variants={animationConfig.indicator}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index === currentSlide
                                        ? "bg-white"
                                        : "bg-white/50"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
