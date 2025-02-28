import React from "react";
import { Link, useParams } from "react-router-dom";
import { content } from "../data/content";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ServiceFeatures from "../components/ServiceFeatures";

export function ServicePage() {
    const { id } = useParams();
    const service = content.services.find((s) => s.id.toString() === id);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            {service.title}
                        </h1>
                    </div>

                    {/* Service Content */}
                    <div className="space-y-6">
                        <p className="text-gray-700 text-lg grid place-items-center">
                            {service.description}
                        </p>

                        <ServiceFeatures features={service.features} />

                        {/* Why Choose Us with illustration */}
                        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Why Choose Us List */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Why Choose Us
                                </h2>
                                <ul className="text-lg text-gray-700 space-y-4 list-disc pl-5 marker:text-orange-500">
                                    {service.whyChooseUs.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex justify-start">
                                    <Link
                                        to="/contact"
                                        className="inline-block bg-orange-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-orange-700 shadow-md transition-colors duration-300 no-underline"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative Illustration */}
                            <div className="flex justify-center h-[50vh]">
                                <img
                                    src={service.image}
                                    alt="Why Choose Us Illustration"
                                    className="rounded-2xl shadow-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
