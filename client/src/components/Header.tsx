import React from "react";
import { Menu, X, Facebook, Linkedin, MessageSquare } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { content } from "../data/content";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === "/") {
            e.preventDefault();
            // Remove the hash from URL without scrolling
            window.history.pushState(
                "",
                document.title,
                window.location.pathname
            );
            // Explicitly navigate to home to ensure proper state update
            navigate("/");
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // Function to check if a nav item is active
    const isActive = (path: string) => {
        if (path === "/") {
            return location.pathname === "/" && !location.hash;
        }
        if (path.startsWith("#")) {
            return location.hash === path;
        }
        return location.pathname === path;
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
                className="block p-2 text-gray-500 hover:text-orange-600 transition-colors duration-300 rounded-full hover:bg-gray-100"
                aria-label={label}
            >
                <Icon className="h-5 w-5" />
            </a>
            <div className="absolute z-50 hidden  group-hover:block w-auto left-1/2 transform -translate-x-1/2 top-full pt-2">
                <div className="bg-orange-900 text-white text-xs py-1.5 px-3 rounded-md shadow-lg hidden lg:block">
                    <div className="absolute w-2 h-2 bg-orange-600 transform rotate-45 -translate-x-1/2 -top-1 left-1/2" />
                    <span className="relative z-10 whitespace-nowrap">
                        {label}
                    </span>
                </div>
            </div>
        </div>
    );

    const NavItem = ({
        name,
        path,
        isLink = false,
        onClick,
    }: {
        name: string;
        path: string;
        isLink?: boolean;
        onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    }) => {
        const active = isActive(path);
        const className = `text-sm font-regular font-poppins  transition-colors duration-300 whitespace-nowrap lg:px-0 ${
            active ? "text-orange-600" : "text-gray-800 hover:text-orange-700"
        } block w-full py-2 px-4 lg:py-0 lg:w-auto`;

        return isLink ? (
            <Link to={path} onClick={onClick} className={className}>
                {name}
            </Link>
        ) : (
            <a href={path} className={className}>
                {name}
            </a>
        );
    };

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6">
                    {/* Logo/Company Name */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            onClick={handleHomeClick}
                            className="text-base font-bold text-orange-600 uppercase tracking-wide"
                        >
                            {content.company.name}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 -my-2 lg:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center  p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
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
                    <nav className="hidden lg:flex items-center justify-center flex-grow mx-4 xl:mx-8 space-x-4 xl:space-x-8">
                        {[
                            {
                                name: "Home",
                                path: "/",
                                isLink: true,
                                onClick: handleHomeClick,
                            },
                            { name: "About", path: "#about" },
                            { name: "Industries", path: "#industries" },
                            { name: "Services", path: "#services" },
                            { name: "Resources", path: "#resources" },
                            { name: "Contact", path: "#contact" },
                        ].map((item) => (
                            <NavItem key={item.name} {...item} />
                        ))}
                    </nav>

                    {/* Desktop Social Icons */}
                    <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
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
                } lg:hidden`}
            >
                <div className="flex flex-col px-2 pt-2 pb-3 sm:px-3">
                    {[
                        {
                            name: "Home",
                            path: "/",
                            isLink: true,
                            onClick: handleHomeClick,
                        },
                        { name: "About", path: "#about" },
                        { name: "Services", path: "#services" },
                        { name: "Resources", path: "#resources" },
                        { name: "Contact", path: "#contact" },
                    ].map((item) => (
                        <NavItem key={item.name} {...item} />
                    ))}
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
