import React from 'react';
import Image from 'next/image';

// Define type for social media icon
type SocialIcon = {
    id: number;
    name: string;
    icon: string;
    url: string;
};

const icons: SocialIcon[] = [
    { id: 1, name: "github", icon: "/icons/github.svg", url: "https://github.com/samllban" },
    { id: 2, name: "instagram", icon: "/icons/instagram.svg", url: "https://www.instagram.com/samuel.bandeira.all/" },
    { id: 3, name: "linkedin", icon: "/icons/linkdin.svg", url: "https://www.linkedin.com/in/samuel-bandeira-3a6692253/" },
    { id: 4, name: "whatsapp", icon: "/icons/whatswapp.svg", url: "https://wa.me/message/D7SMXDK5YXAOA1" },
];

const RedeSociais: React.FC = () => {
    return (
        <div className="flex">
            {icons.map((icon) => (
                <a
                    href={icon.url}
                    key={icon.id}
                    className="p-2 mx-1 transition-transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={icon.name}
                >
                    <Image
                        src={icon.icon}
                        alt={icon.name}
                        width={20}
                        height={35}
                        className="object-contain"
                    />
                </a>
            ))}
        </div>
    );
};

export default RedeSociais;