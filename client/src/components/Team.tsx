import React, { useState, useEffect } from "react";
import { X, Linkedin, Twitter, Instagram } from "lucide-react";
import { teamMembers, TeamMember } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";

const TeamMemberCard: React.FC<{
    member: TeamMember;
    onClick: () => void;
}> = ({ member, onClick }) => {
    const [showViewProfile, setShowViewProfile] = useState(false);

    // Function to handle mobile touch and click behavior
    const handleImageClick = () => {
        if (window.innerWidth <= 768) {
            // If on mobile, toggle the "View Profile" text
            if (!showViewProfile) {
                setShowViewProfile(true);
                return;
            }
        }
        // If already showing view profile or if on desktop, proceed to open modal
        onClick();
    };

    // Reset showViewProfile state when user clicks elsewhere
    useEffect(() => {
        const handleClickOutside = () => {
            setShowViewProfile(false);
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Prevent the click outside handler from triggering when clicking the image
    const handleCardClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleImageClick();
    };

    return (
        <div className="flex flex-col items-center mb-10">
            <div
                className="relative w-56 h-56 mb-4 rounded-full overflow-hidden border-2 border-gray-400 hover:border-orange-500 transition-all duration-300 cursor-pointer group"
                onClick={handleCardClick}
            >
                <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                />
                <div
                    className={`absolute inset-0 bg-black ${
                        showViewProfile
                            ? "bg-opacity-30"
                            : "bg-opacity-0 group-hover:bg-opacity-30"
                    } transition-all duration-300 flex items-center justify-center`}
                >
                    <span
                        className={`text-white ${
                            showViewProfile
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } font-semibold transition-opacity duration-300`}
                    >
                        View Profile
                    </span>
                </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        </div>
    );
};

const TeamMemberModal: React.FC<{
    member: TeamMember | null;
    onClose: () => void;
}> = ({ member, onClose }) => {
    useEffect(() => {
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
        };
    }, []);

    if (!member) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    {/* Sticky close button for mobile */}
                    <div className="sticky top-0 right-0 z-10 flex justify-end bg-white bg-opacity-90 p-4">
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 p-2 rounded-full bg-white shadow-md"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6 md:p-8 pt-0">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 flex justify-center">
                                <div className="w-48 h-48 mb-6 md:mb-0 rounded-full overflow-hidden border-4 border-gray-500">
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="md:w-3/4 md:pl-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                    {member.name}
                                </h2>
                                <p className="text-lg text-orange-600 mb-4">
                                    {member.position}
                                </p>

                                <div className="flex mb-6 space-x-4">
                                    {member.socialLinks.linkedin && (
                                        <a
                                            href={member.socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-orange-500"
                                        >
                                            <Linkedin size={20} />
                                        </a>
                                    )}
                                    {member.socialLinks.twitter && (
                                        <a
                                            href={member.socialLinks.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-orange-500"
                                        >
                                            <Twitter size={20} />
                                        </a>
                                    )}
                                    {member.socialLinks.instagram && (
                                        <a
                                            href={member.socialLinks.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-orange-500"
                                        >
                                            <Instagram size={20} />
                                        </a>
                                    )}
                                </div>

                                <div className="prose max-w-none text-gray-700 leading-relaxed">
                                    {member.bio
                                        .split("\n\n")
                                        .map((paragraph, index) => (
                                            <p key={index} className="mb-4">
                                                {paragraph}
                                            </p>
                                        ))}
                                    {member.education?.length > 0 && (
                                        <div className="mt-[-1rem]">
                                            <h3 className="font-normal text-lg text-gray-600">
                                                Education
                                            </h3>
                                            <ul className="list-disc list-inside text-gray-600 mt-2">
                                                {member.education.map(
                                                    (edu, index) => (
                                                        <li key={index}>
                                                            {edu}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export const OurTeam: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(
        null
    );

    const openModal = (member: TeamMember) => setSelectedMember(member);
    const closeModal = () => setSelectedMember(null);

    const isOddCount = teamMembers.length % 3 === 1;
    const lastItemIndex = teamMembers.length - 1;

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 sm:text-4xl">
                        The Team
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Meet the experts behind our success
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className={
                                isOddCount && index === lastItemIndex
                                    ? "col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center w-full"
                                    : ""
                            }
                        >
                            <TeamMemberCard
                                member={member}
                                onClick={() => openModal(member)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedMember && (
                    <TeamMemberModal
                        member={selectedMember}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
