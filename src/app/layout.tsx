import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader/Preloader";


export const metadata = {
  title: "Samuel Bandeira - Desenvolvedor Full Stack",
  description: "Portfólio profissional de desenvolvimento web",
  authors: [{ name: "Samuel Bandeira" }],
  keywords: ["portfolio", "desenvolvedor", "full stack", "React", "Next.js"],
  openGraph: {
    title: "Samuel Bandeira - Portfólio Profissional",
    description: "Desenvolvedor Full Stack especializado em React e Next.js",
    type: "website",
    url: "https://seusite.com",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Preloader/>
          {children}
      </body>
    </html>
  );
}
