import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        pathname: '/images/products/thumbnails/new/**'
      }
    ],
    // Configurações otimizadas para performance
    deviceSizes: [640, 750, 828, 1080, 1200], // Tamanhos comuns de dispositivos
    imageSizes: [64, 96, 128, 256], // Tamanhos para placeholders/thumbnails
    formats: ['image/webp'], // Forçar WebP para melhor compressão
    minimumCacheTTL: 86400, // Cache de 24 horas (equilibra frescor e performance)
  },
  // Configurações básicas de otimização
  compress: true,
  productionBrowserSourceMaps: false, // Melhora segurança em produção
};

export default nextConfig;