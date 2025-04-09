import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "@/context/LoadingContext";

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
  display: "swap",
  weight: ["400", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
