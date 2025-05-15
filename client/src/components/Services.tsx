import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "../data/content";

// Reuse animation config for consistency
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
    hover: {
        hover: { y: -5, scale: 1.02 },
        tap: { scale: 0.98 },
        transition: { type: "spring", stiffness: 300 },
    },
};

export function Services() {
    return (
        <motion.section
            id="services"
            className="py-14 bg-gray-50"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={animationConfig.section}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.h2
                        className="text-3xl font-bold text-gray-900 sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Comprehensive solutions tailored to your organization's
                        needs
                    </motion.p>
                </div>

                <div className="mt-20">
                    <div className="flex flex-wrap justify-center gap-8">
                        {content.services.map((service, index) => {
                            const Icon =
                                LucideIcons[
                                    service.icon as keyof typeof LucideIcons
                                ];
                            return (
                                <motion.div
                                    key={service.id}
                                    className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-24px)]"
                                    variants={animationConfig.item}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    transition={{
                                        ...animationConfig.item.transition,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <Link to={`/services/${service.id}`}>
                                        <motion.div
                                            className="h-full bg-gray-50 rounded-lg shadow-md p-6  flex flex-col relative overflow-hidden"
                                            whileHover="hover"
                                            whileTap="tap"
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{
                                                once: true,
                                                margin: "-100px",
                                            }}
                                            transition={{
                                                staggerChildren: 0.2,
                                            }}
                                            variants={animationConfig.hover}
                                        >
                                            {/* Hover overlay effect */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-300" />

                                            <div className="text-orange-600 motion-safe:transition-colors group-hover:text-orange-500 duration-300 mb-4 z-10">
                                                <Icon className="h-8 w-8" />
                                            </div>

                                            <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-white motion-safe:transition-colors duration-300 z-10">
                                                {service.title}
                                            </h3>

                                            {/* Fixed height container for description */}
                                            <div className="min-h-[100px] z-10">
                                                <p className="text-gray-500 group-hover:text-white/90 motion-safe:transition-colors duration-300 line-clamp-5 z-10">
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* Animated chevron - now in a fixed position */}
                                            <motion.div
                                                className="ml-auto text-orange-600 group-hover:text-white"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                }}
                                            >
                                                <LucideIcons.ChevronRight className="h-6 w-6" />
                                            </motion.div>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
