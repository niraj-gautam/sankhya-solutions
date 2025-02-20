import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div
        className="bg-white rounded-3xl p-8 shadow-lg h-full flex flex-col items-center text-center"
        whileHover={{
            scale: 1.05,
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        <div className="bg-orange-50 rounded-full p-6 mb-6">
            <Icon className="w-6 h-6 text-orange-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const ServiceFeatures = ({ features }) => {
    // Determine grid columns based on number of features
    const getGridCols = (count) => {
        if (count === 1) return "grid-cols-1";
        if (count === 2) return "grid-cols-1 md:grid-cols-2";
        if (count === 3) return "grid-cols-1 md:grid-cols-3";
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    };

    // Calculate maximum width based on number of features
    const getMaxWidth = (count) => {
        if (count === 1) return "max-w-xl";
        if (count === 2) return "max-w-3xl";
        if (count === 3) return "max-w-5xl";
        return "max-w-7xl";
    };

    return (
        <div className="py-16">
            <h2 className="text-4xl font-bold text-center mb-16">
                What We Provide
            </h2>
            <div className={`flex justify-center w-full px-4`}>
                <div className={`${getMaxWidth(features.length)} w-full`}>
                    <div
                        className={`grid ${getGridCols(features.length)} gap-8`}
                    >
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFeatures;
