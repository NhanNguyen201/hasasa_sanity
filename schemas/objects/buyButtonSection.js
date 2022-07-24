export default {
    type: 'object',
    name: 'buyButtonSection',
    title: 'Buy Button',
    fields: [
        {
            title: 'Button Text',
            name: 'buttonText',
            type: 'string',
        },
        {
            name: 'align',
            type: 'string',
            title: 'Align',
            options: {
                list: [
                    { title: "Left", value: "start" },
                    { title: "Right", value: "end" },
                    { title: "Center", value: "center" },
                ],
            },
            defaultValue: "start",
        },
        {
            name: 'variant',
            type: 'string',
            title: 'Button variant',
            options: {
                list: [
                    { title: "Contained", value: "contained" },
                    { title: "Outlined", value: "outlined" },
                    { title: "Text", value: "text" },
                ],
            },
            defaultValue: "contained",
        },
        {
            title: 'Product in dialog',
            name: 'productRef',
            type: 'reference',
            to: [{
                type: 'product',
            }],
            validation: Rule => Rule.required().error("This field is required")
        }
    ],
    preview: {
      select: {
        buttonText: 'buttonText',
        productRef: 'productRef.title'
      },
      prepare({ buttonText, productRef }) {
        return {
          title : `A button to ${productRef} dialog`,
          subtitle: `${buttonText}`
        };
      },
    },
  };