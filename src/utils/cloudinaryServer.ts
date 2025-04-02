import { getTransformedImage } from '@/lib/cloudinary/transformations';

export async function getOptimizedImageUrl(
    imageName: string,
    options?: GetTransformedImageParams
) {
    'use server';
    return getTransformedImage({ imageName, ...options }).toURL();
}