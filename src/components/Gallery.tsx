import { Card } from "./ui/Card";
import Image from "next/image";

// Selecting a subset of images for the gallery
const galleryImages = [
    "/images/WhatsApp Image 2026-02-08 at 15.45.00.jpeg",
    "/images/WhatsApp Image 2026-02-08 at 15.45.01.jpeg",
    "/images/WhatsApp Image 2026-02-08 at 15.45.02.jpeg",
    "/images/WhatsApp Image 2026-02-08 at 15.45.03.jpeg",
    "/images/WhatsApp Image 2026-02-08 at 15.45.04.jpeg",
    "/images/WhatsApp Image 2026-02-08 at 15.45.05.jpeg",
    "/images/WhatsApp Image 2026-02-08 at 15.45.06.jpeg",
    "/images/WhatsApp Image 2026-02-08 at 15.45.07.jpeg",
];

export default function Gallery() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block p-3 rounded-full bg-brand-sky/10 animate-bounce-slow">
                        <span className="text-4xl">📸</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-emerald">
                        Galeri Kegiatan
                    </h2>
                    <p className="text-xl text-gray-500 font-nunito">
                        Intip keseruan aktivitas belajar dan bermain kami!
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group ${index === 0 || index === 7 ? "md:col-span-2 md:row-span-2" : ""
                                }`}
                        >
                            <div className="aspect-square relative w-full h-full">
                                {/* Using standard img tag for now if Next.js Image has issues with local files in static export without loader, 
                     but Next.js Image with unoptimized: true (which we set) should work fine. */}
                                <Image
                                    src={src}
                                    alt={`Kegiatan TAUD RABBANI ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-3xl">✨</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
