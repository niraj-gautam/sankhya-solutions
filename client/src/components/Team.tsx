import React, { useState } from "react";
import { X, Linkedin, Twitter, Instagram } from "lucide-react";
import { teamMembers, TeamMember } from "../data/content";

const TeamMemberCard: React.FC<{
    member: TeamMember;
    onClick: () => void;
}> = ({ member, onClick }) => {
    return (
        <div className="flex flex-col items-center mb-10">
            <div
                className="relative w-56 h-56 mb-4 rounded-full overflow-hidden border-4 border-gray-600 hover:border-orange-500 transition-all duration-300 cursor-pointer group"
                onClick={onClick}
            >
                <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-semibold transition-opacity duration-300">
                        View Profile
                    </span>
                </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500 text-center max-w-xs">
                {member.position}
            </p>
        </div>
    );
};

const TeamMemberModal: React.FC<{
    member: TeamMember | null;
    onClose: () => void;
}> = ({ member, onClose }) => {
    if (!member) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
                <div className="relative p-6 md:p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        <X size={24} />
                    </button>

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

                                {/* Display Education Section if it exists */}
                                {member.education &&
                                    member.education.length > 0 && (
                                        <div className="mt-[-1rem]">
                                            <h3 className=" font-normal text-lg  text-gray-600">
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
            </div>
        </div>
    );
};

export const OurTeam: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(
        null
    );

    const openModal = (member: TeamMember) => {
        setSelectedMember(member);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedMember(null);
        document.body.style.overflow = "auto";
    };

    // Calculate number of team members to determine if we need special layout
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
                            className={`
              ${
                  isOddCount && index === lastItemIndex
                      ? "col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center w-full"
                      : ""
              }
            `}
                        >
                            <TeamMemberCard
                                member={member}
                                onClick={() => openModal(member)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedMember && (
                <TeamMemberModal member={selectedMember} onClose={closeModal} />
            )}
        </section>
    );
};
