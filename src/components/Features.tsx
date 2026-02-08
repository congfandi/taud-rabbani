import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

const features = [
    {
        icon: "🎓",
        title: "Kurikulum Terintegrasi",
        description: "Memadukan pendidikan Islam (Tahfidz & Aqidah) dengan metode Montessori untuk pembelajaran yang optimal.",
        color: "border-t-brand-purple"
    },
    {
        icon: "👨🏫",
        title: "Guru Berpengalaman",
        description: "Dididik oleh para Hafidz/Hafidzah yang berpengalaman dan tersertifikasi dalam pendidikan anak usia dini.",
        color: "border-t-brand-amber"
    },
    {
        icon: "🏡",
        title: "Lingkungan Islami",
        description: "Suasana belajar yang nyaman, aman, dan kondusif untuk tumbuh kembang karakter Islami anak.",
        color: "border-t-brand-sky"
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block p-3 rounded-full bg-brand-purple/10 animate-pulse-slow">
                        <span className="text-4xl">✨</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-amber">
                        Keunggulan TAUD RABBANI
                    </h2>
                    <p className="text-xl text-gray-500 font-nunito">Mengapa orang tua memilih kami?</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className={`bg-white border-t-8 ${feature.color} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
                        >
                            <CardHeader className="text-center pb-2">
                                <div className="text-6xl mb-4 mx-auto w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center shadow-inner">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-2xl text-gray-800">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 font-nunito leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
