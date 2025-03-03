import { motion, AnimatePresence } from "framer-motion";
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

// Animation configurations
const animationConfig = {
    navItem: {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
    },
    dropdown: {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.2, ease: "easeInOut" },
    },
    mobileMenu: {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.3, ease: "easeInOut" },
    },
    icon: {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
        transition: { type: "spring", stiffness: 300 },
    },
};

const INDUSTRY_ITEMS = [
    { name: "Banking & Financials", path: "/industries/1" },
    { name: "Retail", path: "/industries/2" },
    { name: "Industry", path: "/industries/3" },
    { name: "Travel & Hospitality", path: "/industries/4" },
    { name: "Education", path: "/industries/5" },
    { name: "Health", path: "/industries/6" },
];

const DropdownMenu = ({
    items,
}: {
    items: { name: string; path: string }[];
}) => (
    <motion.div
        {...animationConfig.dropdown}
        className="absolute top-full left-0 w-48 py-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10"
    >
        {items.map((item) => (
            <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 motion-safe:transition-colors motion-safe:duration-300"
            >
                {item.name}
            </Link>
        ))}
    </motion.div>
);

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
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
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
        <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={animationConfig.icon}
            className="relative group"
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 text-gray-500 hover:text-orange-600 motion-safe:transition-colors motion-safe:duration-300 rounded-full hover:bg-gray-100"
                aria-label={label}
            >
                <Icon className="h-5 w-5" />
            </a>
            <div className="absolute z-50 opacity-0 group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-300 w-auto left-1/2 -translate-x-1/2 top-full pt-2 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-orange-900 text-white text-xs py-1.5 px-3 rounded-md shadow-lg">
                    <div className="absolute w-2 h-2 bg-orange-600 rotate-45 -translate-x-1/2 -top-1 left-1/2" />
                    <span className="relative z-10 whitespace-nowrap">
                        {label}
                    </span>
                </div>
            </div>
        </motion.div>
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
            ? dropdownItems?.some((item) => isActive(item.path))
            : isActive(path);

        const baseClassName = `text-sm font-regular font-poppins motion-safe:transition-colors motion-safe:duration-300 whitespace-nowrap lg:px-0 ${
            active ? "text-orange-500" : "text-gray-900 hover:text-orange-600"
        } block w-full py-2 px-4 lg:py-0 lg:w-auto relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-orange-600 motion-safe:after:transition-all motion-safe:after:duration-300 ${
            active ? "after:w-full" : "hover:after:w-full"
        } ${hasDropdown ? "" : "after:content-['']"}`;

        if (hasDropdown) {
            return (
                <div
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => {
                        if (window.innerWidth >= 1024) {
                            setIsDropdownOpen(true);
                        }
                    }}
                    onMouseLeave={() => {
                        if (window.innerWidth >= 1024) {
                            setIsDropdownOpen(false);
                        }
                    }}
                >
                    <motion.button
                        whileHover="hover"
                        whileTap="tap"
                        variants={animationConfig.navItem}
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
                    </motion.button>
                    <AnimatePresence>
                        {((window.innerWidth >= 1024 && isDropdownOpen) ||
                            (window.innerWidth < 1024 &&
                                mobileDropdownOpen)) && (
                            <DropdownMenu items={dropdownItems || []} />
                        )}
                    </AnimatePresence>
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
                    <div className="flex-shrink-0 flex items-center relative">
                        {/* Company logo */}
                        <div className="relative h-10 md:h-12 lg:h-12 w-12 md:w-12 lg:w-12 flex-shrink-0">
                            <Link
                                to="/"
                                onClick={handleHomeClick}
                                className="block h-full w-full"
                            >
                                <img
                                    src="/images/logo.png"
                                    alt="Company Logo"
                                    className="h-full w-full object-contain"
                                />
                            </Link>
                        </div>

                        {/* Vertical separator line */}
                        <div className="h-10 w-px bg-gray-300 mx-3 md:mx-4"></div>

                        <div className="flex flex-col">
                            <Link
                                to="/"
                                onClick={handleHomeClick}
                                className="text-sm md:text-base font-bold text-orange-500 uppercase tracking-wide"
                            >
                                {content.company.name}
                            </Link>
                            <span className="text-xs text-gray-500 mt-0.5 font-normal hidden sm:block">
                                {content.company.tagline}
                            </span>
                        </div>
                    </div>

                    <motion.button
                        whileHover="hover"
                        whileTap="tap"
                        variants={animationConfig.icon}
                        className="-mr-2 -my-2 lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <div className="relative w-6 h-6">
                            <Menu
                                className={`absolute inset-0 h-6 w-6 motion-safe:transition-transform motion-safe:duration-300 ${
                                    isMenuOpen
                                        ? "opacity-0 rotate-180 scale-90"
                                        : "opacity-100 rotate-0 scale-100"
                                }`}
                            />
                            <X
                                className={`absolute inset-0 h-6 w-6 motion-safe:transition-transform motion-safe:duration-300 ${
                                    isMenuOpen
                                        ? "opacity-100 rotate-0 scale-100"
                                        : "opacity-0 -rotate-180 scale-90"
                                }`}
                            />
                        </div>
                    </motion.button>

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

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        {...animationConfig.mobileMenu}
                        className="lg:hidden"
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
                                {
                                    name: "Contact",
                                    path: "#contact",
                                    isSection: true,
                                },
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
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
