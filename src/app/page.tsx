"use client";
import NavBar from "@/components/headers/NavBar";
import AboutPage from "@/components/pages/About";
import HeroPage from "@/components/pages/Hero";
import ServicePage from "@/components/pages/Service";
// import HeroPage from "./pages/hero/page";
// import AboutPage from "./pages/about/page";
// import ServicePage from "./pages/service/page";
// import ContactPage from "./pages/contact/page";
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
