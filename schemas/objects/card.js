export default {
    title: 'Post Card',
    name: 'card',
    type: 'object',
    fields: [
        {
            type: 'image',
            title: 'Card Image',
            name: 'cardImage',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        },
        {
            title: "The page the card link to :",
            name: 'route',
            type: 'reference',
            to: [{ type: 'route' }],
            validation: Rule => Rule.required()
        },
        {
            type: 'string',
            title: 'Card Title',
            name: 'cardTitle',
            validation: Rule => Rule.required()
        },
        {
            type: 'text',
            title: 'Card Content',
            name: 'cardContent',
        },
    ],
    preview: {
        select: {
            image: 'cardImage',
            title: 'cardTitle',
            content: 'cardContent'
        },
        prepare({ image, title, content }) {
            return {
                media: image,
                title,
                subtitle: content
            };
        },
    },
};