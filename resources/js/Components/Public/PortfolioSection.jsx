import React, { useState } from "react";
import { Eye, X, Sparkles, ZoomIn } from "lucide-react";

export default function PortfolioSection({ portfolios }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (portfolio) => {
        setSelectedImage(portfolio);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <section id="portfolio" className="py-24 bg-zinc-50/70 border-t border-zinc-200/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2 block">
                        Galeri Foto & Dokumentasi
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                        Portofolio Karya
                    </h2>
                    <p className="text-zinc-600 mt-3 text-base">
                        Kumpulan hasil dokumentasi sesi foto klien di GF Studio.
                    </p>
                </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {portfolios.map((portfolio, index) => (
                            <div
                                key={portfolio.id}
                                onClick={() => openModal(portfolio)}
                                className="group relative overflow-hidden rounded-xl border border-zinc-200 shadow-sm hover:shadow-2xl cursor-pointer bg-zinc-950 aspect-[4/3] transition-all duration-300"
                            >
                                <img
                                    src={`/storage/${portfolio.image}`}
                                    alt={portfolio.title}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:opacity-85 transition-all duration-500"
                                />
                                
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <ZoomIn size={14} />
                                        <span>Lihat Detail Foto</span>
                                    </div>
                                    <h4 className="text-white text-lg font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {portfolio.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-6 transition-all duration-300 animate-in fade-in"
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md transition-colors z-50"
                        aria-label="Tutup Preview"
                    >
                        <X size={24} />
                    </button>

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-4xl w-full flex flex-col items-center"
                    >
                        <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-zinc-950 max-h-[80vh] flex items-center justify-center">
                            <img
                                src={`/storage/${selectedImage.image}`}
                                alt={selectedImage.title}
                                className="w-full h-full max-h-[80vh] object-contain"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h4 className="text-white text-lg sm:text-xl font-bold">
                                {selectedImage.title}
                            </h4>
                            <p className="text-xs text-zinc-400 mt-1">GF Studio Official Portfolio</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
