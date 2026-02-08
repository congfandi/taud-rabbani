import Image from 'next/image';
import { Button } from './ui/Button';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* About Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/favicon/android-chrome-192x192.png"
                                    alt="TAUD RABBANI Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-fredoka">TAUD RABBANI</h3>
                                <p className="text-sm text-gray-400 font-nunito">Tahfidz Anak Usia Dini</p>
                            </div>
                        </div>
                        <p className="text-gray-400 font-nunito leading-relaxed">
                            Mencetak generasi Qur'ani yang berakhlak mulia, cerdas, dan mandiri sejak usia dini.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-emerald transition-colors cursor-pointer flex items-center justify-center">
                                    <span className="text-xs">social</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold font-fredoka border-b border-gray-700 pb-2 inline-block">Hubungi Kami</h4>
                        <ul className="space-y-4 font-nunito text-gray-300">
                            <li className="flex items-start gap-3 group md:cursor-pointer">
                                <span className="text-brand-emerald mt-1">📍</span>
                                <span className="group-hover:text-white transition-colors">
                                    Jl. Mangga Raya no 15 Perumnas, Kamal
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group md:cursor-pointer">
                                <span className="text-brand-emerald">📞</span>
                                <span className="group-hover:text-white transition-colors">087-850-951-835</span>
                            </li>
                            <li className="flex items-center gap-3 group md:cursor-pointer">
                                <span className="text-brand-emerald">📧</span>
                                <span className="group-hover:text-white transition-colors">info@taudrabbani.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours Column */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold font-fredoka border-b border-gray-700 pb-2 inline-block">Jam Operasional</h4>
                        <ul className="space-y-3 font-nunito text-gray-300">
                            <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                                <span>Senin - Jumat</span>
                                <span className="font-bold text-brand-emerald">07.00 - 15.00</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                                <span>Sabtu</span>
                                <span className="font-bold text-brand-emerald">08.00 - 12.00</span>
                            </li>
                            <li className="flex justify-between items-center pb-2">
                                <span>Minggu</span>
                                <span className="text-red-400 font-bold">Libur</span>
                            </li>
                        </ul>
                        <Button size="sm" variant="outline" className="w-full mt-4 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white rounded-xl">
                            Jadwalkan Kunjungan 📅
                        </Button>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 font-nunito text-sm">
                    <p>© {new Date().getFullYear()} TAUD RABBANI. Semua hak dilindungi undang-undang.</p>
                </div>
            </div>
        </footer>
    );
}
