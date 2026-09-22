import React from "react";
import { Clock, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-scroll";

export default function PackagesSection({ packages }) {
    const formatCurrency = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <section id="packages" className="py-24 bg-zinc-50/70 border-y border-zinc-200/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2 block">
                        Pilihan Paket & Harga
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                        Paket Sesi Foto
                    </h2>
                    <p className="text-zinc-600 mt-3 text-base">
                        Pilihan paket dokumentasi lengkap dengan rincian durasi dan fasilitas yang transparan.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-xl border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 overflow-hidden flex flex-col group"
                        >
                            {/* Image Header with Badge */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                                <img
                                    src={`/storage/${pkg.image}`}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Duration Badge */}
                                <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md text-white text-xs font-semibold border border-white/10 shadow-sm">
                                    <Clock size={13} className="text-amber-400" />
                                    <span>{pkg.duration_in_hours} Jam Sesi</span>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-950 group-hover:text-amber-600 transition-colors">
                                        {pkg.name}
                                    </h3>

                                    {/* Price */}
                                    <div className="mt-3 flex items-baseline gap-1">
                                        <span className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
                                            {formatCurrency(pkg.price)}
                                        </span>
                                        <span className="text-xs text-zinc-500 font-medium">/ paket</span>
                                    </div>

                                    <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
                                        {pkg.description}
                                    </p>

                                    {/* Highlights list */}
                                    <div className="mt-5 pt-5 border-t border-zinc-100 space-y-2.5">
                                        <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                                            <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                                            <span>Semua File Original Digital Full-HD</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                                            <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                                            <span>Master Edit Warna & Retouch Halus</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                                            <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                                            <span>Pengarah Gaya & Lighting Studio</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Booking CTA button */}
                                <div className="mt-7 pt-4">
                                    <Link
                                        to="booking"
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={700}
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white py-3 px-4 text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer group-hover:bg-amber-600"
                                    >
                                        <span>Pesan Paket Ini</span>
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}