import React from "react";
import * as LucideIcons from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "../data/content";

export function Services() {
    return (
        <section id="services" className="py-14 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Comprehensive solutions tailored to your organization's
                        needs
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {content.services.map((service) => {
                            const Icon =
                                LucideIcons[
                                    service.icon as keyof typeof LucideIcons
                                ];
                            return (
                                <Link
                                    key={service.id}
                                    to={`/services/${service.id}`}
                                    className="group block h-full"
                                >
                                    <div className="h-full bg-white rounded-lg shadow-sm p-6 group-hover:bg-gray-600 transition-all duration-300 ease-in-out flex flex-col">
                                        <div className="text-orange-600 transition-colors group-hover:text-orange-600 duration-300 mb-4">
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 line-clamp-5">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
