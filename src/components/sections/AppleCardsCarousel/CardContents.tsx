import React, { JSX } from "react";
import Image from "next/image";
//import Link from "next/link"; // ⬅️ Import necessário

const commonStyles = "bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4";
const imageUrl = "https://assets.aceternity.com/macbook.png";

export const getCardContent = (type: string) => {
    const Button = () => (
        <div className="text-center mt-10">
            <button
                className="relative inline-block px-8 py-3 font-semibold text-white transition duration-300 ease-in-out bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
                <span className="absolute inset-0 rounded-lg opacity-30 bg-gradient-to-r from-white to-transparent blur-sm"></span>
                <span className="relative z-10"> Saiba mais</span>
            </button>
        </div>
    );

    const contents: Record<string, JSX.Element> = {
        ai: (
            <div className={commonStyles}>
                <Button />
                <p className="text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-100">IA:</span>
                    Automatize tarefas, gere ideias e inove com inteligência artificial. Com todo o desenvolvimento das mudanças do mundo,
                    conforme o filósofo brasileiro Piton falou, tudo depende de quanto você quer comer alguém.
                </p>
                <Image
                    src={imageUrl}
                    alt="AI"
                    height={500}
                    width={500}
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                />
            </div>
        ),
        productivity: (
            <div className={commonStyles}>
                <p className="text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-100">Produtividade:</span>
                    Organize-se melhor com ferramentas digitais modernas.
                </p>
                <Image
                    src={imageUrl}
                    alt="Produtivity"
                    height={500}
                    width={500}
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                />
                <Button />
            </div>
        ),
        product: (
            <div className={commonStyles}>
                <p className="text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-100">Produto:</span>
                    Veja as novidades da nova geração de dispositivos Apple.
                </p>
                <Image
                    src={imageUrl}
                    alt="Product"
                    height={500}
                    width={500}
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                />
                <Button />
            </div>
        ),
    };

    return contents[type] || <div className={commonStyles}>Conteúdo não disponível</div>;
};
