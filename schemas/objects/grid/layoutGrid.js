export default {
    name: "layoutGrid",
    type: "object",
    title: "Layout Grid",
    fields: [
       
        {
            name: "layoutGridArray",
            title: "Layout Grid Array",
            type: 'array',
            of: [{
                type: 'layoutGridItem'
            }]
        }
    ],
    preview: {
        select: {
            layoutGrid: 'layoutGridArray',
        },
        prepare({ layoutGrid }) {
            return {
                title: 'Layout grid',
                subtitle: `Grid of ${layoutGrid.length} sections`,
            };
        },
    },
}