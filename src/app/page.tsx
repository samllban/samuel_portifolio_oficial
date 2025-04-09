"use client"

import Header from "@/components/sections/Header/Header";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/Spotlight";
import ScrollTec from "@/components/sections/ScrollTec/ScrollTec";
import Footer from "@/components/sections/Footer/Footer";
import HeroParallaxDemo from "@/components/sections/HeroParallax/HeroParallax";
import NavBar from "@/components/navigation/NavBar";
import Background from "@/components/Background/Background";
import { AppleCardsCarouselDemo } from "@/components/sections/AppleCardsCarousel/AppleCardsCarousel";
import Preloader from "@/components/Preloader/Preloader";
import { useLoading } from "@/context/LoadingContext";


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