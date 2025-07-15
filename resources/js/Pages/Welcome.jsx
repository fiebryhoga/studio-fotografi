import React, { useEffect } from "react";
import { Head } from "@inertiajs/react";

import AOS from 'aos'; // <-- Import AOS


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

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            offset: 200,
        });
    }, []);


    return (
        <>
            <Head title="Studio Fotografi Profesional" />
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
