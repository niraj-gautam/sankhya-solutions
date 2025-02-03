import React from "react";
import { useParams } from "react-router-dom";
import { content } from "../data/content";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function ArticlePage() {
    const { articleTitle } = useParams();

    // Find the article by matching the slug
    const article = content.resources.find((r) => r.slug === articleTitle);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link
                            to="/resources"
                            className="inline-flex items-center text-[#303392] hover:text-[#252a75] font-medium transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Resources
                        </Link>
                    </div>

                    <div className="mb-16">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                            {article.title}
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                        <div className="prose prose-lg mx-auto">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="rounded-lg shadow-lg object-cover w-full h-auto mb-8"
                            />
                            <p>{article.articleContent}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <Contact />
                </div>
            </div>
        </div>
    );
}
