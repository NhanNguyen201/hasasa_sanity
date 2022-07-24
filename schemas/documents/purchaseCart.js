import { BellIcon } from '@sanity/icons'
import React from 'react'

export default {
    name: 'purchaseCart',
    type: 'document',
    title: 'Purchase Cart',
    icon: BellIcon,
    
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
        { 
            name: 'cartStatus',
            type: 'string',
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Delivering", value: "delivering" },
                    { title: "Success Ordering", value: "success" },
                ],
            },
            defaultValue: "pending",
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string',
            require: true
        }
    ],

    preview: {
        select: {
            user: 'user.bioName',
            status: 'cartStatus'
        },
        prepare({ user, status }) {
            const state = {
                pending: {
                    image: 'https://www.inventicons.com/uploads/iconset/1309/wm/512/waiting-94.png',
                    subTitle: " Waiting for approving"
                },
                delivering : {
                    image: 'https://static.vecteezy.com/system/resources/previews/002/641/119/original/fast-delivery-icon-vector.jpg',
                    subTitle: " Delivering"
                },
                success: {
                    image: 'https://goodtour.com.vn/wp-content/uploads/2021/01/check-icon-vector-10850982.jpg',
                    subTitle: " Paid and Delivered"
                }
            }
            return {
                media: <img src={state[status].image} alt="status image"/>,
                title: user,
                subtitle: state[status].subTitle
            }
        },
    },
}

