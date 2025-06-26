"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import Typed from "typed.js";
import Link from 'next/link';

export default function Header() {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Full&nbsp;Stack&nbsp;",
                "Freelancer&nbsp;",
                "Web&nbsp;Designer",
            ],
            typeSpeed: 120,
            backSpeed: 100,
            loop: true,
            smartBackspace: true,
            startDelay: 300,
            backDelay: 1000,
        });

        return () => typed.destroy();
    }, []);

    useEffect(() => {
        const startInicial = () => {
            tl.fromTo(".titleSamuel",
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0 }
            )
                .fromTo(".tituloSite",
                    { opacity: 0, y: 100 },
                    { opacity: 1, y: 0, delay: 1 }, "-=0.75"
                )
                .fromTo(".buttonVamos",
                    { opacity: 0, y: 100 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
                );
        };
        startInicial();
    }, [tl]);

    return (
        <div className="flex w-screen min-h-screen items-center justify-center ">
            {/* Conteúdo principal */}
            <div className=" max-w-7xl mx-auto mt-20 w-full max-w-7xl p-4 pt-16 md:pt-20 text-center space-y-6 md:space-y-8">
                <h1 className="titleSamuel bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-5xl font-bold text-transparent md:text-8xl tracking-normal">
                    Samuel Bandeira
                </h1>
                <p className="buttonVamos bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-lg md:text-xl lg:text-2xl xl:text-4xl text-transparent font-light flex justify-center items-center gap-2 tracking-normal">
                    Desenvolvedor{" "}
                    <span ref={el} lang="en" className="font-semibold"></span>
                </p>
                <p className="tituloSite mx-auto mt-6 max-w-lg text-center text-base font-normal text-neutral-300 tracking-normal">
                    Sites que engajam e impulsionam seu negócio para o próximo nível!
                </p>
                <div className="pt-4">
                    <Link
                        href="/contato"
                        passHref={false}
                        className="mx-auto w-60 block"
                    >
                        <button className="transform rounded-lg bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 tracking-normal">
                            Vamos conversar!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}