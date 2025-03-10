import { motion } from "framer-motion";
import { Target, Star, Handshake, ChevronRight } from "lucide-react";
import { content } from "../data/content";
import { Link } from "react-router-dom";

// Refined animation configuration
const animationConfig = {
    section: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
    },
    item: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
    },
    image: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.9, ease: "easeOut" },
    },
    button: {
        hover: { scale: 1.03, y: -2 },
        tap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 400 },
    },
    feature: {
        hover: { x: 5 },
        transition: { type: "spring", stiffness: 300 },
    },
};

export default function LastMileSection() {
    return (
        <motion.section
            className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white to-gray-50"
            id="last-mile-section"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.15 }}
        >
            {/* Left Image - now full height and width */}
            <motion.div
                className="w-full md:w-1/2 md:pr-8 lg:pr-12"
                variants={animationConfig.image}
            >
                <div className="relative h-full w-full">
                    {/* Decorative element behind image */}
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full opacity-70 -z-10" />

                    <img
                        src={content.overview.image}
                        alt="Data Science Solutions Visualization"
                        className="rounded-xl shadow-xl object-cover w-full h-[50vh] md:h-[80vh] border border-gray-100"
                    />

                    {/* Decorative element in corner */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-60 -z-10" />
                </div>
            </motion.div>

            {/* Right Content - kept the same as previous version */}
            <motion.div
                className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-8"
                variants={animationConfig.section}
            >
                <div className="max-w-xl">
                    <motion.span
                        className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4"
                        variants={animationConfig.item}
                    >
                        Our Approach
                    </motion.span>

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                        variants={animationConfig.item}
                    >
                        Powering last mile with industry-specific data science
                        solutions
                    </motion.h2>

                    <motion.p
                        className="mt-5 text-lg text-gray-600 leading-relaxed"
                        variants={animationConfig.item}
                    >
                        At Sankhya Solutions, we bridge the gap between insights
                        delivery and value realization by enabling last-mile
                        adoption of data science in your business context.
                    </motion.p>

                    <motion.h3
                        className="mt-5 text-xl font-semibold text-gray-800"
                        variants={animationConfig.item}
                    >
                        What makes us unique
                    </motion.h3>

                    <motion.div
                        className="mt-6 space-y-5 my-8"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        {[
                            {
                                icon: Target,
                                title: "Speed to action",
                                text: "Accelerate implementation through our proprietary solution accelerators",
                            },
                            {
                                icon: Star,
                                title: "Speed to value",
                                text: "Maximize ROI through deep industry & functional expertise",
                            },
                            {
                                icon: Handshake,
                                title: "Speed to scale",
                                text: "Expand capabilities through our strategic Data & AI partnerships",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start space-x-4 rounded-lg hover:bg-orange-50 transition-colors duration-300"
                                variants={animationConfig.item}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-orange-100 rounded-lg shadow-sm">
                                        <item.icon className="h-5 w-5 text-orange-500" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 mt-1">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={animationConfig.item}
                        className="mt-8"
                    >
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 shadow-sm transition-colors duration-300"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
}
