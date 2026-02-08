"use client";

import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
                scrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                        <Image
                            src="/favicon/android-chrome-192x192.png"
                            alt="TAUD RABBANI Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl sm:text-2xl font-fredoka font-bold text-gray-800 leading-tight group-hover:text-brand-emerald transition-colors">
                            TAUD RABBANI
                        </h1>
                        <span className="text-xs sm:text-sm font-nunito text-gray-500 font-medium">
                            Tahfidz Anak Usia Dini
                        </span>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden sm:block">
                    <Button variant="primary" colorScheme="pink" size="md" className="rounded-full shadow-lg hover:shadow-brand-pink/50 animate-pulse-slow">
                        Daftar Sekarang 🚀
                    </Button>
                </div>

                {/* Mobile Menu Icon (Placeholder for now, keeping it simple as per PRD which didn't strictly require mobile menu implementation but implied it in responsive needs) */}
                <div className="sm:hidden">
                    <Button variant="primary" colorScheme="pink" size="sm" className="rounded-full">
                        Daftar
                    </Button>
                </div>
            </div>
        </nav>
    );
}
