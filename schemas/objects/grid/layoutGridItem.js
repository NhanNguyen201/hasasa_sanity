export default {
    name: "layoutGridItem",
    type: "object",
    title: "Layout Grid Item",
    fields: [
        {
            name: "itemSize",
            title: "Item size",
            type: 'number',
            initialValue: 2,
            options: {
                list: [
                    { title: '1', value: 1 },
                    { title: '2', value: 2 },
                    { title: '3', value: 3 },
                    { title: '4', value: 4 },
                    { title: '5', value: 5 },
                    { title: '6', value: 6 },
                    { title: '7', value: 7 },
                    { title: '8', value: 8 },
                    { title: '9', value: 9 },
                    { title: '10', value: 10 },
                    { title: '11', value: 11 },
                    { title: '12', value: 12 }
                ]
            },
        },
        {
            name: "itemType",
            title: "Item Type",
            type: 'array',
            of: [
                { type: 'textSection'},
                { type: 'imageSection'},
                { type: 'productGrid' },
                { type: 'carousel' },
                { type: 'banner'},
                { type: 'buyButtonSection' },
                { type: 'layoutGridItemContainer' },
                { type: 'card' }
            ],
            validation: Rule => Rule.max(1).error('Max is 1 item only')
        }
    ],
    preview: {
        select: {
            itemSize: 'itemSize',
            itemType: 'itemType.0'
        },
        prepare({ itemType, itemSize }) {
            // console.log("itemType: ", itemType)
            return {

                title: `size ${itemSize} of ${itemType?._type || "blank" }`,
                subtitle: !itemType ? "This will be an empty gridItem" : "",
            };
        },
    },
}