import React from "react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="hero" className="w-full bg-white pt-10 pb-20 md:py-24 border-b border-zinc-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                    {/* Left Column: Authentic Headline & Story */}
                    <div className="lg:col-span-6 flex flex-col items-start text-left">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
                            Studio Fotografi & Dokumentasi
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-zinc-950 leading-[1.15]">
                            Mengabadikan Cerita Cinta, Keluarga & Kelulusan Anda.
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Kami menghargai setiap detik berharga dalam hidup Anda. Dari kehangatan akad pernikahan, kebanggaan toga wisuda, hingga kebersamaan keluarga—kami abadikan dengan rasa dan estetika visual yang abadi.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                            <Link
                                to="packages"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={700}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white px-7 py-3.5 text-sm font-semibold transition-colors duration-200 cursor-pointer shadow-sm"
                            >
                                <span>Lihat Paket & Biaya</span>
                                <ArrowRight size={17} />
                            </Link>
                            <Link
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={700}
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-50 text-zinc-800 px-7 py-3.5 text-sm font-semibold transition-colors duration-200 cursor-pointer"
                            >
                                <ImageIcon size={17} className="text-zinc-500" />
                                <span>Galeri Foto</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Authentic Editorial Photo Collage */}
                    <div className="lg:col-span-6">
                        <div className="grid grid-cols-12 gap-4 items-center">
                            {/* Main Wedding Image */}
                            <div className="col-span-7 relative group">
                                <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100 aspect-[3/4]">
                                    <img
                                        src="/storage/package-images/pernikahan.jpg"
                                        alt="Foto Pernikahan GF Studio"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="mt-2.5">
                                    <p className="text-xs font-bold text-zinc-900">Dokumentasi Pernikahan</p>
                                    <p className="text-[11px] text-zinc-500">Akad, Resepsi & Prewedding</p>
                                </div>
                            </div>

                            {/* Two Stacked Photos (Graduation & Family) */}
                            <div className="col-span-5 space-y-4">
                                <div className="group">
                                    <div className="rounded-xl overflow-hidden shadow-md border border-zinc-200 bg-zinc-100 aspect-[4/3]">
                                        <img
                                            src="/storage/package-images/wisuda.jpg"
                                            alt="Foto Wisuda GF Studio"
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="mt-1.5">
                                        <p className="text-xs font-bold text-zinc-900">Wisuda & Kelulusan</p>
                                    </div>
                                </div>

                                <div className="group">
                                    <div className="rounded-xl overflow-hidden shadow-md border border-zinc-200 bg-zinc-100 aspect-[4/3]">
                                        <img
                                            src="/storage/package-images/lamaran.jpg"
                                            alt="Foto Lamaran GF Studio"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="mt-1.5">
                                        <p className="text-xs font-bold text-zinc-900">Lamaran & Tunangan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
