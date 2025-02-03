import React from "react";
import { useParams } from "react-router-dom";
import { content } from "../data/content";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

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
            <div className="pt-28 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link
                            to="/resources"
                            className="inline-flex items-center text-[#35389d] hover:text-[#000000] font-medium transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Resources
                        </Link>
                    </div>

                    <header className="mb-8">
                        <div className=" overflow-hidden rounded-lg shadow-lg mb-8 prose prose-lg mx-auto">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {article.title}
                        </h1>

                        <div className="flex items-center text-gray-500">
                            <span className="font-medium text-gray-900">
                                {article.author}
                            </span>
                            <span className="mx-2">·</span>
                            {format(
                                new Date(article.publishedDate),
                                "MMMM dd, yyyy"
                            )}
                        </div>
                    </header>

                    <div className="prose prose-indigo max-w-none">
                        {article.articleContent}
                    </div>
                </div>

                <div className="mt-20">
                    <Contact />
                </div>
            </div>
        </div>
    );
}
