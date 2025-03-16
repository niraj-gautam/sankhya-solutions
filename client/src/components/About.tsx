import {
    Blend,
    Handshake,
    PersonStanding,
    Replace,
    ShieldCheck,
    Telescope,
} from "lucide-react";
import { content } from "../data/content";
import { motion } from "framer-motion";

export function About() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const textVariants = {
        hidden: {
            opacity: 0,
            x: 50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

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

    const values = [
        {
            icon: ShieldCheck,
            title: "Integrity",
        },
        {
            icon: Telescope,
            title: "Innovation",
        },
        {
            icon: Handshake,
            title: "Collaboration",
        },
        {
            icon: Replace,
            title: "Agility",
        },
        {
            icon: PersonStanding,
            title: "Customer Centricity",
        },
        {
            icon: Blend,
            title: "Transparency",
        },
    ];

    // Split values into two columns
    const leftColumnValues = values.slice(0, 3);
    const rightColumnValues = values.slice(3);

    return (
        <section id="about" className="pt-10 pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
                        {content.about.title}
                    </h2>
                </div>

                {/* Grid container with equal height columns for non-mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left column - Image */}
                    <div className="relative h-full flex lg:items-stretch">
                        <div className="w-full h-full">
                            <img
                                src={content.about.image}
                                alt="Market Research"
                                className="rounded-lg shadow-lg object-cover w-full h-full lg:h-auto lg:min-h-full"
                                loading="eager"
                                decoding="sync"
                            />
                        </div>
                    </div>

                    {/* Right column - Content */}
                    <motion.div
                        className="space-y-4 h-full flex flex-col"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p
                            className="text-md text-gray-600 leading-relaxed text-justify"
                            variants={textVariants}
                        >
                            <span className="text-orange-500 font-semibold">
                                {" "}
                                {content.company.name}{" "}
                            </span>
                            {content.about.history}
                        </motion.p>

                        <motion.div
                            className="mt-8 flex-grow"
                            variants={animationConfig.section}
                        >
                            <motion.h3
                                className="text-xl font-semibold text-gray-600 mb-3"
                                variants={animationConfig.item}
                            >
                                Our Values
                            </motion.h3>

                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5"
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ staggerChildren: 0.15 }}
                            >
                                {/* Left Column */}
                                <div className="space-y-5">
                                    {leftColumnValues.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center space-x-4 rounded-lg hover:bg-orange-50 transition-colors duration-300 p-2"
                                            variants={animationConfig.item}
                                            whileHover={{ x: 5 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="p-3 bg-orange-100 rounded-lg shadow-sm">
                                                    <item.icon className="h-5 w-5 text-orange-500" />
                                                </div>
                                            </div>
                                            <div className="flex items-center h-full">
                                                <h4 className="font-semibold text-gray-900">
                                                    {item.title}
                                                </h4>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Right Column */}
                                <div className="space-y-5">
                                    {rightColumnValues.map((item, index) => (
                                        <motion.div
                                            key={index + 3}
                                            className="flex items-center space-x-4 rounded-lg hover:bg-orange-50 transition-colors duration-300 p-2"
                                            variants={animationConfig.item}
                                            whileHover={{ x: 5 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="p-3 bg-orange-100 rounded-lg shadow-sm">
                                                    <item.icon className="h-5 w-5 text-orange-500" />
                                                </div>
                                            </div>
                                            <div className="flex items-center h-full">
                                                <h4 className="font-semibold text-gray-900">
                                                    {item.title}
                                                </h4>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
