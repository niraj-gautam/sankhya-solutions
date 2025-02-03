import React, { useEffect } from "react";
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    arrow,
    Placement,
} from "@floating-ui/react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { content } from "../data/content";

// Define interfaces for the team member data structure
interface Social {
    linkedin: string;
    twitter: string;
    email: string;
}

interface TeamMember {
    id: string | number;
    name: string;
    position: string;
    description: string;
    image: string;
    social: Social;
}

interface TeamMemberCardProps {
    member: TeamMember;
    index: number;
    isEven: boolean;
    totalMembers: number;
}

export function About() {
    useEffect(() => {
        const handleScroll = () => {
            document.documentElement.style.scrollBehavior = "smooth";
            requestAnimationFrame(() => {
                document.documentElement.style.scrollBehavior = "auto";
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const teamMembers = content.team as TeamMember[];
    const isEven = teamMembers.length % 2 === 0;

    return (
        <section id="about" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                        {content.about.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        {content.about.mainText}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img
                            src={content.about.image}
                            alt="Market Research"
                            className="rounded-lg shadow-lg object-cover w-full h-[300px]"
                            loading="eager"
                            decoding="sync"
                        />
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {content.about.description}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {content.about.approach}
                        </p>
                        <div className="mt-6">
                            <a
                                href="#contact"
                                className="inline-block bg-[#303392] text-white px-8 py-3 rounded-md font-medium hover:bg-[#252a75] transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 bg">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Our Team
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Meet the experts behind our success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={member.id}
                                member={member}
                                index={index}
                                isEven={isEven}
                                totalMembers={teamMembers.length}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TeamMemberCard({
    member,
    index,
    isEven,
    totalMembers,
}: TeamMemberCardProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const arrowRef = React.useRef<HTMLDivElement>(null);
    const isTouchDevice = !window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;

    const { refs, floatingStyles, context, placement } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: "top",
        middleware: [
            offset(20),
            flip(),
            shift({ padding: 20 }),
            arrow({ element: arrowRef }),
        ],
        whileElementsMounted: autoUpdate,
    });

    // Click outside handler
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isTouchDevice && isOpen) {
                const floatingEl = refs.floating.current;
                const referenceEl = refs.reference.current;
                const target = event.target;

                // Type guards to ensure elements are HTMLElements
                if (
                    floatingEl &&
                    referenceEl &&
                    target instanceof Node &&
                    "contains" in floatingEl &&
                    "contains" in referenceEl &&
                    !floatingEl.contains(target) &&
                    !referenceEl.contains(target)
                ) {
                    setIsOpen(false);
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, isTouchDevice, refs.floating, refs.reference]);

    return (
        <div
            className={`group relative  ${
                !isEven && index === totalMembers - 1
                    ? "lg:col-start-2 lg:col-span-1"
                    : ""
            }`}
            ref={refs.setReference}
            onMouseEnter={!isTouchDevice ? () => setIsOpen(true) : undefined}
            onMouseLeave={!isTouchDevice ? () => setIsOpen(false) : undefined}
            onClick={isTouchDevice ? () => setIsOpen(!isOpen) : undefined}
        >
            <div className="bg-white rounded-lg shadow-sm p-8 text-center relative z-10 optimize-transition group-hover:bg-[#303392] transition-all duration-300 border-b-2 border-l-2 border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {member.name}
                </h3>
                <p className="text-[#303392] mt-2 group-hover:text-white/90 transition-colors duration-300">
                    {member.position}
                </p>
            </div>

            {isOpen && (
                <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    className=" max-w-[90vw] w-72 bg-[#303392] rounded-lg shadow-xl p-6 z-50"
                >
                    <div className="relative">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-white"
                            loading="eager"
                        />
                        <h3 className="text-lg font-semibold text-white mb-1">
                            {member.name}
                        </h3>
                        <p className="text-white/90 text-sm mb-3">
                            {member.position}
                        </p>
                        <p className="text-white/80 text-sm mb-4">
                            {member.description}
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href={member.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href={`mailto:${member.social.email}`}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                        <div
                            ref={arrowRef}
                            className={`absolute ${
                                placement.startsWith("top")
                                    ? "-bottom-4 border-t-8 border-t-[#303392]"
                                    : "-top-4 border-b-8 border-b-[#303392]"
                            } left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent`}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
