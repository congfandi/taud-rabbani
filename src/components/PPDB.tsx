import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

export default function PPDB() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-brand-emerald/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block p-3 rounded-full bg-brand-amber/10 animate-bounce-slow">
                        <span className="text-4xl">📝</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-amber to-brand-emerald">
                        PPDB 2026/2027
                    </h2>
                    <p className="text-xl text-gray-500 font-nunito">
                        Penerimaan Peserta Didik Baru TAUD RABBANI
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Program Unggulan */}
                    <Card className="border-t-8 border-brand-emerald hover:shadow-2xl transition-all duration-300">
                        <CardHeader className="bg-brand-emerald/5 pb-6">
                            <div className="text-center">
                                <span className="text-5xl mb-4 block">🏆</span>
                                <CardTitle className="text-3xl text-brand-emerald">Program Unggulan</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-8">
                            <ul className="space-y-4">
                                {[
                                    "Menanamkan aqidah yang sesuai Al Qur'an dan Al Hadits",
                                    "Hafal Al Qur'an target 3 juz",
                                    "Hafal Hadits dan doa pilihan",
                                    "Memiliki akhlak yang baik",
                                    "Praktek Ibadah harian"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-brand-emerald/5 transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-emerald/20 text-brand-emerald flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <span className="text-gray-700 font-nunito font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Persyaratan Pendaftaran */}
                    <Card className="border-t-8 border-brand-amber hover:shadow-2xl transition-all duration-300">
                        <CardHeader className="bg-brand-amber/5 pb-6">
                            <div className="text-center">
                                <span className="text-5xl mb-4 block">📋</span>
                                <CardTitle className="text-3xl text-brand-amber">Persyaratan</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-8">
                            <ul className="space-y-4">
                                {[
                                    "Usia 3.5 tahun",
                                    "FC Akta kelahiran",
                                    "FC KK",
                                    "FC KTP orang tua",
                                    "Pas Foto 3x4",
                                    "Mengisi Formulir Pendaftaran"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-amber/5 transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-amber/20 text-brand-amber flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-nunito font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
