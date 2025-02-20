import React from "react";
import { Users, Rocket, Brain } from "lucide-react";
import { content } from "../data/content";
import { Link } from "react-router-dom";

export const JoinUs = () => {
    return (
        <div className="relative bg-gray-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 transform -skew-y-6 bg-gradient-to-r from-orange-100 to-orange-50" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="mb-10 lg:mb-0">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <Users className="h-6 w-6 text-orange-500" />
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Join our team
                                </h2>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Celebrating diverse perspectives and innovative
                                ideas, we're always looking for fresh new talent
                                to work on the most pressing data science
                                challenges today. In turn, you get to unlock a
                                world of learning and growth opportunities at
                                every step.
                            </p>

                            <div className="space-y-4">
                                <Feature
                                    icon={
                                        <Brain className="h-5 w-5 text-orange-500" />
                                    }
                                    title="Innovation First"
                                    description="Work on cutting-edge data science projects that matter"
                                />
                                <Feature
                                    icon={
                                        <Rocket className="h-5 w-5 text-orange-500" />
                                    }
                                    title="Growth & Learning"
                                    description="Continuous learning opportunities and mentorship programs"
                                />
                            </div>

                            <Link
                                to="/contact"
                                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600  transition-colors duration-300"
                            >
                                Apply to our jobs
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:mt-0">
                        <div className="relative">
                            <img
                                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                                src={content.joinUs.image}
                                alt="Team collaboration"
                            />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Feature = ({ icon, title, description }) => (
    <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
            <div className="p-2 bg-orange-100 rounded-md">{icon}</div>
        </div>
        <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);
