import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Calendar } from "lucide-react";
import StudioLogo from "@/Components/Public/StudioLogo";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { to: "hero", label: "Beranda" },
        { to: "packages", label: "Paket & Harga" },
        { to: "about", label: "Tentang Kami" },
        { to: "portfolio", label: "Portofolio" },
        { to: "booking", label: "Booking Jadwal" },
    ];

    return (
        <header className="sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={700}
                    >
                        <StudioLogo variant="dark" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={700}
                                className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors duration-200 cursor-pointer relative py-1"
                                activeClass="!text-amber-600 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-600 after:rounded-full"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            to="booking"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={700}
                            className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white px-4 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer"
                        >
                            <Calendar size={16} className="text-amber-400" />
                            Booking Sesi
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="flex md:hidden items-center">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-zinc-200 px-6 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={700}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-base font-semibold text-zinc-700 hover:text-amber-600 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-3 border-t border-zinc-100">
                        <Link
                            to="booking"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={700}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full flex items-center justify-center gap-2 rounded-lg bg-zinc-950 text-white py-3 text-sm font-bold shadow-sm"
                        >
                            <Calendar size={16} className="text-amber-400" />
                            Booking Sesi Sekarang
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
