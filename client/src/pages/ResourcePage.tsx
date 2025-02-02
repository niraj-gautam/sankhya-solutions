import React from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { content } from "../data/content";

export function ResourcePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                            Resources
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Explore our success stories and learn how we've
                            helped organizations achieve their goals
                        </p>
                    </div>

                    <div className="grid gap-12">
                        {content.resources.map((study) => (
                            <div
                                key={study.id}
                                className="flex flex-col lg:flex-row gap-8 bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className="lg:w-1/3">
                                    <img
                                        className="h-64 w-full object-cover lg:h-full"
                                        src={study.image}
                                        alt={study.title}
                                    />
                                </div>
                                <div className="flex-1 p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        {study.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        {study.description}
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center text-[#303392]">
                                            <span className="font-semibold">
                                                Results:
                                            </span>
                                            <span className="ml-2">
                                                {study.results}
                                            </span>
                                        </div>
                                        <button className="inline-flex items-center text-[#303392] hover:text-[#252a75] font-medium">
                                            Read full article
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <Contact />
                </div>
            </div>
        </div>
    );
}
