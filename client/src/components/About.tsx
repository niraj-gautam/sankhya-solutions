import { content } from "../data/content";
import { OurTeam } from "./Team";

export function About() {
    return (
        <section id="about" className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        {content.about.title}
                    </h2>
                    <p className="text-md text-gray-600 max-w-4xl mx-auto">
                        {content.about.mainText}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                    <div className="relative">
                        <img
                            src={content.about.image}
                            alt="Market Research"
                            className="rounded-lg shadow-lg object-cover w-full h-[55vh]"
                            loading="eager"
                            decoding="sync"
                        />
                    </div>
                    <div className="space-y-4">
                        <p className="text-md text-gray-600 leading-relaxed">
                            {content.about.description}
                        </p>
                        <p className="text-md text-gray-600 leading-relaxed">
                            {content.about.approach}
                        </p>
                        <div className="mt-6 flex justify-center lg:justify-start">
                            <a
                                href="#contact"
                                className="inline-block bg-orange-700 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-600 transition-colors "
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
