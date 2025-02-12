import React from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { content } from "../data/content";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

// Function to create a URL-friendly slug from a title
export const createSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-"); // collapse dashes
};

export function ResourcePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-28 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Resources
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Checkout all the articles we have published
                            regarding our work.
                        </p>
                    </div>

                    <div className="grid gap-12">
                        {content.resources.map((study) => {
                            const articleSlug = createSlug(study.title);
                            return (
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
                                        <h2 className="text-2xl font-bold text-orange-700 mb-4  transition-colors">
                                            {study.title}
                                        </h2>

                                        <p className="text-gray-600 mb-6">
                                            {study.description}
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-center text-gray-400">
                                                <span className="ml-2">
                                                    {study.publishedDate}
                                                </span>
                                            </div>
                                            <Link
                                                to={`/resources/${articleSlug}`}
                                                className="inline-flex items-center text-gray-600 hover:text-orange-600 font-medium transition-colors"
                                            >
                                                Read full article
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-20">
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    );
}
