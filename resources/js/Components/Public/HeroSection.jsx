import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-scroll"; 

export default function HeroSection() {
    return (
        <section id="hero" className="w-full bg-white text-pastel-dark">
            <div className="container mx-auto flex flex-col md:flex-row h-screen items-center px-6">
                <div className="w-full md:w-1/3 lg:w-1/2 order-2 md:order-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-left md:text-left">
                        Abadikan Kisah Anda,
                        <span className="text-pastel-primary">
                            Momen Demi Momen.
                        </span>
                    </h1>
                    <p className="mt-6 text-lg max-w-lg">
                        Kami percaya setiap gambar memiliki cerita. Di studio
                        kami, kami tidak hanya mengambil foto, kami menciptakan
                        kenangan abadi yang akan Anda hargai selamanya.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Link
                            to="packages" 
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={900}
                            className="inline-flex items-center gap-2 rounded-lg bg-pastel-primary px-6 py-3 text-white font-semibold shadow-sm hover:bg-opacity-90 transition-colors cursor-pointer"
                        >
                            Lihat Paket
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="portfolio" 
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={900}
                            className="inline-flex items-center gap-2 rounded-lg border border-pastel-primary px-6 py-3 font-semibold text-pastel-primary hover:bg-pastel-primary hover:text-white transition-colors cursor-pointer"
                        >
                            Lihat Galeri
                        </Link>
                    </div>
                </div>

                <div className="lg:flex w-full md:w-2/3 lg:w-1/2 h-full items-center justify-center p-12 order-1 md:order-2">
                    <div className="w-full h-4/5">
                        <img
                            src="/build/assets/image/hero-img.png"
                            alt="Contoh Foto Studio"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
