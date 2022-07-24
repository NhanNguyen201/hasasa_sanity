
export default {
    name: "productGrid",
    type: "object",
    title: "Product Grid",
    fields: [
        {
            name: "gridOf",
            title: "Grid of",
            type: 'number',
            initialValue: 2,
            options: {
                list: [
                  { title: '1', value: 1 },
                  { title: '2', value: 2 },
                  { title: '3', value: 3 },
                  { title: '4', value: 4 },
                  { title: '5', value: 5 },
                ]
            },
        },
        {
            name: "productGridArray",
            title: "Product Grid Array",
            type: 'array',
            of: [{
                name: 'gridItem',
                title: "Grid Item",
                type: 'reference',
                to: [{
                    type: 'product',
                }],
            }]
        }
    ],
    preview: {
        select: {
            productGrid: 'productGridArray',
            gridSize: 'gridOf'
        },
        prepare({ productGrid, gridSize }) {
            return {
                title: 'Product grid',
                subtitle: `Grid of ${productGrid.length} products in the grid of ${gridSize}`,
            };
        },
    },
}