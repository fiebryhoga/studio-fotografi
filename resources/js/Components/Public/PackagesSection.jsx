import { Clock } from "lucide-react";

export default function PackagesSection({ packages }) {
    
    const formatCurrency = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <section id="packages" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h3
                        className="text-lg font-bold text-pastel-primary"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Pilihan Terbaik Untuk Anda
                    </h3>
                    <h2
                        className="text-4xl font-bold text-pastel-dark mt-2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Layanan & Paket Fotografi
                    </h2>
                    <p
                        className="text-gray-500 mt-4 max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Kami menyediakan berbagai pilihan paket yang dirancang
                        untuk memenuhi setiap kebutuhan momen berharga Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packages.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-lg shadow-lg text-center flex flex-col w-full h-auto hover:bg-pastel-primary transition-all duration-300 overflow-hidden group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="w-full h-64 flex flex-row items-center justify-center">
                                <img
                                    src={`/storage/${pkg.image}`}
                                    alt={pkg.name}
                                    className=" w-full h-full rounded-t-xl object-cover
                                               group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {/* Gambar Paket */}

                            <div className="w-full h-full justify-between flex flex-col items-center p-4 gap-8">
                                <div className="flex flex-col items-start justify-start w-full gap-4">
                                    <h4 className="text-xl font-bold group-hover:text-white text-pastel-dark text-left">
                                        {pkg.name}
                                    </h4>
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <p className="text-base font-bold text-pastel-dark group-hover:text-white">
                                            {formatCurrency(pkg.price)}
                                        </p>
                                        <p className=" flex flex-row text-sm font-semibold text-gray-500flex items-center gap-1 justify-center group-hover:text-white">
                                            <Clock size={16} />
                                            Durasi {pkg.duration_in_hours} Jam
                                        </p>
                                    </div>

                                    <p className="text-sm text-gray-600 flex-grow w-full text-left group-hover:text-white line-clamp-3">
                                        {pkg.description}
                                    </p>
                                </div>

                                <div className="w-full flex flex-row items-end justify-end h-auto">
                                    <a
                                        href="#booking"
                                        className="text-base py-2 px-4 group-hover:text-pastel-primary rounded-md group-hover:bg-white bg-pastel-primary text-white font-semibold shadow-sm hover:bg-opacity-90 transition-colors"
                                    >
                                        Pesan Sekarang
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}