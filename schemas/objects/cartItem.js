export default {
    type: 'object',
    name: 'cartItem',
    title: 'Cart Item',
    fields: [
        {
            name: "productItem",
            type: 'reference',
            to: [{ type: 'product' }],
            title: "Product Item",
        },
        {
            name: 'productQuantity',
            type: 'number',
            title: 'Product Quantity',
            initialValue: 1
        }
    ],
    preview: {
        select: {
            title: 'productItem.title',
            media: 'productItem.productImage',
            number: 'productQuantity'
        },
        prepare({ title, media, number }) {
            return {
                title: title,
                media: media,
                subtitle: `${number} of ${title}`,
            }
        },
    },
};