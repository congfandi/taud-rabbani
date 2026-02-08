import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';

const missions = [
    {
        icon: "📖",
        title: "Menumbuhkan Kebiasaan",
        description: "Membaca dan menghafal Al Qur'an menjadi rutinitas yang menyenangkan.",
        gradient: "from-brand-amber/20 to-orange-100",
        border: "border-brand-amber",
        titleColor: "text-brand-amber"
    },
    {
        icon: "🕌",
        title: "Membekali Aqidah",
        description: "Menanamkan aqidah yang lurus sesuai Al Qur'an dan Sunnah.",
        gradient: "from-brand-emerald/20 to-teal-100",
        border: "border-brand-emerald",
        titleColor: "text-brand-emerald"
    },
    {
        icon: "🤲",
        title: "Menumbuhkan Kegemaran",
        description: "Membangun kecintaan anak dalam melaksanakan ibadah harian.",
        gradient: "from-brand-pink/20 to-rose-100",
        border: "border-brand-pink",
        titleColor: "text-brand-pink"
    },
    {
        icon: "💫",
        title: "Memiliki Adab",
        description: "Membentuk karakter anak yang beradab dan berakhlak mulia.",
        gradient: "from-brand-sky/20 to-blue-100",
        border: "border-brand-sky",
        titleColor: "text-brand-sky"
    }
];

export default function Mission() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block p-3 rounded-full bg-brand-pink/10 animate-bounce-slow">
                        <span className="text-4xl">🚀</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">
                        Misi Kami
                    </h2>
                    <p className="text-xl text-gray-500 font-nunito">Empat pilar pendidikan untuk anak tercinta</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {missions.map((mission, index) => (
                        <Card
                            key={index}
                            className={`border-2 ${mission.border} bg-gradient-to-br ${mission.gradient} hover:shadow-xl transition-all duration-300 group`}
                        >
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                    {mission.icon}
                                </div>
                                <CardTitle className={`text-xl md:text-2xl ${mission.titleColor}`}>
                                    {mission.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-lg text-gray-700 font-medium">
                                    {mission.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
