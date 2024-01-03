"use client"

import About from "@/components/about";
import SIG from "@/components/sig";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
//import BlogList from "@/components/Blogs/Bloglist";


export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <SIG />
            <Footer />
        </>
    )
}