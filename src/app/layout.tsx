import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAUD RABBANI - Tahfidz Anak Usia Dini",
  description: "Mencetak generasi penghafal Al Qur'an yang berakhlak karimah sejak usia dini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${fredoka.variable} ${nunito.variable} antialiased font-nunito`}
      >
        {children}
      </body>
    </html>
  );
}
