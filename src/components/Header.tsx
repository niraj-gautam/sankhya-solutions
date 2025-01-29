import React from "react";
import { Menu, X, Facebook, Linkedin, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { content } from "../data/content";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const SocialIcon = ({
        href,
        icon: Icon,
        label,
    }: {
        href: string;
        icon: any;
        label: string;
    }) => (
        <div className="relative group">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 text-gray-500 hover:text-gray-900 transition-colors duration-300 rounded-full hover:bg-gray-100"
                aria-label={label}
            >
                <Icon className="h-5 w-5" />
            </a>
            <div className="absolute z-50 hidden group-hover:block w-auto left-1/2 transform -translate-x-1/2 top-full pt-2">
                <div className="bg-gray-900 text-white text-xs py-1.5 px-3 rounded-md shadow-lg">
                    <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -translate-x-1/2 -top-1 left-1/2" />
                    <span className="relative z-10 whitespace-nowrap">
                        {label}
                    </span>
                </div>
            </div>
        </div>
    );

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    {/* Logo/Company Name */}
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link
                            to="/"
                            onClick={handleHomeClick}
                            className="text-2xl font-bold text-gray-900"
                        >
                            {content.company.name}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle navigation"
                        >
                            <div className="relative w-6 h-6">
                                <Menu
                                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                                        isMenuOpen
                                            ? "opacity-0 rotate-90 scale-90"
                                            : "opacity-100 rotate-0 scale-100"
                                    }`}
                                />
                                <X
                                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                                        isMenuOpen
                                            ? "opacity-100 rotate-0 scale-100"
                                            : "opacity-0 -rotate-90 scale-90"
                                    }`}
                                />
                            </div>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-10">
                        <Link
                            to="/"
                            onClick={handleHomeClick}
                            className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        >
                            Home
                        </Link>
                        <a
                            href="#about"
                            className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        >
                            Services
                        </a>
                        <a
                            href="#resources"
                            className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        >
                            Resources
                        </a>
                        <a
                            href="#contact"
                            className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Desktop Social Icons */}
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-2">
                        <SocialIcon
                            href={content.company.facebook}
                            icon={Facebook}
                            label="Follow us on Facebook"
                        />
                        <SocialIcon
                            href={content.company.whatsapp}
                            icon={MessageSquare}
                            label="Chat with us on WhatsApp"
                        />
                        <SocialIcon
                            href={content.company.linkedin}
                            icon={Linkedin}
                            label="Connect on LinkedIn"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isMenuOpen
                        ? "opacity-100 max-h-[500px]"
                        : "opacity-0 max-h-0"
                } md:hidden`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        onClick={(e) => {
                            handleHomeClick(e);
                            setIsMenuOpen(false);
                        }}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                    >
                        Home
                    </Link>
                    <a
                        href="#about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </a>
                    <a
                        href="#resources"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Resources
                    </a>
                    <a
                        href="#contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
                {/* Mobile Social Icons */}
                <div className="flex justify-center space-x-4 py-4">
                    <SocialIcon
                        href={content.company.facebook}
                        icon={Facebook}
                        label="Follow us on Facebook"
                    />
                    <SocialIcon
                        href={content.company.whatsapp}
                        icon={MessageSquare}
                        label="Chat with us on WhatsApp"
                    />
                    <SocialIcon
                        href={content.company.linkedin}
                        icon={Linkedin}
                        label="Connect on LinkedIn"
                    />
                </div>
            </div>
        </header>
    );
}
