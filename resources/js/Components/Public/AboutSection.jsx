import React from "react";
import { Camera, Heart, Sparkles, Award, Users, Check } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Image with Overlays */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-xl aspect-[4/5] bg-zinc-900">
                                <img
                                    src="/images/about.jpg"
                                    alt="Tim GF Studio Fotografi"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating Experience Badge */}
                            <div className="absolute -bottom-6 -right-4 bg-zinc-950 text-white rounded-lg p-4 shadow-2xl border border-zinc-800 hidden sm:flex items-center gap-3.5">
                                <div className="w-12 h-12 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-white">5+ Tahun</p>
                                    <p className="text-xs text-zinc-400">Pengalaman Profesional</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Editorial Story & Value Pillars */}
                    <div className="lg:col-span-7">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2 block">
                            Tentang GF Studio
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                            Mendedikasikan Diri untuk Setiap Karya Foto Terbaik
                        </h2>

                        <p className="text-zinc-600 mt-4 text-base leading-relaxed">
                            Bagi kami di <strong>GF Studio</strong>, setiap momen berharga adalah cerita yang pantas diabadikan dengan indah. Kami hadir dengan komitmen memberikan pengalaman foto yang menyenangkan, santai, dan menghasilkan visual yang berkesan selamanya.
                        </p>

                        {/* Value Feature Cards */}
                        <div className="mt-8 space-y-4">
                            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:border-zinc-300 transition-all flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 text-amber-600 flex items-center justify-center shadow-sm flex-shrink-0">
                                    <Camera size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-950 text-base">
                                        Peralatan Sinematik Standar Internasional
                                    </h4>
                                    <p className="text-sm text-zinc-600 mt-1">
                                        Didukung sensor kamera mutakhir, optik prime tajam, dan pencahayaan studio terkontrol demi hasil detail sempurna.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:border-zinc-300 transition-all flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 text-amber-600 flex items-center justify-center shadow-sm flex-shrink-0">
                                    <Heart size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-950 text-base">
                                        Arahan Gaya Nyaman & Alami
                                    </h4>
                                    <p className="text-sm text-zinc-600 mt-1">
                                        Kami memandu ekspresi dan pose Anda dengan suasana santai sehingga momen terasa natural tanpa rasa canggung.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:border-zinc-300 transition-all flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 text-amber-600 flex items-center justify-center shadow-sm flex-shrink-0">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-950 text-base">
                                        Warna Eksklusif & Color Grading Premium
                                    </h4>
                                    <p className="text-sm text-zinc-600 mt-1">
                                        Setiap foto melewati proses kurasi dan tone warna elegan yang abadi dan tidak lekang oleh tren zaman.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
