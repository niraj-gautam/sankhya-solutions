import { motion } from "framer-motion";
import { Target, Star, Handshake } from "lucide-react";
import { content } from "../data/content";
import { Link } from "react-router-dom";

// Reuse consistent animation config
const animationConfig = {
    section: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    },
    item: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: "backOut" },
    },
    image: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
    },
    button: {
        hover: { scale: 1.05, y: -2 },
        tap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 300 },
    },
};

export default function LastMileSection() {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white"
            id="last-mile-section"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
        >
            {/* Left Image */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center"
                variants={animationConfig.image}
            >
                <motion.img
                    src={content.overview.image}
                    alt="Office Room"
                    className="rounded-lg shadow-lg object-cover h-[30vh] w-5/6 md:h-[70vh] lg:h-[75vh]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </motion.div>

            {/* Right Content */}
            <motion.div
                className="w-full md:w-1/2 mt-10 md:mt-0"
                variants={animationConfig.section}
            >
                <motion.h2
                    className="text-3xl font-bold text-gray-900"
                    variants={animationConfig.item}
                >
                    Powering last mile with industry-specific data science
                    solutions
                </motion.h2>

                <motion.p
                    className="mt-4 text-gray-600"
                    variants={animationConfig.item}
                >
                    At Sankhya Solutions, we bridge the gap between insights
                    delivery and value realization by enabling last-mile
                    adoption of data science.
                </motion.p>

                <motion.h3
                    className="mt-6 text-2xl font-semibold text-gray-900"
                    variants={animationConfig.item}
                >
                    What makes us unique
                </motion.h3>

                <motion.div
                    className="mt-6 space-y-6 my-6"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {[
                        {
                            icon: Target,
                            text: "Speed to action through accelerators",
                        },
                        {
                            icon: Star,
                            text: "Speed to value through industry & functional expertise",
                        },
                        {
                            icon: Handshake,
                            text: "Speed to scale through deep Data & AI partnerships",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center space-x-4"
                            variants={animationConfig.item}
                        >
                            <item.icon className="text-orange-600" size={36} />
                            <span className="text-lg font-medium text-gray-600">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={animationConfig.item}>
                    <Link
                        to="/about"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
                    >
                        <motion.span
                            whileHover="hover"
                            whileTap="tap"
                            variants={animationConfig.button}
                            className="flex items-center"
                        >
                            Learn More
                        </motion.span>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
