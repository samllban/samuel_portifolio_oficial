import cld from './cloudinaryConfig';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'; // Correção aqui
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import type { GetTransformedImageParams } from './types';

export const getTransformedImage = ({
    imageName,
    width = 500,
    height = 500
}: GetTransformedImageParams) => {
    return cld
        .image(imageName)
        .delivery(format('auto'))
        .delivery(quality('auto'))
        .resize(
            auto()
                .gravity(autoGravity()) // Correção aqui (não usa 'new')
                .width(width)
                .height(height)
        );
};