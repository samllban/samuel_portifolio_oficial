"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);

    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-400, 400]),
        springConfig
    );

    const row1Ref = React.useRef<HTMLDivElement>(null);
    const row2Ref = React.useRef<HTMLDivElement>(null);
    const row3Ref = React.useRef<HTMLDivElement>(null);

    const [row1Width, setRow1Width] = React.useState(0);
    const [row2Width, setRow2Width] = React.useState(0);
    const [row3Width, setRow3Width] = React.useState(0);

    React.useEffect(() => {
        if (row1Ref.current) {
            setRow1Width(row1Ref.current.scrollWidth - row1Ref.current.offsetWidth);
        }
        if (row2Ref.current) {
            setRow2Width(row2Ref.current.scrollWidth - row2Ref.current.offsetWidth);
        }
        if (row3Ref.current) {
            setRow3Width(row3Ref.current.scrollWidth - row3Ref.current.offsetWidth);
        }
    }, []);

    return (
        <div
            ref={ref}
            className="min-h-[100vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="relative space-y-16"
            >
                {/* First Row */}
                <motion.div className="overflow-hidden cursor-grab active:cursor-grabbing">
                    <motion.div
                        ref={row1Ref}
                        drag="x"
                        dragConstraints={{ left: -row1Width, right: 0 }}
                        className="flex flex-row-reverse space-x-reverse space-x-10 mb-10"
                    >
                        {firstRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateX}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Second Row */}
                <motion.div className="overflow-hidden cursor-grab active:cursor-grabbing">
                    <motion.div
                        ref={row2Ref}
                        drag="x"
                        dragConstraints={{ left: -row2Width, right: 0 }}
                        className="flex flex-row space-x-10 mb-10"
                    >
                        {secondRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateXReverse}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Third Row */}
                <motion.div className="overflow-hidden cursor-grab active:cursor-grabbing">
                    <motion.div
                        ref={row3Ref}
                        drag="x"
                        dragConstraints={{ left: -row3Width, right: 0 }}
                        className="flex flex-row-reverse space-x-reverse space-x-10 pb-40"
                    >
                        {thirdRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateX}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-30">
            <h1 className="text-2xl md:text-7xl font-bold text-white">
                Transformando ideias em <br />experiências digitais memoráveis
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-200">
                Construo websites e interfaces que não apenas impressionam visualmente,
                mas também entregam resultados. Cada projeto é desenvolvido
                com as melhores práticas de UI/UX, performance e tecnologia moderna.
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            className="group/product h-96 w-full max-w-[35rem] md:max-w-[24rem] sm:max-w-[18rem] relative shrink-0"
        >
            <div className="block group-hover/product:shadow-2xl h-full w-full relative overflow-hidden">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover object-left-top"
                    width={480}
                    height={384}
                />
            </div>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white z-10">
                {product.title}
            </h2>
        </motion.div>
    );
};
