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

    return (
        <section id="about" className="pt-10 pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
                        {content.about.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto italic">
                        " {content.company.tagline} "
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="relative">
                        <img
                            src={content.about.image}
                            alt="Market Research"
                            className="rounded-lg shadow-lg object-cover w-full h-[55vh]"
                            loading="eager"
                            decoding="sync"
                        />
                    </div>
                    <motion.div
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p
                            className="text-md text-gray-600 leading-relaxed"
                            variants={textVariants}
                        >
                            <span className="text-orange-500 font-semibold">
                                {" "}
                                {content.company.name}{" "}
                            </span>
                            {content.about.description}
                        </motion.p>
                        <motion.p
                            className="text-md text-gray-600 leading-relaxed"
                            variants={textVariants}
                        >
                            {content.about.history}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
