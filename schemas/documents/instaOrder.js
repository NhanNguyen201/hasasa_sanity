import { BellIcon } from '@sanity/icons'

export default {
    name: 'instaOrder',
    type: 'document',
    title: 'Instant Order',
    icon: BellIcon,
    fieldsets: [
        {
            title: 'User',
            name: 'user',
        },
        {
            title: 'Cart',
            name: 'cart',
        },
    ],
    fields: [
        {
            name: "userName",
            type: 'string',
            title: "Order user name",
            description: 'Name of the user',
            fieldset: 'user',
        },
        {
            name: "userPhoneNumber",
            type: 'string',
            title: "Order user phone number",
            description: 'Phone number of the user',
            fieldset: 'user',
        },
        {
            name: "userEmail",
            type: 'string',
            title: "Order user mail",
            description: 'Mail of the user',
            fieldset: 'user',
        },
        {
            name: "userAddress",
            type: 'string',
            title: "Order user address",
            description: 'Address of the user',
            fieldset: 'user',
        },
        {
            name: "productItem",
            type: 'reference',
            to: [{ type: 'product' }],
            title: "Product Item",
            fieldset: 'cart',
        },
        {
            name: 'productQuantity',
            type: 'number',
            title: 'Product Quantity',
            fieldset: 'cart'
        },
        {
            name: 'sumaryPrice',
            type: 'number',
            title: 'Sumary pricce',
            fieldset: 'cart'
        }
    ],

    preview: {
        select: {
            quantity: 'productQuantity',
            productTitle: 'productItem.title',
        },
        prepare({ quantity, productTitle }) {
            return {
                title: productTitle,
                subtitle: `${quantity} of ${productTitle}`,
            }
        },
    },
}