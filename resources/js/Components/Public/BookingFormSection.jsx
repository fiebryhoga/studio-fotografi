import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Send, MapPin, Phone, Instagram } from "lucide-react";

export default function BookingFormSection({ packages }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        name: "",
        phone_number: "",
        address: "",
        package_id: "",
        booking_date: "",
        message: "",
        payment_proof: null,
    });

    useEffect(() => {
        if (recentlySuccessful) {
            reset();
        }
    }, [recentlySuccessful]);

    const submit = (e) => {
        e.preventDefault();
        post(route("bookings.store"), {
            preserveScroll: true,
        });
    };

    return (
        // UBAH BACKGROUND UTAMA DI SINI
        <section id="booking" className="py-24 bg-pastel-bg">
            <div className="container mx-auto px-6">
                <div className="w-full flex flex-col lg:flex-row gap-16 items-start">
                    {/* Kolom Kiri: Info Kontak & Teks */}
                    <div className="mt-4 w-full lg:w-5/12 text-pastel-dark">
                        <h3
                            className="text-lg font-semibold"
                            data-aos="fade-right"
                        >
                            Jangan Ragu Bertanya
                        </h3>
                        <h2
                            className="text-4xl font-bold mt-2"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            Hubungi Kami & Jadwalkan Sesi
                        </h2>
                        <p
                            className="mt-6 leading-relaxed"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            Punya pertanyaan atau siap untuk memesan? Tim kami
                            siap membantu Anda. Hubungi kami melalui detail di
                            bawah atau langsung isi form di samping.
                        </p>
                        <div
                            className="mt-8 space-y-4"
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            <div className="flex items-center gap-3">
                                <MapPin size={20} />
                                <span className="text-pastel-dark">
                                    Jl. Kenangan Indah No. 12, Jakarta Selatan
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} />
                                <span className="text-pastel-dark">
                                    (+62) 812-3456-7890
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Instagram size={20} />
                                <span className="text-pastel-dark">
                                    @studiofotoanda
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Form Tunggal */}
                    <div
                        className="bg-white/40 p-8 rounded-xl shadow-2xl w-full lg:w-7/12"
                        data-aos="fade-left"
                    >
                        {recentlySuccessful && (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md">
                                <p className="font-bold">Pemesanan Terkirim!</p>
                                <p>
                                    Terima kasih, kami akan segera menghubungi
                                    Anda.
                                </p>
                            </div>
                        )}

                        <form
                            onSubmit={submit}
                            encType="multipart/form-data"
                            className="space-y-6"
                        >
                            <div
                                className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-aos="fade-up"
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-pastel-dark"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-primary focus:ring-pastel-primary"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone_number"
                                        className="block text-sm font-medium text-pastel-dark"
                                    >
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone_number"
                                        value={data.phone_number}
                                        onChange={(e) =>
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-primary focus:ring-pastel-primary"
                                        required
                                    />
                                    {errors.phone_number && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.phone_number}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div
                                className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div>
                                    <label
                                        htmlFor="package_id"
                                        className="block text-sm font-medium text-pastel-dark"
                                    >
                                        Pilih Paket
                                    </label>
                                    <select
                                        id="package_id"
                                        value={data.package_id}
                                        onChange={(e) =>
                                            setData(
                                                "package_id",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-primary focus:ring-pastel-primary"
                                        required
                                    >
                                        <option value="">
                                            -- Pilih Paket Fotografi --
                                        </option>
                                        {packages.map((pkg) => (
                                            <option key={pkg.id} value={pkg.id}>
                                                {pkg.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.package_id && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.package_id}
                                        </p>
                                    )}
                                </div>
                                <div data-aos="fade-up" data-aos-delay="200">
                                    <label
                                        htmlFor="booking_date"
                                        className="block text-sm font-medium text-pastel-dark"
                                    >
                                        Tanggal Booking
                                    </label>
                                    <input
                                        type="date"
                                        id="booking_date"
                                        value={data.booking_date}
                                        onChange={(e) =>
                                            setData(
                                                "booking_date",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-primary focus:ring-pastel-primary"
                                        required
                                    />
                                    {errors.booking_date && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.booking_date}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300">
                                <label
                                    htmlFor="address"
                                    className="block text-sm font-medium text-pastel-dark"
                                >
                                    Alamat
                                </label>
                                <textarea
                                    id="address"
                                    rows="2"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-primary focus:ring-pastel-primary"
                                    required
                                ></textarea>
                                {errors.address && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.address}
                                    </p>
                                )}
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-pastel-dark"
                                >
                                    Pesan Tambahan (Opsional)
                                </label>
                                <textarea
                                    id="message"
                                    rows="2"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-primary focus:ring-pastel-primary"
                                ></textarea>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-offset="100"
                            >
                                <label
                                    htmlFor="payment_proof"
                                    className="block text-sm font-medium text-pastel-dark"
                                >
                                    Upload Bukti Pembayaran
                                </label>
                                <input
                                    type="file"
                                    id="payment_proof"
                                    onChange={(e) =>
                                        setData(
                                            "payment_proof",
                                            e.target.files[0]
                                        )
                                    }
                                    className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pastel-bg file:text-pastel-dark hover:file:bg-pastel-bg/80"
                                    required
                                />
                                {errors.payment_proof && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.payment_proof}
                                    </p>
                                )}
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-offset="100"
                            >
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-pastel-primary px-6 py-3 text-white font-semibold shadow-sm hover:bg-opacity-90 transition-colors disabled:opacity-50"
                                >
                                    <Send size={18} />
                                    {processing
                                        ? "Mengirim..."
                                        : "Kirim Pemesanan"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
