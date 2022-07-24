import { UserIcon } from '@sanity/icons'
import React from 'react'


export default {
    name: 'user',
    type: 'document',
    title: 'User',
    icon: UserIcon,
    fields: [
        {
            name: 'userName',
            type: 'string',
            title: 'Username',
        },
        {
            name: 'bioName',
            type: 'string',
            title: 'Bio Name',
        },
        {
            name: 'password',
            type: 'string',
            title: 'Password',
            initialValue: "123456"
        },

        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
        },
        {
            name: 'phoneNumber',
            type: 'string',
            title: 'Phone Number',
        },
        {
            name: 'status',
            type: 'boolean',
            title: 'Have the account been verified ?',
            initialValue: false
        }
    ],

    preview: {
        select: {
            title: 'bioName',
            status: 'status'
        },
        prepare({ title, status }) {
            const userStatus = {
                notComfirm: 'https://static.thenounproject.com/png/1903018-200.png',
                confirm: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png'
            }
            return {
                media: <img src={userStatus[status ? "confirm" : "notComfirm"]} alt="status image"/>,
                title: title,
                subtitle: !status ? "This account need to be verified" : ""
            }
        }
    },
}