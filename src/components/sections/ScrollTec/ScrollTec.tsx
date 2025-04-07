"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const icons = [
    { id: 1, name: "React", icon: "/icons/react.svg" },
    { id: 2, name: "AWS", icon: "/icons/aws.svg" },
    { id: 3, name: "CSS", icon: "/icons/css.svg" },
    { id: 4, name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    { id: 5, name: "HTML", icon: "/icons/html.svg" },
    { id: 6, name: "Node.js", icon: "/icons/node.svg" },
    { id: 7, name: "JavaScript", icon: "/icons/js.svg" },
    { id: 8, name: "SQL", icon: "/icons/sql.svg" },
    { id: 9, name: "PHP", icon: "/icons/php.svg" },
    { id: 10, name: "Docker", icon: "/icons/docker.svg" },
];

const TechIcon = ({ src, alt }: { src: string; alt: string }) => (
    <div className="w-[60px] h-[60px] flex justify-center items-center">
        <Image
            src={src}
            alt={alt}
            width={70}
            height={70}
            className="object-contain"
            loading="lazy"
        />
    </div>
);

export default function ScrollTec() {
    return (
        <div className="w-full h-[300px] bg-transparent">
            <Swiper
                slidesPerView={4}
                spaceBetween={9}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={3000}
                modules={[Autoplay]}
                breakpoints={{
                    640: { slidesPerView: 6 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 },
                }}
                className="mt-5"
            >
                {[...icons, ...icons].map((icon, index) => (
                    <SwiperSlide key={`${icon.id}-${index}`} className="flex justify-center">
                        <TechIcon src={icon.icon} alt={icon.name} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}