"use client";
import NavBar from "@/components/headers/NavBar";
import AboutPage from "@/components/pages/About";
import HeroPage from "@/components/pages/Hero";
import ServicePage from "@/components/pages/Service";
import Footer from "@/components/footer/footer";
import ContactPage from "@/components/pages/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <AboutPage />
      <ServicePage />
      <ContactPage />
      <Footer />
    </>
  );
}
