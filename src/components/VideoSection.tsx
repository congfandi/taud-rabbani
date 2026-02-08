export default function VideoSection() {
    return (
        <section className="py-24 bg-brand-emerald/5 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-amber/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-block p-3 rounded-full bg-brand-emerald/10 animate-pulse-slow">
                        <span className="text-4xl">🎥</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-gray-800">
                        Profil Sekolah
                    </h2>
                    <p className="text-xl text-gray-500 font-nunito max-w-2xl mx-auto">
                        Mengenal lebih dekat lingkungan belajar yang ceria dan Islami di TAUD RABBANI.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            poster="/images/WhatsApp Image 2026-02-08 at 15.45.00.jpeg" // Use one image as poster
                        >
                            <source src="/videos/WhatsApp Video 2026-02-08 at 15.44.05.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
