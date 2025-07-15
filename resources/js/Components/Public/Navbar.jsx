import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
    const navLinks = [
        { to: "hero", label: "Home" },
        { to: "packages", label: "Service" },
        { to: "about", label: "About Us" },
        { to: "portfolio", label: "Portfolio" },
        { to: "booking", label: "Booking" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="container mx-auto px-8 flex justify-between items-center py-6">
                <h1 className="text-2xl font-bold text-pastel-dark">
                    Studio Foto
                </h1>

                <nav className="hidden md:flex gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                            className="font-semibold text-pastel-dark hover:text-pastel-primary transition-colors duration-300 cursor-pointer"
                            activeClass="text-pastel-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
