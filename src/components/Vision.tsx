export default function Vision() {
    return (
        <section className="py-20 bg-gradient-to-r from-brand-emerald to-brand-teal text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div> {/* Placeholder for pattern if needed, or just CSS pattern */}
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-block p-4 rounded-full bg-white/20 backdrop-blur-md mb-6 animate-pulse-slow">
                    <span className="text-4xl">🎯</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-fredoka font-bold mb-6">Visi Kami</h2>
                <blockquote className="text-xl md:text-3xl font-nunito font-medium max-w-4xl mx-auto leading-relaxed">
                    &ldquo;Mencetak generasi penghafal Al Qur'an yang berakhlak karimah sejak usia dini&rdquo;
                </blockquote>
            </div>
        </section>
    );
}
