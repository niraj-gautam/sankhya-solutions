import React from "react";
import { useParams } from "react-router-dom";
import { content } from "../data/content";
import { Header } from "../components/Header";

import { Footer } from "../components/Footer";

export function ServicePage() {
    const { id } = useParams();
    const service = content.services.find((s) => s.id.toString() === id);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-28 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            {service.title}
                        </h1>
                    </div>

                    {/* Service Content and Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-gray-700 text-lg">
                                {service.description}
                            </p>

                            <div className="space-y-4 mt-20">
                                <h2 className="text-2xl font-bold text-gray-900 mt-10">
                                    What We Provide
                                </h2>
                                <ul className="text-lg text-gray-700 space-y-4 list-disc pl-5 disc marker:text-orange-500">
                                    {service.whatWeProvide.map(
                                        (item, index) => (
                                            <li key={index}>
                                                <span className="text-orange-500 font-bold">
                                                    {item.title}
                                                </span>{" "}
                                                – {item.description}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900 mt-10">
                                    Why Choose Us
                                </h2>
                                <ul className="text-lg text-gray-700 space-y-4 list-disc pl-5 marker:text-orange-500">
                                    {service.whyChooseUs.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-12">
                                <a
                                    href="#contact"
                                    className="inline-block bg-orange-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-orange-600 shadow-md transition-colors duration-300 no-underline"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="lg:justify-self-end lg:top-28">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="rounded-lg shadow-lg object-cover w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
