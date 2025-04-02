// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://samuelbandeira.netlify.app'

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            priority: 1.0,
        },
        {
            url: `${baseUrl}/sobre`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contato`,
            lastModified: new Date(),
            priority: 1.0,
        },
        {
            url: `${baseUrl}/servicos`,
            lastModified: new Date(),
            priority: 0.9,
        }
    ]
}