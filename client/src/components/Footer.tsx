import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Facebook, Linkedin, MessageSquare, Twitter } from "lucide-react";
import { content } from "../data/content";

export function Footer() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSectionLink = (
        e: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const element = document.querySelector(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.querySelector(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="sm:col-span-2 lg:col-span-1 lg:pr-4">
                        <div className="flex flex-col mb-4">
                            <h1 className="text-base md:text-lg font-semibold text-orange-500 uppercase tracking-wide">
                                {content.company.name}
                            </h1>
                            <span className="text-sm text-gray-400 mt-1  font-normal hidden sm:block">
                                {content.company.tagline}
                            </span>
                        </div>
                        <p className="text-sm mb-2">
                            {content.contact.email.label}:{" "}
                            {content.contact.email.value}
                        </p>
                        <p className="text-sm mb-2">
                            {content.contact.phone.label}:{" "}
                            {content.contact.phone.value}
                        </p>
                        <p className="text-sm">
                            {content.contact.office.label}:{" "}
                            {content.contact.office.address.map(
                                (line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                )
                            )}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="lg:px-4">
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm hover:text-orange-600"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-sm hover:text-orange-600"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-sm hover:text-orange-600"
                                    onClick={(e) =>
                                        handleSectionLink(e, "#services")
                                    }
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/resources"
                                    className="text-sm hover:text-orange-600"
                                >
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-sm hover:text-orange-600"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:px-4">
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {content.services.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        to={`/services/${service.id}`}
                                        className="text-sm hover:text-orange-600"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div className="lg:pl-4">
                        <h4 className="text-lg font-semibold mb-4">
                            Follow Us
                        </h4>
                        <div className="flex space-x-4">
                            <SocialIcon
                                href={content.company.facebook}
                                icon={Facebook}
                                label="Facebook"
                            />
                            <SocialIcon
                                href={content.company.whatsapp}
                                icon={MessageSquare}
                                label="WhatsApp"
                            />
                            <SocialIcon
                                href={content.company.linkedin}
                                icon={Linkedin}
                                label="LinkedIn"
                            />
                            <SocialIcon
                                href={content.company.X}
                                icon={Twitter}
                                label="X (Twitter)"
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-600 pt-4 mt-6">
                    <div className="relative flex flex-col items-center md:flex-row md:justify-center">
                        <p className="text-sm text-center md:text-left">
                            &copy; {new Date().getFullYear()}{" "}
                            {content.company.registeredName} All rights
                            reserved.
                        </p>
                        <div className="mt-2 self-end md:self-auto md:absolute md:right-0 flex items-center group text-xs text-gray-300 md:pr-2">
                            <p>Crafted by</p>
                            <a
                                href="https://knitbytes.com/"
                                className="text-gray-300 ml-1 underline group-hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                KnitBytes
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const SocialIcon = ({
    href,
    icon: Icon,
    label,
}: {
    href: string;
    icon: any;
    label: string;
}) => (
    <div className="group relative">
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-600 transition-colors duration-300"
            aria-label={label}
        >
            <Icon className="h-5 w-5" />
        </a>
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            {label}
        </span>
    </div>
);
