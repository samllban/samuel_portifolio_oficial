"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/Floating-navbar";

export default function NavBar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Sobre",
            link: "/sobre",
        },
        {
            name: "Serviços",
            link: "/servicos",
        }, {
            name: "Contato",
            link: "/contato",
        }
    ];
    return (
        <>
            <div className="relative  w-full">
                <FloatingNav navItems={navItems} />
            </div>
        </>
    );
}
