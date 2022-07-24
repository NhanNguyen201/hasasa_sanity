import { IceCreamIcon } from '@sanity/icons'

const removeAscent = str => {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function removeAscentSlugify (input){
    let rmAscent = removeAscent(input);
    let newSlug = rmAscent.replace(/\s/g, "_")
    return newSlug
}
function searchSlugGenerater(input) {
    return removeAscent(input)
}
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    icon: IceCreamIcon,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required().error("This field is required")
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                slugify: removeAscentSlugify
            }
        },
        {
            name: 'searchSlug',
            type: 'slug',
            title: 'Search slug',
            options: {
                source: 'title',
                slugify: searchSlugGenerater
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
            validation: Rule => Rule.required().error("This field is required")

        },
        {
            name: 'productImage',
            type: 'image',
            title: 'Product Image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'isFreeship',
            type: 'boolean',
            title: 'Is the product freeship ?',
            initialValue: false
        },
        {
            name: 'isDiscount',
            type: 'boolean',
            title: 'Is the product discounted ?',
            initialValue: false
        },
        {
            name: 'discountAmount',
            type: 'number',
            title: 'Amount of discount',
            hidden: ({ parent, value }) => !value && !parent?.isDiscount
        },
        {
            title: 'Product Page Route',
            name: 'productPageRoute',
            description: 'Allow the product link to a product page',
            type: 'reference',
            to: [{ type: 'route' }],
        }
    ],

    preview: {
        select: {
            title: 'title',
            media: 'productImage',
        },
    },
}