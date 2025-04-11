"use client";
import { useState, useEffect } from "react";

export default function Preloader({onComplete}: {onComplete: () => void}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() =>{
            setIsLoading(false);
            onComplete();
        }, 1000)
        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!isLoading) return null;
    
    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
        </div>
    );
}