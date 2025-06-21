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
        title: "landing page",
        thumbnail: "/img/cripto.webp",
    },
    {
        title: "loja-online",
        thumbnail: "/img/eccomerceEtap.webp",
    },
    {
        title: "loja online",
        thumbnail: "/img/volument.webp",
    },
    {
        title: "loja online",
        thumbnail: "/img/shooperfile.webp",
    },
    {
        title: "loja online",
        thumbnail: "/img/larguilhe.webp",
    },
];

export const products2 = [
    {
        title: "landing page",
        thumbnail: "/img/reality.webp",
    },
    {
        title: "e-ccomerce",
        thumbnail: "/img/live_travel.webp",
    },

    {
        title: "landing page",
        thumbnail: "/img/festividade.webp",
    },
    {
        title: "landing page",
        thumbnail: "/img/rock.webp",
    },
    {
        title: "loja online",
        thumbnail: "/img/eccomerce.webp",
    },
];

export const products3 = [
    {
        title: "Site institucional",
        thumbnail: "/img/work_better.webp",
    },
    {
        title: "site institucional",
        thumbnail: "/img/neve.webp",
    },
    {
        title: "E Free Invoice",
        thumbnail: "/img/lup.webp",
    },

    {
        title: "loja online",
        thumbnail: "/img/create.webp",
    },
    {
        title: "landing page",
        thumbnail: "/img/moveis.web",
    },
];
