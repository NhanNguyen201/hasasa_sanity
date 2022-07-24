export default {
    type: 'object',
    name: 'banner',
    title: 'Banner',
    fields: [
      {
        name: 'text',
        type: 'portableText',
        title: 'Text',
      },
      {
        name: 'backgroundColor',
        type: 'color',
        title: 'Background Color'
      },
      {
        name: 'textColor',
        type: 'color',
        title: 'Text Color'
      }
    ],
    preview: {
      prepare() {
        return {
          title: "Banner",
        };
      },
    },
  };