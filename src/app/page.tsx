"use client"

import dynamic from 'next/dynamic'
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/Spotlight";
import { useLoading } from "@/context/LoadingContext";

// Importação dinâmica dos componentes pesados
const Header = dynamic(() => import("@/components/sections/Header/Header"));
const ScrollTec = dynamic(() => import("@/components/sections/ScrollTec/ScrollTec"));
const Footer = dynamic(() => import("@/components/sections/Footer/Footer"));
const HeroParallaxDemo = dynamic(() => import("@/components/sections/HeroParallax/HeroParallax"));
const NavBar = dynamic(() => import("@/components/navigation/NavBar"));
const Background = dynamic(() => import("@/components/Background/Background"));
//const AppleCardsCarouselDemo = dynamic(() => import("@/components/sections/AppleCardsCarousel/AppleCardsCarousel"));
const Preloader = dynamic(() => import("@/components/Preloader/Preloader"));
import { AppleCardsCarouselDemo } from "@/components/sections/AppleCardsCarousel/AppleCardsCarousel";
//import TimelinePage from "@/components/sections/TimelinePage/TimelinePage";


export default function Home() {
  const { isLoaded, setLoaded } = useLoading()
  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      <div className="flex min-h-[40rem] w-full flex-col overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
            !isLoaded && "hidden" // Adiciona hidden quando não carregado
          )}
        />

        {isLoaded && (
          <>
            <Spotlight
              className="-top-40 left-0 md:-top-20 md:left-60"
              fill="white"
            />
            <NavBar />
            <Header />
            <ScrollTec />
          </>
        )}
      </div>
      <Background>
        <HeroParallaxDemo />
        <AppleCardsCarouselDemo />
        <Footer />
      </Background>
    </>
  );
}