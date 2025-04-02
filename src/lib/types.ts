export interface CloudinaryConfig {
    cloud: {
        cloudName: string;
        apiKey?: string;
        apiSecret?: string;
    };
    url?: {
        secure?: boolean;
    };
}

export interface GetTransformedImageParams {
    imageName: string;
    width?: number;
    height?: number;
}