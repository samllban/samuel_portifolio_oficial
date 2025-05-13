'use client'
import { GlowingEffect } from "@/components/ui/Glowing-effect";
import React from 'react';
import NavBar from '@/components/navigation/NavBar';
import Footer from "@/components/sections/Footer/Footer";
import Background from "@/components/Background/Background";
import { Code, SearchCheck, Gauge, Headphones, Monitor, ShoppingCart } from "lucide-react";

export default function Servicos() {
    return (
        <Background>
            <div className="flex pt-25">
                <div className="mx-auto w-full max-w-7xl px-4 py-12 md:py-16 lg:py-20">
                    <NavBar />
                    <div className="text-center mb-8 md:mb-12 p-3">
                        <h1 className="font-bold text-white text-2xl md:text-4xl tracking-wider">Meus</h1>
                        <p className="font-normal text-gray-200 text-lg md:text-3xl">SERVIÇOS</p>
                    </div>

                    <div className="px-4 md:px-6 lg:px-8">
                        <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-8 xl:max-h-[34rem] xl:grid-rows-2">
                            <GridItem
                                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                                icon={<Code className="h-6 w-6 text-white" />}
                                title="Desenvolvimento Web"
                                description="Criação de sites modernos, responsivos e com alta performance para todos os dispositivos."
                            />

                            <GridItem
                                area="md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/8]"
                                icon={<Gauge className="h-6 w-6 text-white" />}
                                title="Velocidade"
                                description="Otimização de sites para melhorar o desempenho e reduzir o tempo de carregamento."
                            />

                            <GridItem
                                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/8/2/13]"
                                icon={<SearchCheck className="h-6 w-6 text-white" />}
                                title="SEO"
                                description="Aprimoramento para melhores posições nos mecanismos de busca, atraindo mais visitantes de forma orgânica."
                            />

                            <GridItem
                                area="md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/5]"
                                icon={<Headphones className="h-6 w-6 text-white" />}
                                title="Suporte"
                                description="Assistência técnica especializada para manutenção e resolução de problemas em sites e sistemas, com cobertura de até 5 meses."
                            />

                            <GridItem
                                area="md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/9]"
                                icon={<ShoppingCart className="h-6 w-6 text-white" />}
                                title="Loja Online"
                                description="Criação e personalização de e-commerces modernos para expandir suas vendas no ambiente digital."
                            />

                            <GridItem
                                area="md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]"
                                icon={<Monitor className="h-6 w-6 text-white" />}
                                title="Design UX/UI Único"
                                description="Cada site é único. Por isso, desenvolvo layouts personalizados que refletem a identidade e os objetivos de cada cliente."
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </Background>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <>
            {/* Cards */}
            <li className={`min-h-[14rem] list-none ${area}`}>
                <div className="relative h-full rounded-2.5xl border-gray-700 p-2 md:rounded-3xl md:p-3">
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                        <div className="relative flex flex-1 flex-col justify-between gap-3">
                            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
                                {icon}
                            </div>
                            <div className="space-y-3">
                                <h2 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white ">
                                    {title}
                                </h2>
                                <p
                                    className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
                        md:text-base/[1.375rem]  text-gray-200 "
                                >
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}
