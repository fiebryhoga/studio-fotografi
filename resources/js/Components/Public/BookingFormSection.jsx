import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Send, MapPin, Phone, Instagram, Calendar, Clock, Sparkles, UploadCloud, CheckCircle2 } from "lucide-react";

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
        <section id="booking" className="py-24 bg-white border-t border-zinc-200/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Contact & Studio Info */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
                            <Sparkles size={13} />
                            <span>Reservasi & Jadwal</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                            Jadwalkan Sesi Foto Istimewa Anda
                        </h2>

                        <p className="text-zinc-600 mt-4 text-base leading-relaxed">
                            Isi formulir reservasi untuk memilih tanggal dan paket foto yang Anda inginkan. Tim konsultan kami akan segera mengonfirmasi ketersediaan jadwal dan berkoordinasi langsung dengan Anda.
                        </p>

                        {/* Contact Information Cards */}
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                                <div className="w-10 h-10 rounded-lg bg-zinc-950 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Lokasi Studio</p>
                                    <p className="text-sm font-semibold text-zinc-900 mt-0.5">
                                        Jl. Kenangan Indah No. 12, Surabaya & Jakarta
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                                <div className="w-10 h-10 rounded-lg bg-zinc-950 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">WhatsApp / Telepon</p>
                                    <p className="text-sm font-semibold text-zinc-900 mt-0.5">
                                        (+62) 812-3456-7890
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                                <div className="w-10 h-10 rounded-lg bg-zinc-950 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Jam Operasional</p>
                                    <p className="text-sm font-semibold text-zinc-900 mt-0.5">
                                        Senin – Minggu: 09.00 – 21.00 WIB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Premium Booking Form Card */}
                    <div className="lg:col-span-7">
                        <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-6 sm:p-8 shadow-xl">
                            {recentlySuccessful && (
                                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 mb-6 rounded-lg flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-sm">Pemesanan Berhasil Terkirim!</p>
                                        <p className="text-xs text-emerald-700 mt-0.5">
                                            Terima kasih telah memilih GF Studio. Tim kami akan segera menghubungi Anda via WhatsApp.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={submit} encType="multipart/form-data" className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                                            Nama Lengkap <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Contoh: Budi Pratama"
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                            className="w-full rounded-lg border-zinc-300 bg-white text-zinc-900 text-sm shadow-sm focus:border-zinc-950 focus:ring-zinc-950 transition-colors py-2.5 px-3.5"
                                            required
                                        />
                                        {errors.name && <p className="text-rose-600 text-xs mt-1">{errors.name}</p>}
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label htmlFor="phone_number" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                                            Nomor WhatsApp <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone_number"
                                            placeholder="081234567890"
                                            value={data.phone_number}
                                            onChange={(e) => setData("phone_number", e.target.value)}
                                            className="w-full rounded-lg border-zinc-300 bg-white text-zinc-900 text-sm shadow-sm focus:border-zinc-950 focus:ring-zinc-950 transition-colors py-2.5 px-3.5"
                                            required
                                        />
                                        {errors.phone_number && <p className="text-rose-600 text-xs mt-1">{errors.phone_number}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Package Selection */}
                                    <div>
                                        <label htmlFor="package_id" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                                            Pilihan Paket <span className="text-rose-500">*</span>
                                        </label>
                                        <select
                                            id="package_id"
                                            value={data.package_id}
                                            onChange={(e) => setData("package_id", e.target.value)}
                                            className="w-full rounded-lg border-zinc-300 bg-white text-zinc-900 text-sm shadow-sm focus:border-zinc-950 focus:ring-zinc-950 transition-colors py-2.5 px-3.5"
                                            required
                                        >
                                            <option value="">-- Pilih Paket Foto --</option>
                                            {packages.map((pkg) => (
                                                <option key={pkg.id} value={pkg.id}>
                                                    {pkg.name} ({pkg.duration_in_hours} Jam)
                                                </option>
                                            ))}
                                        </select>
                                        {errors.package_id && <p className="text-rose-600 text-xs mt-1">{errors.package_id}</p>}
                                    </div>

                                    {/* Booking Date */}
                                    <div>
                                        <label htmlFor="booking_date" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                                            Tanggal Booking <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            id="booking_date"
                                            value={data.booking_date}
                                            onChange={(e) => setData("booking_date", e.target.value)}
                                            className="w-full rounded-lg border-zinc-300 bg-white text-zinc-900 text-sm shadow-sm focus:border-zinc-950 focus:ring-zinc-950 transition-colors py-2.5 px-3.5"
                                            required
                                        />
                                        {errors.booking_date && <p className="text-rose-600 text-xs mt-1">{errors.booking_date}</p>}
                                    </div>
                                </div>

                                {/* Address */}
                                <div>
                                    <label htmlFor="address" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                                        Alamat Lengkap / Lokasi Acara <span className="text-rose-500">*</span>
                                    </label>
                                    <textarea
                                        id="address"
                                        rows="2"
                                        placeholder="Masukkan alamat domisili atau lokasi sesi foto..."
                                        value={data.address}
                                        onChange={(e) => setData("address", e.target.value)}
                                        className="w-full rounded-lg border-zinc-300 bg-white text-zinc-900 text-sm shadow-sm focus:border-zinc-950 focus:ring-zinc-950 transition-colors py-2.5 px-3.5"
                                        required
                                    ></textarea>
                                    {errors.address && <p className="text-rose-600 text-xs mt-1">{errors.address}</p>}
                                </div>

                                {/* Additional Message */}
                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                                        Catatan / Konsep Khusus (Opsional)
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="2"
                                        placeholder="Contoh: Tema adat Jawa modern, membawa 2 kostum ganti..."
                                        value={data.message}
                                        onChange={(e) => setData("message", e.target.value)}
                                        className="w-full rounded-lg border-zinc-300 bg-white text-zinc-900 text-sm shadow-sm focus:border-zinc-950 focus:ring-zinc-950 transition-colors py-2.5 px-3.5"
                                    ></textarea>
                                </div>

                                {/* Payment Proof Upload */}
                                <div>
                                    <label htmlFor="payment_proof" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                                        Upload Bukti Transfer / DP <span className="text-rose-500">*</span>
                                    </label>
                                    <div className="mt-1 flex justify-center px-6 pt-4 pb-4 border-2 border-zinc-300 border-dashed rounded-lg hover:border-zinc-950 bg-white transition-colors">
                                        <div className="space-y-1 text-center">
                                            <UploadCloud className="mx-auto h-8 w-8 text-zinc-400" />
                                            <div className="flex text-xs text-zinc-600 justify-center">
                                                <label
                                                    htmlFor="payment_proof"
                                                    className="relative cursor-pointer rounded-md font-bold text-amber-600 hover:text-amber-500 focus-within:outline-none"
                                                >
                                                    <span>Upload file bukti</span>
                                                    <input
                                                        id="payment_proof"
                                                        name="payment_proof"
                                                        type="file"
                                                        className="sr-only"
                                                        onChange={(e) => setData("payment_proof", e.target.files[0])}
                                                        required
                                                    />
                                                </label>
                                                <p className="pl-1">atau tarik file ke sini</p>
                                            </div>
                                            <p className="text-[11px] text-zinc-400">PNG, JPG, JPEG hingga 5MB</p>
                                            {data.payment_proof && (
                                                <p className="text-xs font-semibold text-emerald-600 mt-1">
                                                    ✓ File terpilih: {data.payment_proof.name}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    {errors.payment_proof && <p className="text-rose-600 text-xs mt-1">{errors.payment_proof}</p>}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-bold py-3.5 px-6 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 text-sm cursor-pointer"
                                    >
                                        <Send size={16} className="text-amber-400" />
                                        <span>{processing ? "Memproses Reservasi..." : "Kirim Form Reservasi"}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
