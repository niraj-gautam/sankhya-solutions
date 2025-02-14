import React, { useEffect, useRef } from "react";
import {
    Menu,
    X,
    Facebook,
    Linkedin,
    MessageSquare,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { content } from "../data/content";

const INDUSTRY_ITEMS = [
    {
        name: "Banking & Financials",
        path: "/industries/1",
    },
    { name: "Retail", path: "/industries/2" },

    { name: "Industry", path: "/industries/3" },
    {
        name: "Travel & Hospitality",
        path: "/industries/4",
    },
];

const DropdownMenu = ({
    items,
}: {
    items: { name: string; path: string }[];
}) => {
    return (
        <div className="absolute top-full left-0 w-48 py-2  bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
            {items.map((item) => (
                <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setMobileDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleSectionLink = (
        e: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate("/");
            // Wait for navigation to complete before scrolling
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

    const isActive = (path: string) => {
        if (path === "/") {
            return location.pathname === "/" && !location.hash;
        }
        if (path.startsWith("#")) {
            return location.hash === path;
        }
        const targetPath = path.startsWith("/") ? path : `/${path}`;
        return location.pathname === targetPath;
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
        hasDropdown = false,
        dropdownItems,
        isSection = false,
    }: {
        name: string;
        path: string;
        isLink?: boolean;
        onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
        hasDropdown?: boolean;
        dropdownItems?: { name: string; path: string }[];
        isSection?: boolean;
    }) => {
        const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
        const active = hasDropdown
            ? dropdownItems?.some((item) => isActive(item.path)) || false
            : isActive(path);
        const baseClassName = `text-sm font-regular font-poppins transition-colors duration-300 whitespace-nowrap lg:px-0 ${
            active ? "text-orange-500" : "text-gray-900 hover:text-orange-600"
        } block w-full py-2 px-4 lg:py-0 lg:w-auto`;

        if (hasDropdown) {
            return (
                <div
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() =>
                        window.innerWidth >= 1024 && setIsDropdownOpen(true)
                    }
                    onMouseLeave={() =>
                        window.innerWidth >= 1024 && setIsDropdownOpen(false)
                    }
                >
                    <button
                        className={`${baseClassName} flex items-center gap-1`}
                        onClick={() => {
                            if (window.innerWidth < 1024) {
                                setMobileDropdownOpen(!mobileDropdownOpen);
                            }
                        }}
                    >
                        {name}
                        {window.innerWidth >= 1024 ? (
                            isDropdownOpen ? (
                                <ChevronUp className="h-4 w-4" />
                            ) : (
                                <ChevronDown className="h-4 w-4" />
                            )
                        ) : mobileDropdownOpen ? (
                            <ChevronUp className="h-4 w-4" />
                        ) : (
                            <ChevronDown className="h-4 w-4" />
                        )}
                    </button>
                    {((window.innerWidth >= 1024 && isDropdownOpen) ||
                        (window.innerWidth < 1024 && mobileDropdownOpen)) && (
                        <DropdownMenu items={dropdownItems || []} />
                    )}
                </div>
            );
        }

        if (isSection) {
            return (
                <a
                    href={path}
                    className={baseClassName}
                    onClick={(e) => handleSectionLink(e, path)}
                >
                    {name}
                </a>
            );
        }

        return isLink ? (
            <Link to={`/${path}`} onClick={onClick} className={baseClassName}>
                {name}
            </Link>
        ) : (
            <a href={path} className={baseClassName}>
                {name}
            </a>
        );
    };

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6">
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            onClick={handleHomeClick}
                            className="text-base font-bold text-orange-500 uppercase tracking-wide"
                        >
                            {content.company.name}
                        </Link>
                    </div>

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

                    <nav className="hidden lg:flex items-center justify-center flex-grow mx-4 xl:mx-8 space-x-4 xl:space-x-8">
                        {[
                            {
                                name: "Home",
                                path: "",
                                isLink: true,
                                onClick: handleHomeClick,
                            },
                            { name: "About", path: "about", isLink: true },
                            {
                                name: "Industries",
                                path: "",
                                hasDropdown: true,
                                dropdownItems: INDUSTRY_ITEMS,
                            },
                            {
                                name: "Services",
                                path: "#services",
                                isSection: true,
                            },
                            {
                                name: "Resources",
                                path: "resources",
                                isLink: true,
                            },
                            {
                                name: "Contact",
                                path: "contact",
                                isLink: true,
                            },
                        ].map((item) => (
                            <NavItem key={item.name} {...item} />
                        ))}
                    </nav>

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
                            path: "",
                            isLink: true,
                            onClick: handleHomeClick,
                        },
                        { name: "About", path: "about", isLink: true },
                        {
                            name: "Industries",
                            path: "",
                            hasDropdown: true,
                            dropdownItems: INDUSTRY_ITEMS,
                        },
                        {
                            name: "Services",
                            path: "#services",
                            isSection: true,
                        },
                        {
                            name: "Resources",
                            path: "#resources",
                            isSection: true,
                        },
                        { name: "Contact", path: "#contact", isSection: true },
                    ].map((item) => (
                        <NavItem key={item.name} {...item} />
                    ))}
                </div>

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
