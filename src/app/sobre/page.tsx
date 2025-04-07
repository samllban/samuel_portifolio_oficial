'use client';

import React from 'react';
import NavBar from '@/components/navigation/NavBar';
import RedeSociais from '@/components/sections/Footer/RedesSociais';
//import { AdvancedImage } from '@cloudinary/react';
//import { CloudinaryImage } from '@cloudinary/url-gen';
import Background from '@/components/Background/Background';
import Image from 'next/image';


export default function SobrePage() {

    return (
        <Background>
            <NavBar />
            <div className="flex pt-25">
                <div className="max-w-7xl pt-24 mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    {/* About me header */}
                    <div className="text-center mb-12">
                        <h2 className="text-lg md:text-xl font-medium text-gray-400 mb-2 tracking-wider">
                            CONHEÇA MINHA JORNADA
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Mim</span>
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-600 mx-auto"></div>
                    </div>

                    {/* Content section */}
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Text column */}
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                Olá, eu sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Samuel Bandeira</span>
                            </h2>

                            <div className="space-y-6">
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Sou um <span className="font-semibold text-white">Web Designer</span> e <span className="font-semibold text-white">Desenvolvedor de Software</span> especializado em criar experiências digitais impactantes que destacam produtos e marcas.
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Com mais de 2 anos de experiência, ajudo empresas a fortalecer sua presença online através de soluções web modernas, performáticas e visualmente impressionantes.
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Atualmente cursando <span className="font-semibold text-white">Ciência da Computação</span> e <span className="font-semibold text-white">Análise e Desenvolvimento de Sistemas</span>, estou constantemente expandindo meu conhecimento para oferecer as melhores soluções tecnológicas.
                                </p>
                            </div>

                            <div className="pt-4">
                                <RedeSociais />
                            </div>
                        </div>

                        {/* Image column */}
                        <div className="lg:w-1/2 flex justify-center">
                            <div className="relative group">
                                <Image
                                    src="/img/samuel.jpg"// Caminho relativo à pasta public
                                    alt="Samuel Bandeira"
                                    width={500}  // Largura em pixels
                                    height={500} // Altura em pixels
                                    className="object-cover w-full max-w-md rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                                    quality={85} // Qualidade otimizada (1-100)
                                    priority={false} // Lazy loading
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                            </div>
                        </div>
                    </div>

                    {/* Skills section */}
                    <div className="mt-24 md:mt-32">
                        <div className="max-w-3xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Habilidades</span>
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Domino diversas tecnologias modernas para criação de sistemas web completos, incluindo <span className="font-semibold text-white">HTML5</span>, <span className="font-semibold text-white">CSS</span>, <span className="font-semibold text-white">JavaScript</span>, <span className="font-semibold text-white">React</span>, <span className="font-semibold text-white">Node.js</span> e <span className="font-semibold text-white">Figma</span>.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed mt-4">
                                Minha abordagem combina design impactante com desenvolvimento robusto, garantindo soluções que não apenas impressionam visualmente, mas também oferecem performance excepcional e experiência de usuário impecável.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </Background>
    );
}