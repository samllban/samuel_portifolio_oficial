"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/Hero-parallax";

export default function HeroParallaxDemo() {
    return (
        <HeroParallax
            products1={products1}
            products2={products2}
            products3={products3}
        />
    );
}

export const products1 = [
    {
        title: "loja-online",
        thumbnail: "/img/eccomerceEtap.jpeg",
    },
    {
        title: "loja online",
        thumbnail: "/img/volument.jpg",
    },
    {
        title: "landing page",
        thumbnail: "/img/cripto.jpg",
    },
    {
        title: "loja online",
        thumbnail: "/img/shooperfile.jpeg",
    },
    {
        title: "loja online",
        thumbnail: "/img/larguilhe.jpg",
    },
];

export const products2 = [
    {
        title: "landing page",
        thumbnail: "/img/reality.jpg",
    },
    {
        title: "e-ccomerce",
        thumbnail: "/img/live_travel.jpg",
    },
    {
        title: "loja online",
        thumbnail: "/img/create.jpg",
    },
    {
        title: "landing page",
        thumbnail: "/img/rock.jpg",
    },
    {
        title: "loja online",
        thumbnail: "/img/eccomerce.jpg",
    },
];

export const products3 = [
    {
        title: "Site institucional",
        thumbnail: "/img/work_better.jpg",
    },
    {
        title: "loja online",
        thumbnail: "/img/neve.jpg",
    },
    {
        title: "E Free Invoice",
        thumbnail: "/img/lup.jpeg",
    },
    {
        title: "landing page",
        thumbnail: "/img/festividade.jpeg",
    },
    {
        title: "landing page",
        thumbnail: "/img/moveis.jpeg",
    },
];
