export default {
    name: "layoutGridItemContainer",
    type: "object",
    title: "Layout Grid Item Container",
    fields: [
        {
            name: "containerArray",
            title: "Container array",
            type: 'array',
            of: [
                { type: 'textSection'},
                { type: 'imageSection'},
                { type: 'productGrid' },
                { type: 'carousel' },
                { type: 'banner'},
                { type: 'buyButtonSection' },
                { type: 'card' },
                { type: 'layoutGrid' },
            ],
        }
    ]
}