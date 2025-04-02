import { Cloudinary } from '@cloudinary/url-gen';

// Tipagem para as configurações
interface CloudinaryConfig {
    cloud: {
        cloudName: string;
        apiKey?: string;
        apiSecret?: string; // Apenas para server-side
    };
    url?: {
        secure?: boolean;
    };
}

const config: CloudinaryConfig = {
    cloud: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dwyxuizsg'
    },
    url: { secure: true }
};

const cld = new Cloudinary(config);

export default cld;