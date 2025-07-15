export default function Footer() {
    return (
        <footer id="contact" className="relative overflow-hidden bg-pastel-primary">
            <img src="/build/assets/image/hero-img.png"
                className="absolute bg-cover bg-center grayscale bg-red-900 w-full h-full object-cover opacity-80"
                
            ></img>

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 container mx-auto px-6 text-center text-white py-10">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold">
                        Studio Fotografi
                    </h2>

                    <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8">
                        <a
                            href="#hero"
                            className="text-white font-semibold hover:text-white transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-white font-semibold hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#packages"
                            className="text-white font-semibold hover:text-white transition-colors"
                        >
                            Service
                        </a>
                        <a
                            href="#portfolio"
                            className="text-white font-semibold hover:text-white transition-colors"
                        >
                            Portfolio
                        </a>
                        <a
                            href="#booking"
                            className="text-white font-semibold hover:text-white transition-colors"
                        >
                            Booking
                        </a>
                    </nav>
                </div>

                {/* Garis Pemisah & Copyright */}
                <div className="mt-12 pt-8 border-t-2 border-white">
                    <p className=" text-white">
                        &copy; {new Date().getFullYear()} Studio Fotografi
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
