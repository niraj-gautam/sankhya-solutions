import { useParams } from "react-router-dom";
import { content } from "../data/content";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const IndustryPage = () => {
    const { id } = useParams();
    const industry = content.industries.find((s) => s.id.toString() === id);

    if (!industry) {
        return <div>Industry not found</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="max-w-7xl mx-auto px-4 pt-32 pb-24 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-12 lg:text-5xl">
                        {industry.title}
                    </h1>
                    <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
                        {industry.heading1}
                    </p>
                </div>

                <div className="mb-12">
                    <p className="text-lg  text-gray-600 text-center max-w-4xl mx-auto ">
                        {industry.heading2}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {industry.challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="flex-1 min-w-[280px] max-w-[300px] flex flex-col items-center text-center p-6 transition-all duration-300 hover:transform hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 mb-6 text-orange-500">
                                <challenge.icon size={64} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {challenge.title}
                            </h3>
                            <p className="text-gray-600">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                        See how we make it happen
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};
