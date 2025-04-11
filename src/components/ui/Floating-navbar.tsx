// components/ui/Floating-navbar.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";


interface NavItem {
    name: string;
    link: string;
}

interface FloatingNavProps {
    navItems: NavItem[];
    className?: string;
}

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);
    const [nextPage, setNextPage] = useState<string | null>(null);


    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const direction = current - (scrollYProgress.getPrevious() || 0);
            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                setVisible(direction < 0);
            }
        }
    });

    const handleNavigation = (href: string) => {
        if (pathname === href) return
        setNextPage(href);
        setTimeout(() => {
            router.push(href);
        }, 1000);
    };

    return (
        <>
            <AnimatePresence>
                {nextPage && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                        className="fixed inset-0 z-[9998] bg-black"
                        onAnimationComplete={() => setNextPage(null)} // Reseta após animação
                    />
                )}
            </AnimatePresence>
            {/* Barra de navegação original (com todas as animações existentes) */}
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 1, y: -100 }}
                    animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={cn(
                        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[9999] pr-2 pl-8 py-2 items-center justify-center space-x-4",
                        className
                    )}
                >
                    {navItems.map((navItem, idx) => (
                        <button
                            key={`link-${idx}`}
                            onClick={() => handleNavigation(navItem.link)}
                            className={cn(
                                "relative text-neutral-100 items-center flex space-x-1 hover:text-neutral-300 cursor-pointer",
                                "transition-all duration-300 hover:scale-105"
                            )}
                        >
                            <span className="text-sm">{navItem.name}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                    <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-4 py-2 rounded-full">
                        <span>Samuel Dev</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                    </button>
                </motion.div>
            </AnimatePresence>
        </>
    );
};