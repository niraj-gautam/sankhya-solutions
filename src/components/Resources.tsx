import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "../data/content";

export function Resources() {
    // Get only the two latest resources
    const latestResources = content.resources.slice(0, 2);

    return (
        <section id="resources" className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Resources
                    </h2>
                    <p className="mt-4 max-w-2cxl mx-auto text-xl text-gray-500">
                        Real results from real clients
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {latestResources.map((study) => (
                        <div
                            key={study.id}
                            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="flex-shrink-0">
                                <img
                                    className="h-48 w-full object-cover"
                                    src={study.image}
                                    alt={study.title}
                                />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {study.title}
                                    </h3>
                                    <p className="mt-3 text-base text-gray-500">
                                        {study.description}
                                    </p>
                                    <p className="mt-3 text-sm font-medium text-blue-600">
                                        {study.results}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <Link
                                        to={`/resources`}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-500"
                                    >
                                        Learn more
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/resources"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#303392] hover:bg-[#252a75] transition-colors"
                    >
                        View All Resources
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
