"use client"

import About from "@/components/about";
import SIG from "@/components/sig";
import Footer from "@/components/footer";
import Hero from "@/components/hero";


export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <SIG />
            <Footer />
        </>
    )
}