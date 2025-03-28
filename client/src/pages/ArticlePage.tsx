import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Footer } from "../components/Footer";
import { fetchArticleBySlug } from "../services/api";
import { Header } from "../components/Header";
import DOMPurify from "dompurify";

export function ArticlePage() {
    const { articleSlug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true);
            setError(null);
            try {
                if (!articleSlug) {
                    // Handle case where articleSlug is still undefined
                    setError(new Error("Invalid article slug"));
                    return;
                }

                const fetchedArticle = await fetchArticleBySlug(articleSlug);
                if (fetchedArticle) {
                    setArticle(fetchedArticle);
                } else {
                    setError(new Error("Article not found"));
                }
            } catch (error) {
                setError(error);
                console.error("Error fetching article:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle(); // Call fetchArticle directly; no need for conditional
    }, [articleSlug]); // articleSlug is in the dependency array, so useEffect runs when it changes

    if (loading) {
        return <div>Loading article...</div>;
    }

    if (error) {
        return <div>Error loading article: {error.message}</div>;
    }

    if (!article) {
        return <div>Article not found</div>;
    }

    const articleImage = `${import.meta.env.VITE_STRAPI_API_URL}${
        article.Image[0].url
    }`;

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-28 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link
                            to="/resources"
                            className="inline-flex items-center text-gray-600 hover:text-orange-600 font-medium transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Resources
                        </Link>
                    </div>

                    <header className="mb-8">
                        <div className="overflow-hidden rounded-lg shadow-lg mb-8 prose prose-lg mx-auto">
                            <img
                                src={articleImage}
                                alt={article.Title || "Article Image"}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {article.Title}
                        </h1>

                        <div className="flex items-center text-gray-500">
                            <span className="font-medium text-gray-900">
                                {article.Author}
                            </span>
                            <span className="mx-2">·</span>
                            <span>
                                {format(
                                    new Date(article.PublishedDate),
                                    "MMMM dd, yyyy"
                                )}
                            </span>
                        </div>
                    </header>

                    <div className="prose prose-indigo max-w-none">
                        <div
                            className="prose prose-indigo max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(article.Content),
                            }}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
