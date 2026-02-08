import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';

export default function CTA() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <Card className="relative overflow-hidden bg-gradient-to-br from-brand-emerald via-brand-teal to-brand-sky text-white border-none shadow-2xl">
                    {/* Background Decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-amber/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <CardContent className="relative z-10 p-12 text-center space-y-8">
                        <div className="inline-block p-4 rounded-full bg-white/20 backdrop-blur-md animate-bounce-slow">
                            <span className="text-5xl">🌟</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-fredoka font-bold">
                            Bergabunglah Bersama Kami!
                        </h2>

                        <p className="text-xl md:text-2xl font-nunito font-medium max-w-2xl mx-auto opacity-90">
                            Mari wujudkan generasi Qur'ani yang cerdas dan berakhlak mulia. Kuota terbatas! 🚀
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                            <a
                                href="https://wa.me/6287850951835"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    colorScheme="white"
                                    className="font-bold text-brand-emerald hover:scale-105 shadow-lg w-full sm:w-auto"
                                >
                                    📞 Hubungi Kami
                                </Button>
                            </a>
                            <Button
                                size="lg"
                                variant="primary"
                                colorScheme="pink"
                                className="font-bold border-2 border-white/50 hover:scale-105 shadow-lg"
                            >
                                📝 Form Pendaftaran
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
