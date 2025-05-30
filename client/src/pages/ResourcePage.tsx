import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { fetchArticles } from "../services/api";
import { format } from "date-fns";

export function ResourcePage() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadArticlesData = async () => {
            setLoading(true);
            try {
                const response = await fetchArticles();

                // Extract the slides array from the response
                const articles = response || [];

                setArticles(articles);
            } catch (error) {
                console.error("Error loading hero data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadArticlesData();
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <div className=" flex-grow pt-36 pb-20">
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
                        {articles.map((article) => {
                            // Strapi API returns a image URL
                            const articleImage = `${
                                import.meta.env.VITE_ASSETS_URL
                            }${article.image.path}`;

                            return loading ? (
                                <div>Loading articles...</div>
                            ) : (
                                <div
                                    key={article.id}
                                    className="flex flex-col lg:flex-row gap-8 bg-white rounded-lg shadow-md overflow-hidden"
                                >
                                    <div className="lg:w-1/3">
                                        <img
                                            className="h-64 w-full object-cover lg:h-full"
                                            src={articleImage}
                                            alt={article.title}
                                        />
                                    </div>
                                    <div className="flex-1 p-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4 transition-colors">
                                            {article.title}
                                        </h2>
                                        <p className="text-gray-600 mb-6">
                                            {article.description}{" "}
                                            {/* Assuming you have a description field */}
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-center text-gray-400">
                                                <span className="ml-2">
                                                    {format(
                                                        new Date(
                                                            article.publishedDate
                                                        ),
                                                        "MMMM dd, yyyy"
                                                    )}
                                                </span>
                                            </div>
                                            <Link
                                                to={`/resources/${article.slug}`}
                                                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
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
            </div>
            <Footer />
        </div>
    );
}
