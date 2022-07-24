

export default {
    title: 'Image Carousel',
    name: 'carousel',
    type: 'object',
    fields: [
        {
            name: 'height',
            title: 'Carousel height',
            type: 'number',
            initialValue: 500
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
            }],
            options: {
                layout: 'grid',
            },
        },
    ],
    preview: {
        select: {
            images: 'images',
        },
        prepare({ images }) {
            return {
                title: "Carousel",
                subtitle: `A carousel of ${images.length} images`
            };
        },
    },
};