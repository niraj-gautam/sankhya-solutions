import React from "react";
import { motion } from "framer-motion";
import { Users, Rocket, Brain, ChevronRight, Globe, Star } from "lucide-react";
import { content } from "../data/content";
import { Link } from "react-router-dom";

// Animation configuration
const animationConfig = {
    container: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.7, staggerChildren: 0.15 },
    },
    item: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
    },
    image: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, ease: "easeOut" },
    },
    button: {
        hover: { scale: 1.03, x: 3 },
        tap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 400 },
    },
};

export const JoinUs = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 transform -skew-y-6 bg-gradient-to-r from-orange-100 to-orange-50" />
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-orange-200 opacity-20" />
                <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border-4 border-orange-200 opacity-10" />
            </div>

            <motion.div
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={animationConfig.container}
            >
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left Content - With aligned heading */}
                    <motion.div className="mb-12 lg:mb-0 max-w-xl">
                        <div className="space-y-8">
                            <motion.div
                                variants={animationConfig.item}
                                className="flex items-center space-x-3"
                            >
                                <Users className="h-7 w-7 text-orange-500" />
                                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                    Join our team
                                </h2>
                            </motion.div>

                            <motion.p
                                variants={animationConfig.item}
                                className="text-lg text-gray-600 leading-relaxed"
                            >
                                Celebrating diverse perspectives and innovative
                                ideas, we're always looking for fresh new talent
                                to work on the most pressing data science
                                challenges today. In turn, you get to unlock a
                                world of learning and growth opportunities at
                                every step.
                            </motion.p>

                            <motion.div
                                variants={animationConfig.item}
                                className="space-y-5"
                            >
                                <Feature
                                    icon={
                                        <Brain className="h-5 w-5 text-orange-500" />
                                    }
                                    title="Innovation First"
                                    description="Work on cutting-edge data science projects that matter across industries"
                                />
                                <Feature
                                    icon={
                                        <Rocket className="h-5 w-5 text-orange-500" />
                                    }
                                    title="Growth & Learning"
                                    description="Continuous learning opportunities and mentorship programs"
                                />
                            </motion.div>

                            <motion.div variants={animationConfig.item}>
                                <Link
                                    to="/contact"
                                    className="mt-6 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300"
                                >
                                    Join Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Image - Enhanced with animation and styling */}
                    <motion.div
                        className="relative"
                        variants={animationConfig.image}
                    >
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-100 rounded-lg opacity-70 -z-10 transform rotate-12" />

                            {/* Main image */}
                            <motion.img
                                className="rounded-xl shadow-xl w-full object-cover h-[550px]"
                                src={content.joinUs.image}
                                alt="Team collaboration"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

const Feature = ({ icon, title, description }) => (
    <motion.div
        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-300"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <div className="flex-shrink-0">
            <div className="p-3 bg-orange-100 rounded-lg shadow-sm">{icon}</div>
        </div>
        <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
        </div>
    </motion.div>
);
