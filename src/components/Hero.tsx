import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-brand-amber/10 via-brand-emerald/10 to-brand-sky/10">
            {/* Background Orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-brand-emerald/20 rounded-full blur-3xl animate-float-slow -z-10" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-pink/20 rounded-full blur-3xl animate-float -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl animate-pulse-slow -z-10" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6 text-center lg:text-left z-10">
                    <Badge variant="secondary" colorScheme="amber" className="text-sm px-4 py-1.5 rounded-full animate-bounce-slow">
                        🌟 KB - TK Islamic School
                    </Badge>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-fredoka font-bold leading-tight text-gray-800">
                        Mencetak Generasi <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-brand-teal">
                            Penghafal Al-Qur'an
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 font-nunito max-w-xl mx-auto lg:mx-0">
                        Membangun pondasi aqidah yang kuat dan akhlak mulia melalui metode pendidikan Islami yang menyenangkan.
                        <span className="block mt-2 font-bold text-brand-emerald">Berakhlak karimah sejak usia dini! ✨</span>
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <Card className="px-4 py-2 bg-white/80 backdrop-blur-sm border-brand-emerald/20 border hover:-translate-y-1 transition-transform">
                            <span className="text-2xl mr-2">📿</span>
                            <span className="font-bold text-gray-700">Tahfidz</span>
                        </Card>
                        <Card className="px-4 py-2 bg-white/80 backdrop-blur-sm border-brand-teal/20 border hover:-translate-y-1 transition-transform">
                            <span className="text-2xl mr-2">🤲</span>
                            <span className="font-bold text-gray-700">Aqidah</span>
                        </Card>
                        <Card className="px-4 py-2 bg-white/80 backdrop-blur-sm border-brand-pink/20 border hover:-translate-y-1 transition-transform">
                            <span className="text-2xl mr-2">🎨</span>
                            <span className="font-bold text-gray-700">Montessori</span>
                        </Card>
                    </div>

                    <div className="pt-4 flex justify-center lg:justify-start gap-4">
                        <Button size="lg" colorScheme="emerald" className="rounded-full shadow-lg shadow-brand-emerald/30">
                            Mulai Pendaftaran 📝
                        </Button>
                        <Button variant="outline" size="lg" colorScheme="emerald" className="rounded-full">
                            Tentang Kami 🏫
                        </Button>
                    </div>
                </div>

                {/* Illustration Area */}
                <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
                    {/* Main Circle Container */}
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-emerald/20 to-brand-teal/20 rounded-full animate-pulse-slow" />
                        <div className="absolute inset-4 bg-white/40 backdrop-blur-md rounded-full border-4 border-white dashed shadow-xl flex items-center justify-center animate-double-spin">
                            {/* Central Emoji */}
                            <div className="text-9xl animate-bounce-slow filter drop-shadow-2xl">
                                📖
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-10 -right-10 bg-white p-4 rounded-3xl shadow-lg animate-float-slow">
                            <span className="text-4xl">🌙</span>
                        </div>
                        <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-3xl shadow-lg animate-float">
                            <span className="text-4xl">⭐</span>
                        </div>
                        <div className="absolute top-1/2 -right-20 bg-white p-3 rounded-2xl shadow-lg animate-bounce-slow delay-700">
                            <span className="text-3xl">🎓</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
