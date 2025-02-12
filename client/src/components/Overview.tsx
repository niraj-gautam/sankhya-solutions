import { useEffect, useState } from "react";
import { Target, Star, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { content } from "../data/content";

export default function LastMileSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("last-mile-section");
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white"
            id="last-mile-section"
        >
            {/* Left Image */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img
                    src={content.about.image}
                    alt="Professional Woman with Tablet"
                    className="rounded-lg shadow-lg  object-cover h-[30vh] w-5/6  md:h-[70vh] lg:h-[75vh]"
                />
            </motion.div>

            {/* Right Content */}
            <motion.div
                className="w-full md:w-1/2 mt-10 md:mt-0"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h2 className="text-3xl font-bold text-gray-900">
                    Powering last mile with industry-specific data science
                    solutions
                </h2>
                <p className="mt-4 text-gray-600">
                    At Sankhya Solutions, we bridge the gap between insights
                    delivery and value realization by enabling last-mile
                    adoption of data science.
                </p>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                    What makes us unique
                </h3>

                <div className="mt-6 space-y-6 my-6">
                    <div className="flex items-center space-x-4">
                        <Target className="text-orange-600" size={36} />
                        <span className="text-lg font-medium text-gray-600">
                            Speed to action through accelerators
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Star className="text-orange-600" size={36} />
                        <span className="text-lg font-medium text-gray-600">
                            Speed to value through industry & functional
                            expertise
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Handshake className="text-orange-600" size={36} />
                        <span className="text-lg font-medium text-gray-600">
                            Speed to scale through deep Data & AI partnerships
                        </span>
                    </div>
                </div>

                <button className="mt-8 bg-orange-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-gray-600 transition duration-300">
                    Explore our success stories
                </button>
            </motion.div>
        </div>
    );
}
