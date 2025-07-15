import { Camera, Heart, Users } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center">
                    <div className="w-full h-96" data-aos="fade-right">
                        <img
                            src="/build/assets/image/about.jpg"
                            alt="Tim Studio Fotografi"
                            className="rounded-2xl shadow-xl w-full h-full object-cover aspect-[4/5]"
                        />
                    </div>

                    <div data-aos="fade-left">
                        <h3 className="text-lg font-bold text-pastel-primary">
                            Lebih Dari Sekedar Foto
                        </h3>
                        <h2 className="text-4xl font-bold text-pastel-dark mt-2">
                            Kisah di Balik Lensa Kami
                        </h2>
                        <p className="text-gray-600 mt-6 leading-relaxed">
                            Bagi kami, fotografi adalah seni bercerita. Kami
                            lahir dari kecintaan untuk menangkap emosi murni dan
                            momen otentik yang seringkali terlewat. Setiap
                            jepretan adalah upaya kami untuk membekukan waktu,
                            mengubah kenangan singkat menjadi warisan yang
                            abadi.
                        </p>

                        <div className="mt-8 space-y-6">
                            <div
                                className="flex items-start gap-4"
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                <div className="bg-pastel-primary/10 p-3 rounded-full">
                                    <Heart
                                        className="text-pastel-primary"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-pastel-dark text-lg">
                                        Passion & Profesionalisme
                                    </h4>
                                    <p className="text-gray-500 mt-1">
                                        Kami menggabungkan hasrat seni dengan
                                        etos kerja profesional untuk memberikan
                                        hasil yang melebihi ekspektasi Anda.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex items-start gap-4"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >
                                <div className="bg-pastel-secondary/20 p-3 rounded-full">
                                    <Camera
                                        className="text-pastel-secondary"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-pastel-dark text-lg">
                                        Kualitas Terbaik
                                    </h4>
                                    <p className="text-gray-500 mt-1">
                                        Dengan peralatan modern dan teknik
                                        penyuntingan yang ahli, kami memastikan
                                        setiap detail terlihat sempurna.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex items-start gap-4"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="bg-pastel-primary/10 p-3 rounded-full">
                                    <Users
                                        className="text-pastel-primary"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-pastel-dark text-lg">
                                        Kenyamanan Klien
                                    </h4>
                                    <p className="text-gray-500 mt-1">
                                        Kami menciptakan suasana yang santai dan
                                        menyenangkan, membuat Anda merasa nyaman
                                        di depan kamera.
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
