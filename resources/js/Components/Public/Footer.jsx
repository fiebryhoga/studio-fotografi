import React from "react";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-scroll";
import StudioLogo from "@/Components/Public/StudioLogo";

export default function Footer() {
    return (
        <footer id="contact" className="bg-zinc-950 text-zinc-400 border-t border-zinc-800/80 pt-16 pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800">
                    {/* Col 1: Brand info */}
                    <div className="lg:col-span-4 space-y-4">
                        <Link to="hero" spy={true} smooth={true} offset={-80} duration={700}>
                            <StudioLogo variant="light" />
                        </Link>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                            Studio fotografi & sinematografi profesional yang berdedikasi mengabadikan momen cinta, kelulusan, keluarga, dan momen berharga Anda dengan standar visual tertinggi.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 flex items-center justify-center border border-zinc-800 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 flex items-center justify-center border border-zinc-800 transition-colors"
                                aria-label="WhatsApp"
                            >
                                <Phone size={18} />
                            </a>
                            <a
                                href="mailto:info@gfstudio.id"
                                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 flex items-center justify-center border border-zinc-800 transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Navigation Links */}
                    <div className="lg:col-span-3 space-y-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                            Navigasi Cepat
                        </p>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link to="hero" spy={true} smooth={true} offset={-80} duration={700} className="hover:text-amber-400 transition-colors cursor-pointer">
                                    Beranda Utama
                                </Link>
                            </li>
                            <li>
                                <Link to="packages" spy={true} smooth={true} offset={-80} duration={700} className="hover:text-amber-400 transition-colors cursor-pointer">
                                    Paket & Layanan
                                </Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-80} duration={700} className="hover:text-amber-400 transition-colors cursor-pointer">
                                    Tentang GF Studio
                                </Link>
                            </li>
                            <li>
                                <Link to="portfolio" spy={true} smooth={true} offset={-80} duration={700} className="hover:text-amber-400 transition-colors cursor-pointer">
                                    Galeri Portofolio
                                </Link>
                            </li>
                            <li>
                                <Link to="booking" spy={true} smooth={true} offset={-80} duration={700} className="hover:text-amber-400 transition-colors cursor-pointer">
                                    Reservasi Jadwal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Layanan Populer */}
                    <div className="lg:col-span-2 space-y-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                            Layanan Foto
                        </p>
                        <ul className="space-y-2.5 text-sm text-zinc-400">
                            <li>Pernikahan & Akad</li>
                            <li>Wisuda & Kelulusan</li>
                            <li>Foto Keluarga</li>
                            <li>Lamaran & Prewedding</li>
                            <li>Aqiqah & Syukuran</li>
                        </ul>
                    </div>

                    {/* Col 4: Studio Info */}
                    <div className="lg:col-span-3 space-y-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                            Hubungi Studio
                        </p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2.5">
                                <MapPin size={17} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                <span>Jl. Kenangan Indah No. 12, Surabaya & Jakarta</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone size={17} className="text-amber-500 flex-shrink-0" />
                                <span>(+62) 812-3456-7890</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail size={17} className="text-amber-500 flex-shrink-0" />
                                <span>booking@gfstudio.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
                    <p>
                        &copy; {new Date().getFullYear()} Olympus Training Surabaya X Unesa. All Rights Reserved.
                    </p>
                    <p className="flex items-center gap-1 text-zinc-400">
                        <span>GF Studio Photography</span>
                        <span>•</span>
                        <span>Crafted with Precision</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
