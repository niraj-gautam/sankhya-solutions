import React from "react";
import { Target, Eye } from "lucide-react";

export const AboutCards = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                        alt="Team collaborating"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                        <Target className="h-6 w-6 text-ofrange-600" />
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Our Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Empowering organizations to{" "}
                        <span className="text-orange-500">
                            leverage data-driven insights
                        </span>{" "}
                        for smarter, more informed decision-making.
                    </p>
                </div>
            </div>

            {/* Vision Card */}
            <div className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80"
                        alt="Future technology concept"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                        <Eye className="h-6 w-6 text-orange-600" />
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Our Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        To be a{" "}
                        <span className="text-orange-500">
                            leading hub for data science, AI, and machine
                            learning solutions
                        </span>
                        , driving innovation and transformative impact across
                        industries.
                    </p>
                </div>
            </div>
        </div>
    );
};
