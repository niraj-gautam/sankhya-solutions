import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, MessageSquare } from "lucide-react";
import { content } from "../data/content";

export function Footer() {
    return (
        <footer className="bg-[#303392] text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="sm:col-span-2 lg:col-span-1 lg:pr-4">
                        <img
                            src={content.company.logo}
                            alt="Company Logo"
                            className="h-20 mb-4"
                        />
                        <p className="text-sm mb-2">
                            {content.contact.email.label}:{" "}
                            {content.contact.email.value}
                        </p>
                        <p className="text-sm mb-2">
                            {content.contact.phone.label}:{" "}
                            {content.contact.phone.value}
                        </p>
                        <p className="text-sm">
                            {content.contact.office.label}:
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
                                    className="text-sm hover:text-gray-300"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-sm hover:text-gray-300"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-sm hover:text-gray-300"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#resources"
                                    className="text-sm hover:text-gray-300"
                                >
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-sm hover:text-gray-300"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#team"
                                    className="text-sm hover:text-gray-300"
                                >
                                    Our Team
                                </a>
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
                                        className="text-sm hover:text-gray-300"
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
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-600 pt-4 mt-6">
                    <div className="relative flex flex-col items-center md:flex-row md:justify-center">
                        <p className="text-sm text-center md:text-left">
                            &copy; {new Date().getFullYear()}{" "}
                            {content.company.name}. All rights reserved.
                        </p>
                        <div className="mt-2 self-end md:self-auto md:absolute md:right-0 flex items-center text-xs text-gray-300 md:pr-2">
                            <p>Developed by</p>
                            <a
                                href="https://example.com"
                                className="hover:underline ml-1 underline"
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
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label={label}
        >
            <Icon className="h-5 w-5" />
        </a>
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            {label}
        </span>
    </div>
);
