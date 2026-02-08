import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import VideoSection from "@/components/VideoSection";
import Mission from "@/components/Mission";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import PPDB from "@/components/PPDB";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Vision />
      <VideoSection />
      <Mission />
      <Features />
      <Gallery />
      <PPDB />
      <CTA />
      <Footer />
    </main>
  );
}
