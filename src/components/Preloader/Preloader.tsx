// components/Preloader.tsx
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Ativa o preloader quando o pathname muda (navegação entre páginas)
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1000); //
        return () => clearTimeout(timer);
    }, [pathname]); // ⬅️ Monitora mudanças de rota

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
        </div>
    );
}