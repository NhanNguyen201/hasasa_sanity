import { BillIcon } from '@sanity/icons'

export default {
    name: 'userCart',
    type: 'document',
    title: 'User Cart',
    icon: BillIcon,
    
    fields: [
        {
            name: "user",
            type: 'reference',
            to: [{ type: 'user' }],
        },
        {
            name: 'cart',
            type: 'array',
            title: 'User Cart',
            of: [
                { type: 'cartItem' }
            ],
        },
    ],

    preview: {
        select: {
            user: 'user.bioName',
        },
        prepare({ user }) {
            return {
                title: user,
            }
        },
    },
}