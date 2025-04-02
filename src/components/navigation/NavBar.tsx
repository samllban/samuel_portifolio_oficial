"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";


export  default function NavBar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Sobre",
            link: "/sobre",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Serviços",
            link: "/servicos",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },{
            name: "Contato",
            link: "/contato",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text" />
        }
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
