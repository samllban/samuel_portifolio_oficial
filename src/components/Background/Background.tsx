'useclient'
//import { cn } from "@/lib/utils";
import React from "react";

export default function Background({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex min-h-[40rem] w-full flex-col overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
            {children}
        </div>
    );
}