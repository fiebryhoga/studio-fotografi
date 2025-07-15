import React, { useState } from "react"; 
import { Eye, X } from "lucide-react";

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
            <section id="portfolio" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h3 className="text-lg font-bold text-pastel-primary">
                            Karya Terbaik Kami
                        </h3>
                        <h2 className="text-4xl font-bold text-pastel-dark mt-2">
                            Galeri Portofolio
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Setiap gambar adalah sebuah karya seni yang kami
                            ciptakan dengan penuh cinta dan dedikasi.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolios.map((portfolio, index) => (
                            <div
                                key={portfolio.id}
                                onClick={() => openModal(portfolio)}
                                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <img
                                    src={`/storage/${portfolio.image}`}
                                    alt={portfolio.title}
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex flex-col items-center justify-center p-6">
                                    <Eye
                                        className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                                        size={40}
                                    />
                                    <h4 className="text-white text-xl font-bold mt-4 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {portfolio.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            {selectedImage && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
                >
                    
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
                    >
                        <X size={32} />
                    </button>

                    
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative transform transition-all duration-300 scale-95 animate-fade-in-up"
                    >
                        <img
                            src={`/storage/${selectedImage.image}`}
                            alt={selectedImage.title}
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        />
                        <h4 className="text-white text-center mt-4 text-lg font-bold">
                            {selectedImage.title}
                        </h4>
                    </div>
                </div>
            )}
        </>
    );
}
