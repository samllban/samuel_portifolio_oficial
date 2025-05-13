import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link"; // ⬅️ Import necessário

const commonStyles = " dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4";
const imageUrl = "https://assets.aceternity.com/macbook.png";

export const getCardContent = (type: string) => {
    const Button = ({ href = "/" }: { href?: string }) => (
        <div className="text-center mt-10">
            <Link href={href}>
                <button
                    className="relative inline-block px-8 py-3 font-semibold text-white transition duration-300 ease-in-out bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300"
                >
                    <span className="absolute inset-0 rounded-lg opacity-30 bg-gradient-to-r from-white to-transparent blur-sm"></span>
                    <span className="relative z-10">Saiba mais</span>
                </button>
            </Link>
        </div>
    );


    const contents: Record<string, JSX.Element> = {
        ai: (
            <div className={commonStyles}>
                <p className="text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-100">Games: </span>
                    Plataforma desenvolvida com as melhores práticas de design, pensada para maximizar vendas de jogos online com desempenho, estética e usabilidade de alto nível.

                </p>
                <Image src={imageUrl} alt="AI" height={500} width={500} className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                <Button href="https://mykdgames.netlify.app/" />
            </div>
        ),
        productivity: (
            <div className={commonStyles}>
                <p className="text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-100">Vendas:</span>
                    Site construído com o intuido de prospectar clientes para vendas de infoprodutos. Todo construido manualmente como html, css e js.
                </p>
                <Image src={imageUrl} alt="Produtivity" height={500} width={500} className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                <Button href="https://vendasonlineassis.netlify.app/" />
            </div>
        ),
        product: (
            <div className={commonStyles}>
                <p className="text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-100">Institucional:</span>
                    Site desenvolvido para uma profissional da área da saúde mental, com foco em destacar os principais aspectos do seu trabalho e fortalecer sua presença online.                </p>
                <Image src={imageUrl} alt="Product" height={500} width={500} className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                <Button href="https://mayarapsi.netlify.app/" />
            </div>
        ),
        dashbord: (
            <div className={commonStyles}>
                <p className="text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-100">Dashboard:</span>
                    Visualize seus dados em tempo real com dashboards interativos, gráficos claros e métricas acionáveis — tudo em um só lugar.
                </p>
                <Image src={imageUrl} alt="Dashboard" height={500} width={500} className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                <Button />
            </div>
        ),
        nestjs: (
            <div className={commonStyles}>
                <p className="text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-100">NestJS:</span>
                    Conheça o poder do NestJS — um framework robusto para construir APIs escaláveis com TypeScript, modularidade e performance.
                </p>
                <Image src={imageUrl} alt="NestJS" height={500} width={500} className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                <Button />
            </div>
        ),
        python: (
            <div className={commonStyles}>
                <p className="text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-100">Python:</span>
                    Linguagem versátil e poderosa, Python é perfeita para automação, análise de dados, IA e desenvolvimento backend com rapidez e simplicidade.
                </p>
                <Image src={imageUrl} alt="Python" height={500} width={500} className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                <Button />
            </div>
        ),
    };

    return contents[type] || <div className={commonStyles}>Conteúdo não disponível</div>;
};
