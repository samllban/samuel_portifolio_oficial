import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['aceternity.com'], // Adicione todos os domínios externos aqui
    // Opcional: padrões mais específicos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        pathname: '/images/products/thumbnails/new/**',
      },
    ],
  },
};

export default nextConfig;
