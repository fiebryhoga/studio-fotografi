import React from "react";
import { Head } from "@inertiajs/react";

import HeroSection from "@/Components/Public/HeroSection";
import AboutSection from "@/Components/Public/AboutSection";
import PackagesSection from "@/Components/Public/PackagesSection";
import PortfolioSection from "@/Components/Public/PortfolioSection";
import BookingFormSection from "@/Components/Public/BookingFormSection";
import Footer from "@/Components/Public/Footer";
import Navbar from "@/Components/Public/Navbar";

export default function Welcome({
    packages,
    portfolios,
    // canLogin,
    // canRegister,
}) {
    return (
        <>
            <Head title="GF Studio - Studio Fotografi Profesional" />
            <Navbar />
            <main className="bg-white">
                <HeroSection />
                <PackagesSection packages={packages} />
                <AboutSection />
                <PortfolioSection portfolios={portfolios} />
                <BookingFormSection packages={packages} />
            </main>
            <Footer />
        </>
    );
}
