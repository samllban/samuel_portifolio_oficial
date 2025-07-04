"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";
import { getCardContent } from "@/components/sections/AppleCardsCarousel/CardContents";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
                Portfólio
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const data = [
    {
        category: "Loja de jogos",
        title: "",
        src: "/img/jogos.webp",
        content: getCardContent("ai"),
    },
    {
        category: "Página de Vendas",
        title: "",
        src: "/img/pagina.webp",
        content: getCardContent("productivity"),
    },
    {
        category: "Site Institucional",
        title: "",
        src: "/img/psico.webp",
        content: getCardContent("product"),
    },
];
/* 
{
    category: "Visualização de Dados",
    title: "Monitore tudo com painéis interativos em tempo real.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: getCardContent("dashbord"),
},
{
    category: "Back-end Moderno",
    title: "Construa APIs escaláveis com NestJS + TypeScript.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: getCardContent("nestjs"),
},
{
    category: "Código com Propósito",
    title: "Python para IA, automações e tudo o que você imaginar.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: getCardContent("python"),
},

*/