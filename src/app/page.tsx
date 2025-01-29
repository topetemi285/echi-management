"use client";
import NavBar from "@/components/headers/NavBar";
import AboutPage from "@/components/pages/About";
import HeroPage from "@/components/pages/Hero";
import ServicePage from "@/components/pages/Service";
import Footer from "@/components/footer/footer";
import ContactPage from "@/components/pages/Contact";
import Gallery from "@/components/pages/Gallery";
// import Map from "@/components/pages/Map";

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <HeroPage />
      <AboutPage />
      <ServicePage />
      <Gallery />
      <ContactPage />
      {/* <Map /> */}
      <Footer />
    </div>
  );
}
